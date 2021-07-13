import React, { useEffect, useContext } from 'react';
import GlobalContext from '../../context/GlobalContext ';
import { Link, useHistory } from 'react-router-dom';
import { StyledNavigationBottom } from './styles';
import { SearchOutlined } from '@ant-design/icons';

import styles from './styles.module.css';

const NavigationBottom = () => {
  let history = useHistory();
  const { word, setWord, newWord, setNewWord, setResults } =
    useContext(GlobalContext);

  useEffect(() => {
    fetch(`https://www.sozluk.gov.tr/gts?ara=${word}`)
      .then((res) => res.json())
      .then(
        (res) => setResults(res),
        (err) => console.log(err)
      );
  }, [word]);

  const handleChange = (e) => {
    setNewWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWord(newWord);
    history.push(`/kelime/${newWord}`);
  };

  return (
    <div className={styles.navigationBottom}>
      <div className={styles.logo}>
        <h1>
          <Link to='/'>
            <span>Türkçe</span>
            <span>Sözlük</span>
          </Link>
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.search__input}>
          <input
            onChange={handleChange}
            type='search'
            name='search'
            placeholder='Kelime ara'
            value={newWord}
          />
          <SearchOutlined className={styles.anticon} />
        </div>
        <button onSubmit={handleSubmit} type='submit'>
          Ara
        </button>
      </form>
    </div>
  );
};

export default NavigationBottom;
