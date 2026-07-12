const STORE = import.meta.env.VITE_SHOPIFY_STORE;
const TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

console.log("STORE:", STORE);
console.log("TOKEN:", TOKEN);
console.log("TOKEN LENGTH =", TOKEN?.length);

export async function shopifyFetch(query, variables = {}) {
    const response = await fetch(
        `https://${STORE}/api/2025-07/graphql.json`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": TOKEN,
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        }
    );

    const json = await response.json();

    console.log("Status:", response.status);
    console.log("Response:", json);

    return json;
}