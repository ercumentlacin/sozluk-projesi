import React from 'react';
import LogoIMG from '../../assets/logo.png';
import styles from './styles.module.css';

const Logo = () => {
  return (
    <div className={styles.flex}>
      <img src={`${LogoIMG}`} alt='Türk Dil Kurumu Sözlük' />
    </div>
  );
};

export default Logo;
