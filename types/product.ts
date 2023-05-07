export interface IProduct {
  __typeName: string;
  name: string;
  slug: string;
  sys: {
    id: string;
  };
}

export interface IProductsCollection {
  productsCollection: {
    items: IProduct[];
  };
}
