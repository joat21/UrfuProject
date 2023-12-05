import DescListItem from "../DescListItem/DescListItem";
import styles from "./DescList.module.css";

const DescList = (props) => {
  const dataKeys = Object.keys(props.data);
  return (
    <dl className={styles['desc-list']}>
      {dataKeys.map((dataKey) => (
        <DescListItem
          dataKey={dataKey}
          value={props.data[dataKey]}
        />
      ))}
    </dl>
  );
}

export default DescList;
