import { fetchProductBySlug } from "@/hooks/product/fetchProductBySlug";
import { getApolloClient } from "../../../../api/apollo/apolloClient";
import { FunctionComponent } from "react";

interface IProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: IProductPageProps) {
  const product = await fetchProductBySlug(apolloClient, params.slug);
  console.log(product, "product", params, "params");
  return <div>{product?.name}</div>;
}

const apolloClient = getApolloClient();
