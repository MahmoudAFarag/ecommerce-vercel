import type { GetStaticPropsContext, InferGetStaticPropsType, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getAllProducts } from '@framework/product/getAllProducts';
import { getConfig } from '@framework/api/config';

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
      <h1>{JSON.stringify(products)}</h1>
    </div>
  );
};

export default Home;
