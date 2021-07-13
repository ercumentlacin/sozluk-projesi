import kodluyoruzIcon from '../../assets//kodluyoruz-icon.png';
import { Link } from 'react-router-dom';

import NavigationBottom from '../NavigationBottom';
import styles from './styles.module.css';

const Navigation = () => {
  const menuLinks = [
    { id: 1, to: '/', title: 'Anasayfa' },
    { id: 2, to: '/hakkimizda', title: 'Hakkimizda' },
    { id: 3, to: '/profil', title: 'Profil' },
  ];
  return (
    <header className={`${styles.header} navigation`}>
      {/* Navigation Top Area */}
      <div className={`${styles.navigation__top} navigation__top`}>
        <div className={styles.copy}>
          <span className={styles.copy__icon}>
            <img src={kodluyoruzIcon} alt='' />
          </span>
          <span className={styles.copy__link}>
            <a href='https://www.kodluyoruz.org/'>Kodluyoruz</a>
          </span>
        </div>
        <ul className={styles.links}>
          {menuLinks.map(({ id, to, title }) => (
            <li key={id}>
              <Link to={to}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Navigation Bottom Area */}
      <NavigationBottom />
    </header>
  );
};

export default Navigation;
