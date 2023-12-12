import styles from "./GradePoint.module.css";

const GradePoint = (props) => {
  const color = props.grade >= props.value ? "#99e5b2" : "#d3d7d6";
  return (
    <div className={`${styles.point} ${props.className}`} style={props.style}>
      <svg className={styles.circle} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
        <circle cx="8.5" cy="8.5" r="8.5" style={{fill : color}}/>
      </svg>
      <span className={styles.grade}>{props.value}</span>
    </div>
  );
}

export default GradePoint;
