import { shopifyFetch } from "./shopify";

// Create Cart
export async function createCart() {
    const mutation = `
    mutation {
        cartCreate {
            cart {
                id
                checkoutUrl
                totalQuantity
            }
        }
    }`;

    const data = await shopifyFetch(mutation);
    return data.data.cartCreate.cart;
}

// Get Cart
export async function getCart(cartId) {
    const query = `
    query ($cartId: ID!) {
        cart(id: $cartId) {
            id
            checkoutUrl
            totalQuantity
lines(first: 100) {
  nodes {

    id
    quantity

    cost {
      totalAmount {
        amount
        currencyCode
      }
    }

    merchandise {
      ... on ProductVariant {

        id
        title

        price {
          amount
          currencyCode
        }

        product {
          id
          title
          handle

          featuredImage {
            url
            altText
          }
        }

      }
    }

  }
}

            cost {
                subtotalAmount {
                    amount
                }

                totalAmount {
                    amount
                }
            }
        }
    }`;

    const data = await shopifyFetch(query, { cartId });

    return data.data.cart;
}

// Add Item
export async function addToCart(cartId, variantId, quantity = 1) {

    const mutation = `
    mutation ($cartId: ID!, $lines: [CartLineInput!]!) {

      cartLinesAdd(cartId: $cartId, lines: $lines) {

        cart {

          id
          checkoutUrl
          totalQuantity

          lines(first:100) {
            nodes {
              id
              quantity

              cost {
                totalAmount {
                  amount
                  currencyCode
                }
              }

              merchandise {
                ... on ProductVariant {

                  id
                  title

                  price {
                    amount
                    currencyCode
                  }

                  product {
                    id
                    title

                    featuredImage {
                      url
                    }
                  }

                }
              }

            }
          }

          cost {

            subtotalAmount {
              amount
              currencyCode
            }

            totalAmount {
              amount
              currencyCode
            }

          }

        }

        userErrors {
          field
          message
        }

      }

    }`;

    const data = await shopifyFetch(mutation, {
        cartId,
        lines: [
            {
                merchandiseId: variantId,
                quantity,
            },
        ],
    });

    console.log("ADD RESPONSE", data);

    return data.data.cartLinesAdd.cart;
}


// Update Quantity
export async function updateCart(cartId, lineId, quantity) {

    const mutation = `
    mutation ($cartId: ID!, $lines: [CartLineUpdateInput!]!) {

        cartLinesUpdate(cartId: $cartId, lines: $lines) {

            cart {
                id
                checkoutUrl
                totalQuantity

                lines(first: 100) {
                    nodes {
                        id
                        quantity

                        cost {
                            totalAmount {
                                amount
                                currencyCode
                            }
                        }

                        merchandise {
                            ... on ProductVariant {
                                id
                                title

                                price {
                                    amount
                                    currencyCode
                                }

                                product {
                                    id
                                    title
                                    handle

                                    featuredImage {
                                        url
                                        altText
                                    }
                                }
                            }
                        }
                    }
                }

                cost {
                    subtotalAmount {
                        amount
                        currencyCode
                    }

                    totalAmount {
                        amount
                        currencyCode
                    }
                }
            }

        }

    }`;

    const data = await shopifyFetch(mutation, {
        cartId,
        lines: [
            {
                id: lineId,
                quantity,
            },
        ],
    });

    return data.data.cartLinesUpdate.cart;
}

// Remove Item
export async function removeFromCart(cartId, lineId) {

    const mutation = `
    mutation ($cartId: ID!, $lineIds: [ID!]!) {

        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {

            cart {
                id
                totalQuantity
            }

        }

    }`;

    const data = await shopifyFetch(mutation, {
        cartId,
        lineIds: [lineId],
    });

    return data.data.cartLinesRemove.cart;
}

export async function updateBuyerIdentity(cartId, buyerIdentity, deliveryAddress) {

    const mutation = `
    mutation UpdateCart(
      $cartId: ID!,
      $buyerIdentity: CartBuyerIdentityInput!,
      $delivery: CartSelectableAddressInput!
    ) {

      cartBuyerIdentityUpdate(
        cartId: $cartId,
        buyerIdentity: $buyerIdentity
      ) {
        cart {
          id
        }
        userErrors {
          field
          message
        }
      }

      cartSelectedDeliveryAddressesUpdate(
        cartId: $cartId,
        addresses: [$delivery]
      ) {
        cart {
          id
        }
        userErrors {
          field
          message
        }
      }

    }`;

    const data = await shopifyFetch(mutation, {
        cartId,
        buyerIdentity,
        delivery: deliveryAddress,
    });

    return data;
}