import { ApolloClient, ApolloQueryResult } from "@apollo/client";
import { IProductsCollection } from "../../../types/product";
import { productSlugCollection } from "../../../queries/product";

export const createProductPagePaths = async (
  apolloClient: ApolloClient<any>
) => {
  const res: ApolloQueryResult<IProductsCollection> = await apolloClient.query({
    query: productSlugCollection,
  });
  if (!res) return [];
  return res?.data?.productsCollection?.items?.map((product) => {
    return { params: { slug: product.slug } };
  });
};
