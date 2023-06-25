import { FunctionComponent, PropsWithChildren } from "react";
import Header from "../Header/Header";
import classes from './layout.module.scss';
import Footer from "../Footer/Footer";
import { Roboto } from "next/font/google";
import classNames from "classnames";

const roboto = Roboto(
  {
    weight: ['400', '700'],
    subsets: ['cyrillic', 'latin'],
    style: ['normal', 'italic'],
  }
);


const Layout:FunctionComponent<PropsWithChildren>  = ({ children }) =>  {
  return (
    <>
      <div className={classNames("modal-container", roboto.className)} />
      <div className={classNames(classes['container'], roboto.className)}>
        <Header />
        <main className={classes['main']}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout;
