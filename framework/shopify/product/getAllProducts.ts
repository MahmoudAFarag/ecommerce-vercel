import getAllProductsQuery from '@framework/utils/queries/getProductsQuery';
import fetchApi from '@framework/utils/fetchApi';
import { ProductConnection } from '../schema';
import { normalizedProduct } from '@framework/utils/normalize';
import { Product } from '@common/types/Product';
import { IApiConfig } from '@common/types/Api';

interface IProduct {
  products: ProductConnection;
}

export const getAllProducts = async (config: IApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<IProduct>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  });

  // structure: shopify data => edges (products array) => node (product)
  const products = data.products.edges.map(({ node: product }) => {
    return normalizedProduct(product);
  });

  return products ?? [];
};
