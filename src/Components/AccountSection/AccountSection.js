import styles from "./AccountSection.module.css";

const AccountSection = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.desc}>{props.desc}</p>
      </div>
      <div className={styles.content}>
        {props.children}
      </div>
    </section>
  );
}

export default AccountSection;
