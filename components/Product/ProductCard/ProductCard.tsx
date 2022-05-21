import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@common/types/Product';

interface IProductCard {
  product: Product;
}
const imagePlaceholder = '/image-placeholder.svg';

const ProductCard = ({ product }: IProductCard) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a>
        <div>
          <h3>{product.name}</h3>
          <span>$14</span>
        </div>
        {product.images && (
          <Image
            alt={product.name}
            src={product.images[0].url ?? imagePlaceholder}
            height={440}
            width={440}
            quality={85}
            layout='responsive'
            priority
          />
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
