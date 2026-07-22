import { createContext, useContext, useState, useEffect } from "react";
import {
    createCustomer,
    createCustomerAccessToken,
    getCustomerDetails,
    recoverCustomerPassword,
    deleteCustomerAccessToken,
} from "../api/auth";

const TOKEN_KEY = "shopifyCustomerAccessToken";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
    const [customer, setCustomer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        async function fetchUser() {
            if (!token) {
                if (isMounted) {
                    setCustomer(null);
                    setLoading(false);
                }
                return;
            }

            setLoading(true);
            try {
                const customerData = await getCustomerDetails(token);
                if (isMounted) {
                    if (customerData) {
                        setCustomer(customerData);
                    } else {
                        // Token is invalid or expired
                        localStorage.removeItem(TOKEN_KEY);
                        setToken(null);
                        setCustomer(null);
                    }
                }
            } catch (err) {
                console.error("Failed to fetch customer profile:", err);
                if (isMounted) {
                    localStorage.removeItem(TOKEN_KEY);
                    setToken(null);
                    setCustomer(null);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchUser();

        return () => {
            isMounted = false;
        };
    }, [token]);

    const signup = async ({ email, password, firstName, lastName, phone }) => {
        try {
            const createRes = await createCustomer({ email, password, firstName, lastName, phone });
            
            if (createRes?.customerUserErrors && createRes.customerUserErrors.length > 0) {
                return {
                    success: false,
                    errors: createRes.customerUserErrors.map((e) => e.message),
                };
            }

            if (!createRes?.customer) {
                return {
                    success: false,
                    errors: ["Failed to create account. Please try again."],
                };
            }

            return { success: true, customer: createRes.customer };
        } catch (err) {
            console.error("Signup error:", err);
            return { success: false, errors: [err.message || "An unexpected error occurred."] };
        }
    };

    const login = async ({ email, password }) => {
        try {
            const loginRes = await createCustomerAccessToken({ email, password });

            if (loginRes?.customerUserErrors && loginRes.customerUserErrors.length > 0) {
                return {
                    success: false,
                    errors: loginRes.customerUserErrors.map((e) => e.message),
                };
            }

            const newToken = loginRes?.customerAccessToken?.accessToken;
            if (!newToken) {
                return {
                    success: false,
                    errors: ["Invalid email or password."],
                };
            }

            localStorage.setItem(TOKEN_KEY, newToken);
            setToken(newToken);
            return { success: true };
        } catch (err) {
            console.error("Login error:", err);
            return { success: false, errors: [err.message || "An unexpected error occurred."] };
        }
    };

    const logout = async () => {
        if (token) {
            try {
                await deleteCustomerAccessToken(token);
            } catch (err) {
                console.error("Error revoking token on Shopify:", err);
            }
        }
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setCustomer(null);
    };

    const forgotPassword = async (email) => {
        try {
            const recoverRes = await recoverCustomerPassword(email);
            if (recoverRes?.customerUserErrors && recoverRes.customerUserErrors.length > 0) {
                return {
                    success: false,
                    errors: recoverRes.customerUserErrors.map((e) => e.message),
                };
            }
            return { success: true };
        } catch (err) {
            console.error("Password recovery error:", err);
            return { success: false, errors: [err.message || "An unexpected error occurred."] };
        }
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                customer,
                loading,
                isAuthenticated: !!token && !!customer,
                signup,
                login,
                logout,
                forgotPassword,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
