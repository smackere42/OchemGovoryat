import styles from './styles.module.scss';

const Preloader = () => {
  return (
    <div className={styles.preloaderHolder}>
      <div className={styles.leftT} />
      <div className={styles.rightT} />
      <div className={styles.leftD} />
      <div className={styles.rightD} />

      <div className={styles.preloaderWrapper}>
        <div className={styles.preloader} />
      </div>
    </div>
  );
};

export default Preloader;
