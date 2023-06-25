import Header from "@/components/Header/Header";
import Input from "@/components/Input/Input";
import Layout from "@/components/Layout/Layout";
import { FunctionComponent, PropsWithChildren } from "react";
import classes from './index.module.scss';
import Dropdown from "@/components/Dropdown/Dropdown";
import TicketCard from "@/components/TicketCard/TicketCard";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import BigTicketCard from "@/components/BigTicketCard/BigTicketCard";
import Review from "@/components/Review/Review";
import { moviesAPI } from "@/app/services/movies.service";

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

const review1 =   {
  id: "OX0AuLOo8FQgK7thnTu5N",
  name: "Смех да и только",
  text: "По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это было около четырех лет назад, но тот момент я вспоминаю и по сей день. До него я не был фанатом Джона Толкина, как впрочем, и всего фентези в целом, однако стоило мне посмотреть первые десять минут фильма и оставшиеся пролетели на одном дыхании. Я словно погрузился в необычайный мир, где добро борется со злом, где зеленые рощи перемежаются с поросшими мхом статуями и древними развалинами, в мир, где пробираясь лесною тропой можно встретить остроухих неувядающих эльфов или мерзких орков – кому как повезет...",
  rating: 5,
};

const Page = () =>  {
  const id = useRouter().query.id as string;
  const {
    data: movie,
    isLoading,
    isError,
  } = moviesAPI.useGetOneMovieQuery({movieId: id});

  return (
    <div style={{
      gap: '24px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        flexGrow: 1,
        //paddingLeft: '463px',
      }}
        className={classes['list']}
      >
      <BigTicketCard movie={movie}/>

    </div>
    <Review review={review1}/>
    <Review review={review1}/>
    <Review review={review1}/>
    </div>
  )
}

export default Page;
