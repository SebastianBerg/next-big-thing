import { gql } from "@apollo/client";

export const product = gql`
  query ProductQuery($productID: String!) {
    products(id: $productID) {
      id
      slug
      name
    }
  }
`;

export const productSlugCollection = gql`
  query {
    productsCollection {
      items {
        slug
        sys {
          id
        }
      }
    }
  }
`;

export const productBySlug = gql`
  query ProductBySlug($slug: String!) {
    productsCollection(where: { slug: $slug }) {
      items {
        name
        slug
      }
    }
  }
`;

export const productsCollection = gql`
  query {
    productsCollection {
      items {
        name
        slug
      }
    }
  }
`;
