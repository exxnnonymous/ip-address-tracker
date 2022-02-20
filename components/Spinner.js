import styles from "../styles/Spinner.module.css"

function Spinner() {
  return (
    <div className={styles.spinner_wrap}>
    <div className={styles.lds_ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
}

export default Spinner;
