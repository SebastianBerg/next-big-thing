import { ApolloClient } from "@apollo/client";
import { productBySlug } from "../../../queries/product";

export const fetchProductBySlug = async (
  apolloClient: ApolloClient<any>,
  slug: string | string[] | undefined
) => {
  const res = await apolloClient.query({
    query: productBySlug,
    variables: {
      slug,
    },
  });
  return res.data.productsCollection.items[0];
};
