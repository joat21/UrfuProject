import DescList from "../DescList/DescList";
import styles from "./UserInfo.module.css";

const UserInfo = (props) => {
  return (
    <div className={styles.user}>
      <svg className={styles['user__avatar']} xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 170 170" fill="none">
        <g clipPath="url(#clip0_445_131)">
          <path d="M85 85C93.4057 85 101.623 82.5074 108.612 77.8375C115.601 73.1675 121.048 66.5299 124.265 58.7641C127.482 50.9982 128.323 42.4529 126.683 34.2087C125.044 25.9645 120.996 18.3917 115.052 12.448C109.108 6.50425 101.536 2.45652 93.2913 0.816645C85.0471 -0.823227 76.5018 0.0184147 68.736 3.23514C60.9701 6.45186 54.3325 11.8992 49.6625 18.8883C44.9926 25.8774 42.5 34.0943 42.5 42.5C42.5113 53.7683 46.9925 64.5718 54.9604 72.5396C62.9282 80.5075 73.7318 84.9888 85 85ZM85 14.1667C90.6038 14.1667 96.0818 15.8284 100.741 18.9417C105.401 22.055 109.032 26.4801 111.177 31.6573C113.321 36.8346 113.882 42.5315 112.789 48.0276C111.696 53.5237 108.997 58.5722 105.035 62.5347C101.072 66.4972 96.0237 69.1957 90.5276 70.2889C85.0314 71.3822 79.3345 70.8211 74.1573 68.6766C68.9801 66.5321 64.555 62.9006 61.4417 58.2412C58.3284 53.5818 56.6667 48.1038 56.6667 42.5C56.6667 34.9856 59.6518 27.7789 64.9653 22.4653C70.2788 17.1518 77.4855 14.1667 85 14.1667Z" fill="#2B4A52"/>
          <path d="M85 99C68.0982 99.0187 51.894 105.741 39.9426 117.693C27.9913 129.644 21.2687 145.848 21.25 162.75C21.25 164.629 21.9963 166.43 23.3247 167.759C24.653 169.087 26.4547 169.833 28.3333 169.833C30.212 169.833 32.0136 169.087 33.342 167.759C34.6704 166.43 35.4167 164.629 35.4167 162.75C35.4167 149.6 40.6406 136.988 49.9393 127.689C59.238 118.391 71.8497 113.167 85 113.167C98.1503 113.167 110.762 118.391 120.061 127.689C129.359 136.988 134.583 149.6 134.583 162.75C134.583 164.629 135.33 166.43 136.658 167.759C137.986 169.087 139.788 169.833 141.667 169.833C143.545 169.833 145.347 169.087 146.675 167.759C148.004 166.43 148.75 164.629 148.75 162.75C148.731 145.848 142.009 129.644 130.057 117.693C118.106 105.741 101.902 99.0187 85 99Z" fill="#2B4A52"/>
        </g>
        <defs>
          <clipPath id="clip0_445_131">
            <rect width="170" height="170" fill="white"/>
          </clipPath>
        </defs>
      </svg>

      <div className={styles['user__info']}>
        <h2 className={styles['full-name']}>{`${props.user.surname} ${props.user.name} ${props.user.patronymic}`}</h2>
        {/* <DescList data={userData}/> */}
        <div className={styles['user__data']}>
          <ul className={`${styles['data__keys']} list-reset`}>
            <li className={`${styles['data__key']} data__key`}>&#8470; студенческого билета</li>
            <li className={`${styles['data__key']} data__key`}>Группа</li>
            <li className={`${styles['data__key']} data__key`}>Электронная почта</li>
            <li className={`${styles['data__key']} data__key`}>Мое направление</li>
          </ul>

          <ul className={`${styles['data__values']} list-reset`}>
            <li className={styles['data__value']}>
              {props.user.studentID}
            </li>
            <li className={styles['data__value']}>
              {props.user.group}
            </li>
            <li className={styles['data__value']}>
              {props.user.urfuEmail}
            </li>
            <li className={styles['data__value']}>
              {props.user.direction}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
