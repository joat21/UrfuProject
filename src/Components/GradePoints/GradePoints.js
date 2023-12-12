import GradePoint from "../GradePoint/GradePoint";
import styles from "./GradePoints.module.css";

const GradePoints = (props) => {
  return (
    <div className={styles['points']}>
      <GradePoint grade={props.grade} value={0}/>
      <GradePoint grade={props.grade} value={20}/>
      <GradePoint grade={props.grade} value={40}/>
      <GradePoint grade={props.grade} value={60}/>
      <GradePoint grade={props.grade} value={80}/>
      <GradePoint grade={props.grade} value={100}/>
    </div>
  );
}

export default GradePoints;
