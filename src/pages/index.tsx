import Header from "@/components/Header/Header";
import Input from "@/components/Input/Input";
import Layout from "@/components/Layout/Layout";
import { FunctionComponent, PropsWithChildren } from "react";
import classes from './index.module.scss';
import Dropdown from "@/components/Dropdown/Dropdown";
import TicketCard from "@/components/TicketCard/TicketCard";
import { redirect } from "next/navigation";

const movie1 = {
  title: "Властелин колец: Братство Кольца",
  posterUrl: "https://i.postimg.cc/pdCLNMqX/1.webp",
  releaseYear: 2001,
  description: "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу.Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
  genre: "fantasy",
  id: "2aT976Fs_Bek0e2ZR_05V",
  rating: 8,
  director: "Питер Джексон",
  reviewIds: [
      "M0bg9QY5gVtupNaglrmua",
      "w32kK5oV6UIr1ZHdkkMAn"
  ]
};

// export default async function Home({ params }) {
//   redirect('/movies');
// // ...
// }

const Page = async () =>  {
  //redirect('/movies');

  return (
    <div style={{
      gap: '23px',
      display: 'flex',
      flexDirection: 'row',
    }}>
      <div
        className={classes['side-bar']}
      >
        <div>
          Фильтр поиска
        </div>
        <Input name='input1' label="Название"/>
        <Dropdown 
          label="Жанр"
          name='dropdown1' 
          options={[{
            label: '1', value: '1'
          }]}/>
        <Dropdown 
          label="Кинотеатр"
          name='dropdown2' 
          options={[{
            label: '1', value: '1'
          }]}/>
      </div>
      <div
        className={classes['side-bar-plug']}
      >
      </div>
      <div style={{
        flexGrow: 1,
        //paddingLeft: '463px',
      }}
        className={classes['list']}
      >
       <TicketCard
        id={movie1.id}
        genre={movie1.genre}
        imageSrc={movie1.posterUrl}
        title={movie1.title}
      />
            

    </div>
    </div>
  )
}

export default Page;
