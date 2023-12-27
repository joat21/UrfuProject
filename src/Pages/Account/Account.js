import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTemplate from "../../Components/PageTemplate/PageTemplate";
import AccountSection from "../../Components/AccountSection/AccountSection";
import styles from "./Account.module.css";

const Account = () => {
  return (
    <PageTemplate title={'Аккаунт'}>
      <AccountSection
        title='О&nbsp;себе'
        desc = 'Проверьте корректность данных. Если обнаружили ошибку, сообщите в&nbsp;техническую поддержку.'
      >
        <form action="https://jsonplaceholder.typicode.com/posts" method="post" className="form">
          <div className={styles['form__fields']}>
            <div className={`form__control ${styles['form__control']}`}>
              <label className={`control__title ${styles['control__title']}`}>Фамилия</label>
              <input className={`form__field ${styles['form__field']}`} type="text" name="surname" placeholder="Введите фамилию" required/>
            </div>

            <div className={`form__control ${styles['form__control']}`}>
              <label className={`control__title ${styles['control__title']}`}>Имя</label>
              <input className={`form__field ${styles['form__field']}`} type="text" name="name" placeholder="Введите имя" required/>
            </div>

            <div className={`form__control ${styles['form__control']}`}>
              <label className={`control__title ${styles['control__title']}`}>Отчество</label>
              <input className={`form__field ${styles['form__field']}`} type="text" name="patronymic" placeholder="Введите отчество" required/>
            </div>

            <div className={`form__control ${styles['form__control']}`}>
              <label className={`control__title ${styles['control__title']}`}>Академическая группа</label>
              <input className={`form__field ${styles['form__field']}`} type="text" name="academic-group" placeholder="Введите академическую группу" required/>
            </div>

            <div className={`form__control ${styles['form__control']}`}>
              <label className={`control__title ${styles['control__title']}`}>Email с&nbsp;доменом urfu.me</label>
              <input className={`form__field ${styles['form__field']}`} type="text" name="urfu-email" placeholder="Введите академическую группу" required/>
            </div>

            <div className={`form__control ${styles['form__control']}`}>
              <label className={`control__title ${styles['control__title']}`}>Резервный email</label>
              <input className={`form__field ${styles['form__field']}`} type="text" name="reserve-email" placeholder="Введите пароль" required/>
            </div>
          </div>
          <Button type="submit" className={`btn-reset ${styles.btn}`}>Сохранить</Button>
        </form>
      </AccountSection>

      <AccountSection title='Общие настройки'>
        <ul className={`list-reset ${styles['settings__list']}`}>
          <li className={styles['settings__item']}>
            <h3 className={styles['setting__title']}>Тема сайта</h3>
            <div className={styles['setting__content']}>
              <span className={styles['content__text']}>Тёмная тема</span>
              <Button className={styles.toggler}></Button>
              <span className={styles['content__text']}>Светлая тема</span>
            </div>
          </li>
        </ul>
      </AccountSection>

      <AccountSection title='Изменение пароля'>
        <form action="https://jsonplaceholder.typicode.com/posts" method="post" className="form">
          <div className={styles['form__fields']}>
            <div className={`form__control ${styles['form__control']}`}>
              <label className={`control__title ${styles['control__title']}`}>Текущий пароль</label>
              <input className={`form__field ${styles['form__field']}`} type="text" name="current-password" placeholder="Введите пароль" required/>
            </div>
            <div className={`form__control ${styles['form__control']}`}>
              <label className={`control__title ${styles['control__title']}`}>Новый пароль</label>
              <input className={`form__field ${styles['form__field']}`} type="text" name="new-password" placeholder="Введите пароль" required/>
            </div>
            <div className={`form__control ${styles['form__control']}`}>
              <label className={`control__title ${styles['control__title']}`}>Повторите пароль</label>
              <input className={`form__field ${styles['form__field']}`} type="text" name="repeated-password" placeholder="Введите пароль" required/>
            </div>
          </div>
          <Button type="submit" className={`btn-reset ${styles.btn}`}>Сохранить</Button>
        </form>
      </AccountSection>
    </PageTemplate>
  );
}

export default Account;
