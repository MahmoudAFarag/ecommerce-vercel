import type { GetStaticPropsContext, InferGetStaticPropsType, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getAllProducts } from '@framework/product/getAllProducts';
import { getConfig } from '@framework/api/config';

import { ProductCard } from '@components/Product';
import { Grid } from '@components/ui';

export const getStaticProps = async (context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) => {
  const config = getConfig();

  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
};

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
};

export default Home;
