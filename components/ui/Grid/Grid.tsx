import styles from './Grid.module.css';

interface IGrid {
  children: React.ReactNode;
}

const Grid = ({ children }: IGrid) => {
  return <div className={`${styles.root} grid gap-0 grid-cols-1 lg:grid-cols-3 lg:grid-rows-2`}>{children}</div>;
};

export default Grid;
