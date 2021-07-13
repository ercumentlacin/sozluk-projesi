import styles from './styles.module.css';

const HeadingTitle = ({ title }) => {
  return <h1 className={styles.h1}>{title ? title : null}</h1>;
};

export default HeadingTitle;
