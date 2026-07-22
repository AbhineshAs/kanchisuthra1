import { shopifyFetch } from "./shopify";

// 1. Signup / Create Customer
export async function createCustomer({ email, password, firstName, lastName, phone }) {
    const query = `
        mutation customerCreate($input: CustomerCreateInput!) {
            customerCreate(input: $input) {
                customer {
                    id
                    email
                    firstName
                    lastName
                    phone
                }
                customerUserErrors {
                    code
                    field
                    message
                }
            }
        }
    `;

    const input = {
        email,
        password,
        firstName,
        lastName,
    };
    if (phone && phone.trim() !== "") {
        input.phone = phone.trim();
    }

    const response = await shopifyFetch(query, { input });
    return response?.data?.customerCreate;
}

// 2. Login / Create Access Token
export async function createCustomerAccessToken({ email, password }) {
    const query = `
        mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
            customerAccessTokenCreate(input: $input) {
                customerAccessToken {
                    accessToken
                    expiresAt
                }
                customerUserErrors {
                    code
                    field
                    message
                }
            }
        }
    `;

    const response = await shopifyFetch(query, {
        input: { email, password }
    });
    return response?.data?.customerAccessTokenCreate;
}

// 3. Get Customer Details
export async function getCustomerDetails(accessToken) {
    const query = `
        query getCustomer($customerAccessToken: String!) {
            customer(customerAccessToken: $customerAccessToken) {
                id
                firstName
                lastName
                email
                phone
                numberOfOrders
                orders(first: 20) {
                    edges {
                        node {
                            id
                            orderNumber
                            processedAt
                            financialStatus
                            fulfillmentStatus
                            currentTotalPrice {
                                amount
                                currencyCode
                            }
                            lineItems(first: 10) {
                                edges {
                                    node {
                                        title
                                        quantity
                                        variant {
                                            title
                                            image {
                                                url
                                                altText
                                            }
                                            price {
                                                amount
                                                currencyCode
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                defaultAddress {
                    id
                    address1
                    address2
                    city
                    province
                    zip
                    country
                    phone
                }
                addresses(first: 10) {
                    edges {
                        node {
                            id
                            address1
                            address2
                            city
                            province
                            zip
                            country
                            phone
                        }
                    }
                }
            }
        }
    `;

    const response = await shopifyFetch(query, { customerAccessToken: accessToken });
    return response?.data?.customer;
}

// 4. Forgot Password / Recover Customer Password
export async function recoverCustomerPassword(email) {
    const query = `
        mutation customerRecover($email: String!) {
            customerRecover(email: $email) {
                customerUserErrors {
                    code
                    field
                    message
                }
            }
        }
    `;

    const response = await shopifyFetch(query, { email });
    return response?.data?.customerRecover;
}

// 5. Logout / Delete Access Token
export async function deleteCustomerAccessToken(accessToken) {
    const query = `
        mutation customerAccessTokenDelete($customerAccessToken: String!) {
            customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
                deletedAccessToken
                deletedCustomerAccessTokenId
                userErrors {
                    field
                    message
                }
            }
        }
    `;

    const response = await shopifyFetch(query, { customerAccessToken: accessToken });
    return response?.data?.customerAccessTokenDelete;
}
