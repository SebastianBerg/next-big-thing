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
    <div className="w-screen h-screen mt-10">
      <div className="m-auto w-[50vw] p-8 border-black border-solid border-1 rounded-lg shadow-md shadow-slate-500/50">
        <h1 className="text-6xl text-center">{product?.name}</h1>
      </div>
    </div>
  );
}

const apolloClient = getApolloClient();
