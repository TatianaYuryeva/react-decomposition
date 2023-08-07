import News from './components/News'
import Currency from './components/Currency'
import ContentTopWidget from './components/ContentTopWidget'
import Links from './components/Links'
import Search from './components/Search'
import Banner from './components/Banner'
import Weather from './components/Weather'
import Popular from './components/Popular'
import Broadcast from './components/Broadcast'
import TvProgram from './components/TvProgram'

import './App.css'

function App() {

  return (
    <div className="container">
      <section className='content-top'>
        <div className="column">
          <News data={news} />
          <Currency usd={currency.usd} eur={currency.eur} />
        </div>
        <div className='column'>
          <ContentTopWidget data={contentTopWidget}/>
        </div>
      </section>
    <Links data={links} />
    <Search />
    <Banner image="./banner.jpg" link="#" />
    <section className='content-bottom'>
      <div className="column">
        <Weather data={weather}/>
        <Popular header="Посещаемое" data={popular}/>
      </div>
      <div className="column">
        <Popular header="Карта" data={transport}/>
        <TvProgram data={tvProgram}/>
      </div>
      <div className="column">
        <Broadcast data={broadcast}/>
      </div>
    </section>
    <footer>icons by <a target="_blank" href="https://icons8.com">Icons8</a></footer>
    </div>
  )
}

const news = [
{
  icon: './fire.png',
  text: 'Шойгу представил экипаж танка «Алеша» к званию Герой России',
  link: '#'
},
  { 
  icon: './fire.png',
  text: 'Украина объявила российские порты Черного моря зоной военной угрозы',
  link: '#'
},
  { 
  icon: './fire.png',
  text: '«Литрес» проводит внутреннее расследование из-за утечки данных клиентов',
  link: '#'
},
]

const currency = {
  usd: 94.81,
  eur: 103.84
}

const contentTopWidget = {
  image: './grammar.jpg',
  title: 'Работа над ошибками',
  text: 'Смотрите и запоминайте',
  link: '#'
}

const links = [
  {
    title: 'Видео',
    link: '#'
  },
  {
    title: 'Картинки',
    link: '#'
  },
  {
    title: 'Новости',
    link: '#'
  },
  {
    title: 'Карты',
    link: '#'
  },
  {
    title: 'Маркет',
    link: '#'
  },
  {
    title: 'Переводчик',
    link: '#'
  },
  {
    title: 'Эфир',
    link: '#'
  },
]

const weather = 
  {
    link: '#',
    image: './cloud-rain.png',
    temperature: {
      now: '+17',
      morning: '+17',
      afternoon: '+20'
    }
  }


const popular = [
  {
    title: 'Недвижимость',
    text: 'о сталинках',
    link: '#'
  },
  {
    title: 'Маркет',
    text: 'люстры и светильники',
    link: '#'
  },
  {
    title: 'Авто.ру',
    text: 'привод 4х4 до 500 000',
    link: '#'
  },
]

const broadcast = [
  {
    title: 'Управление как искусство',
    channel: 'Успех',
    link: "#"
  },
  {
    title: 'Ночь. Мир в это время',
    channel: 'earthTV',
    link: "#"
  },
  {
    title: 'Вести',
    channel: 'Россия 1',
    link: "#"
  },
]

const transport = [
  {
  title:'Расписания',
  link: '#'
}
]

const tvProgram = [
  {
    time: "02:00",
    title: 'ТНТ.Best',
    channel: 'ТНТ Internetional',
    link: "#"
  },
  {
    time: "02:15",
    title: 'Джинглики',
    channel: 'Карусель INT',
    link: "#"
  },
  {
    time: "02:25",
    title: 'Наедине со всеми',
    channel: 'Первый',
    link: "#"
  },
]

export default App
