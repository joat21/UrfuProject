import GradePoints from "../GradePoints/GradePoints";
import GradePoint from "../GradePoint/GradePoint";
import styles from "./GradingBar.module.css";

const GradingBar = (props) => {
  return (
    <div className={styles['grading-bar']}>
      <GradePoint
        className={styles['your-grade']}
        grade={props.grade} value={props.grade}
        style={{
          left: `${props.grade}%`,
          flexDirection: 'column-reverse',
          bottom: 0
        }}
      />
      <div className={styles['bar__inner']}>
        <div className={styles['bar__bg']}>
          <div className={styles['bar__fill']} style={{width: `${props.grade}%`}}></div>
        </div>
        <GradePoints grade={props.grade}/>
      </div>
    </div>
  );
}

export default GradingBar;
