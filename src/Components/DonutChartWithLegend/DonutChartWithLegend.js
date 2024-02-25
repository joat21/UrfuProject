import { Cell, Pie, PieChart } from "recharts";
import styles from "./DonutChartWithLegend.module.css"

const DonutChart = ({ data, colors }) => {
  return (
    <>
      <PieChart className={styles.chart} width={350} height={350}>
        <Pie
          data={data}
          innerRadius={140}
          outerRadius={175}
          dataKey={"value"}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={colors[index % colors.length]}/>
          ))}
        </Pie>
      </PieChart>
      <ul className={`list-reset ${styles.legend}`}>
        {data.map((entry, index) => console.log() || (
          <li key={index} className={styles['legend__item']}>
            <span className={styles.title}>{entry.name}</span>
            <span className={styles.color} style={{backgroundColor: colors[index % colors.length]}}></span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DonutChart;
