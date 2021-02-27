# Türkçe Sözlük Projesi

Bu proje halihazırda bulunan sözlüğümüzün eksik kalan taraflarını tamamlama ve daha iyi hale getirebilme amacıyla yapılmıştır.

## Neden Sözlük Projesi ?

Sözlük projesini seçmemizin sebebini gelin maddeler ile sıralayalım;

- Yapılan aramalar sonucu çıkan sonucu paylaşma güçlüğü
- Yeterince hızlı değil, eski teknoloji..
- Tasarım

### Yapılan Aramalar Ssonrasında Sonucu Paylaşamama

Aşağıdaki görsel iki siteninde arama sonucu gösteriliyor. URL kısmına dikkatle bakacak olursanız eğer birisinde neyin arandığı net bir şekilde gözükürken diğerinde ise böyle bir özellik yer almıyor. Bu da yapılan sorguları paylaşma konusunda problem yaratıyordu bize, bunu düzelttik.

![parametre](./src/images/01.jpg)

### Yeterince Hızlı Değil, Eski Teknoloji

Halihazırda bulunan sözlükte jQuery kullanışmış durumda. ReactJS geliştirilmeden evvel, geliştiriciler kullanıcı arayüzleri geliştirirken -vanilla JavaScript- veya -jQuery- gibi diğer JavaScript kütüphanelerini kullanıyordu. Bu kütüphaneler ise daha az kullanıcı arayüzü odaklıydı. Dolayısıyla birçok hata ve bug ile karşılaşılıyor, bu da sürecin zorlaşmasına ve vakit kaybına sebep oluyordu.

JQuery veya Javascript geliştirirken gerçek DOM üzerinden işlem yapılmaktadır. Real Dom’da değişiklik olmayan yerlerde tekrardan taranır ve render edilir. Ancak React Virtual Dom mimarisini kullanarak sadece değişikliğin olduğu yeri tekrar render eder.

### Tasarım

Tasarım konusuna değinecek olursak iyidir yada kötüdür bunlar kişiden kişiye değişiklik gösteren şeyler ama herkesin hem fikir olduğu konular da vardır. Bu anlamda iyileştirme çabalarımız oldu, daha nefes alabilir bir tasarım çıkarmaya çalıştık.

![tasarım](./src/images/02.jpg)

## Kullanılan Teknolojiler

![react](./src/images/react.png) ![javascript](./src/images/javascript.png) ![ant](./src/images/ant.svg)
![styled-components](./src/images/styled-components.png) ![react-router](./src/images/react-router.png)

## Yapmış Olduğumuz Yenilikler

### Favori Kelimeler

![favori-kelimeler](./src/images/favori-kelimeler.jpg)

### Geçmiş Aranalar

![gecmis-aramalar](./src/images/gecmis-aramalar.jpg)

## Görünüm

![desktop](./src/images/desktop.jpg)

![tablet](./src/images/tablet.jpg)

![mobile](./src/images/mobile.jpg)

## Hazırlayanlar

### Ercüment Laçın

- ercument.lacin@gmail.com
- https://www.linkedin.com/in/ercument-lacin
- http://github.com/ercumentlacin

### İsmail Hanadi

- ismailhanadi96@gmail.com
- https://www.linkedin.com/in/ihanadi
- https://github.com/ihanadi
