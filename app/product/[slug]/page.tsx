"use cliet";
import { GetStaticProps } from "next";
import { getApolloClient } from "../../../api/apollo/apolloClient";
import { IProduct } from "../../../types/product";
import ProductPage from "@/components/pages/product/product-page";
import { createProductPagePaths } from "@/hooks/product/createProductPagePaths";
import { fetchProductBySlug } from "@/hooks/product/fetchProductBySlug";

interface IDynamicPageProps {
  params: IProduct[];
}

const apolloClient = getApolloClient();

export default function DynamicProductPage({ params }: IDynamicPageProps) {
  console.log(params, "params");

  /* @ts-expect-error Async Server Component */
  return <ProductPage params={params} />;
}

export const revalidate = 5;

export const generateStaticParams = async () => {
  const paths = await createProductPagePaths(apolloClient);
  return [
    {
      paths,
      fallback: false,
    },
  ];
};
