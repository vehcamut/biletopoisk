import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import ArrowOutlined from '@/components/Icons/ArrowOutlined/ArrowOutlined'
import BasketOutlined from '@/components/Icons/BasketOutlined/BasketOutlined'
import CloseOutlined from '@/components/Icons/CloseOutlined/CloseOutlined'
import MinusOutlined from '@/components/Icons/MinusOutlined/MinusOutlined'
import PlusOutlined from '@/components/Icons/PlusOutlined/PlusOutlined'
import Input from '@/components/Input/Input'
import Dropdown from '@/components/Dropdown/Dropdown'
import Collapse from '@/components/Collapse/Collapse'
import TicketCard from '@/components/TicketCard/TicketCard'

export default function Home() {

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
  return (
    <>
      <div className="modal-container"></div>
      <TicketCard
        genre={movie1.genre}
        imageSrc={movie1.posterUrl}
        title={movie1.title}
      />
      <Input placeholder='Введите название' name='input1' label='Название' />
      <Input placeholder='Введите название' name='input2' label='Название' />
      <Input placeholder='Введите название' name='input3' label='Название' />
      <Collapse header='Что такое Билетопоиск?'>
        <p>
          Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.
        </p>
      </Collapse>
      <div style={{paddingLeft: '20px', position:'relative'}}>
        <Dropdown
          label='LABEL'
          placeholder='Placeholder'
          name='dropdown1'
          options={
            [
              {label: 'firstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirst', value: 'first'}, 
              {label: 'second', value: 'second'}
            ]
          }
        />
      </div>
      <Collapse header='Что такое Билетопоиск?'>
        <p>
          Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.
        </p>
      </Collapse>
      <Collapse header='Что такое Билетопоиск?'>
        <p>
          Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.
        </p>
      </Collapse>

      {/* //<Input /> */}
      <Button>Нет</Button>
      <Button type='text'>Да</Button>
      <Button type='text' icon={<ArrowOutlined className={styles.test}/>} disabled/>
      <div className={styles.b} style={{color: 'red', backgroundColor: 'blue', height: '1900px'}}>
        <ArrowOutlined className={styles.test}/>

        dfdfffffffffff
      </div>
      
    </>

    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>src/app/page.tsx</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore the Next.js 13 playground.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}
