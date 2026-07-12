import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import {
    createCart,
    getCart,
    addToCart,
    updateCart,
    removeFromCart,
    updateBuyerIdentity,
} from "../api/cart";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState(null);

    // Load Cart
    useEffect(() => {

        async function loadCart() {

            let cartId = localStorage.getItem("shopify_cart_id");

            if (!cartId) {

                const newCart = await createCart();

                cartId = newCart.id;

                localStorage.setItem("shopify_cart_id", cartId);

            }

            const cartData = await getCart(cartId);

            setCart(cartData);

        }

        loadCart();

    }, []);

    // Add Product
    async function addProduct(variantId) {

        const cartId = localStorage.getItem("shopify_cart_id");

        const updated = await addToCart(cartId, variantId);

        setCart(updated);
        setCart(updated);

    }

    // Update Qty
    async function updateQuantity(lineId, quantity) {

        const cartId = localStorage.getItem("shopify_cart_id");

        if (quantity <= 0) {

            await removeFromCart(cartId, lineId);

        } else {

            await updateCart(cartId, lineId, quantity);

        }

        const updated = await getCart(cartId);

        setCart(updated);

    }
    // Remove Product
    async function removeProduct(lineId) {

        const cartId = localStorage.getItem("shopify_cart_id");

        await removeFromCart(cartId, lineId);

        const updated = await getCart(cartId);

        setCart(updated);

    }

    async function saveCheckoutInformation(form) {

        const cartId = localStorage.getItem("shopify_cart_id");

        await updateBuyerIdentity(

            cartId,

            {
                email: form.email,
                phone: form.phone,
            },

            {
                address: {
                    address1: form.address,
                    address2: form.apartment,
                    city: form.city,
                    provinceCode: form.state,
                    countryCode: "IN",
                    zip: form.zip,
                    firstName: form.firstName,
                    lastName: form.lastName,
                }
            }

        );

        const updated = await getCart(cartId);

        setCart(updated);

    }
    return (

        <CartContext.Provider
            value={{
                cart,
                addProduct,
                updateQuantity,
                removeProduct,
                saveCheckoutInformation,

                checkout: () => {
                    if (cart?.checkoutUrl) {
                        window.location.href = cart.checkoutUrl;
                    }
                }
            }}
        >

            {children}

        </CartContext.Provider>

    );

}

export function useCart() {
    return useContext(CartContext);
}