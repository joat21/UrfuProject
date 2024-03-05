import styles from "./TextSection.module.css";

const TextSection = (props) => {
  return (
    <section className={props.className}>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.text}>{props.text}</p>
    </section>
  );
}

export default TextSection;
