import { fetchProductBySlug } from "@/hooks/product/fetchProductBySlug";
import { getApolloClient } from "../../../../api/apollo/apolloClient";

interface IProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: IProductPageProps) {
  const product = await fetchProductBySlug(apolloClient, params.slug);
  return (
    <div className="w-screen h-screen">
      <div className="m-auto w-[50vw]">
        <h1 className="text-6xl mt-8 text-center">{product?.name}</h1>
      </div>
    </div>
  );
}

const apolloClient = getApolloClient();
