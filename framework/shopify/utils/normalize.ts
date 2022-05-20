import { Product } from '@common/types/Product';
import { ImageConnection, Product as ShopifyProduct } from '../schema';

export const normalizedProduct = (productNode: ShopifyProduct): Product => {
  const { id, title, handle, vendor, description, images, ...rest } = productNode;

  const product = {
    id,
    name: title,
    description,
    vendor,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizedProductImages(images),
    ...rest,
  };

  return product;
};

export const normalizedProductImages = ({ edges }: ImageConnection) => {
  return edges.map(({ node }) => {
    return {
      url: `/images/${node.originalSrc}`,
      ...node,
    };
  });
};
