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
                    firstName
                    lastName
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
                            firstName
                            lastName
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
// 6. Update Customer Password
export async function updateCustomerPassword({
    accessToken,
    password,
}) {
    const query = `
        mutation customerUpdate(
            $customerAccessToken: String!,
            $customer: CustomerUpdateInput!
        ) {
            customerUpdate(
                customerAccessToken: $customerAccessToken,
                customer: $customer
            ) {
                customer {
                    id
                    email
                }
                customerAccessToken {
                    accessToken
                    expiresAt
                }
                customerUserErrors {
                    field
                    message
                }
            }
        }
    `;

    const response = await shopifyFetch(query, {
        customerAccessToken: accessToken,
        customer: {
            password,
        },
    });

    return response.data.customerUpdate;
}

// create address
export async function createCustomerAddress({
    accessToken,
    address,
}) {
    const query = `
    mutation customerAddressCreate(
        $customerAccessToken: String!,
        $address: MailingAddressInput!
    ) {
        customerAddressCreate(
            customerAccessToken: $customerAccessToken,
            address: $address
        ) {
            customerAddress {
                id
            }
            customerUserErrors {
                field
                message
            }
        }
    }
    `;

    const response = await shopifyFetch(query, {
        customerAccessToken: accessToken,
        address,
    });

    return response.data.customerAddressCreate;
}

// update address
export async function updateCustomerAddress({
    accessToken,
    addressId,
    address,
}) {
    const query = `
    mutation customerAddressUpdate(
        $customerAccessToken: String!,
        $id: ID!,
        $address: MailingAddressInput!
    ) {
        customerAddressUpdate(
            customerAccessToken: $customerAccessToken,
            id: $id,
            address: $address
        ) {
            customerAddress {
                id
            }
            customerUserErrors {
                field
                message
            }
        }
    }
    `;

    const response = await shopifyFetch(query, {
        customerAccessToken: accessToken,
        id: addressId,
        address,
    });

    return response.data.customerAddressUpdate;
}

// delete address
export async function deleteCustomerAddress({
    accessToken,
    addressId,
}) {
    const query = `
    mutation customerAddressDelete(
        $customerAccessToken: String!,
        $id: ID!
    ) {
        customerAddressDelete(
            customerAccessToken: $customerAccessToken,
            id: $id
        ) {
            deletedCustomerAddressId
            customerUserErrors {
                field
                message
            }
        }
    }
    `;

    const response = await shopifyFetch(query, {
        customerAccessToken: accessToken,
        id: addressId,
    });

    return response.data.customerAddressDelete;
}

// set default address
export async function setDefaultCustomerAddress({
    accessToken,
    addressId,
}) {
    const query = `
    mutation customerDefaultAddressUpdate(
        $customerAccessToken: String!,
        $addressId: ID!
    ) {
        customerDefaultAddressUpdate(
            customerAccessToken: $customerAccessToken,
            addressId: $addressId
        ) {
            customer {
                id
            }
            customerUserErrors {
                field
                message
            }
        }
    }
    `;

    const response = await shopifyFetch(query, {
        customerAccessToken: accessToken,
        addressId,
    });

    return response.data.customerDefaultAddressUpdate;
}