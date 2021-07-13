import { Row, Col } from 'antd';

import styles from './styles.module.css';

const Home = () => {
  return (
    <section className={styles.section}>
      <Row>
        <Col xs={{ span: 22, offset: 1 }} md={{ span: 16, offset: 4 }}>
          <ul>
            <h2>Türkçe hakkında az bilinenler</h2>
            <li>
              Dünyada en çok konuşulan dillerden bir tanesi Türkçe. 2016 yılında
              yapılan son araştırmaya göre Türkçe, 12 ülkede 250 milyon kişi
              tarafından konuşuluyor. Dünyanın en zor dilleri ise Japonca,
              Çince, Rusça, Korece, Fransızca ve yine Türkçe’dir.{' '}
            </li>
            <li>
              Türk Dil Kurumu’na göre yalın haldeki en uzun kelime 20 harften
              oluşan “Kuyruksallayangiller”;
            </li>
            <li>“Ememememe” ise 2 harften oluşan en uzun kelimedir.</li>
            <li>
              “Angström” kelimesi art arda en çok sessiz harf içeren kelimedir.{' '}
            </li>
            <li>
              58 anlamı bulunan “Çıkmak”, en çok anlamı olan kelimeler arasında
              birinci sırada.
            </li>
            <li>
              “ıralamamalara”, “aralamamaları” ise tersten okunduğunda da
              anlamlı olan en uzun kelimelerdir.{' '}
            </li>
          </ul>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
