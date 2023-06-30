import Image from "next/image";
//import { useWindowWidth } from "@react-hook/window-size";
import Navigation from "../Navigation/Navigation";
//import HamburgerMenu from "../hamburgerMenu/hamburgerMenu";
import styles from "./Header.module.scss";

function Header() {
  //const width = useWindowWidth();
  // const isMobile = width <= 703;
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <Navigation />
        </div>        
        <div className={styles.lead}>
          <h1 className={styles.lead__title}>
            ФБУ Иркутская ЛСЭ Минюста России
          </h1>
          <p className={styles.lead__paragraph}>
            Государственное судебно-экспертное учреждение,
            входящее в Систему судебно-экспертных учреждений
            Министерства юстиции Российской Федерации.
          </p>
        </div>
        <div className={styles.logo}>
          <Image
            src="/images/lse-logo.svg"
            alt="Логотип лабораторий Минюста. Двуглавый орел под увеличительным стеклом."
            fill
          />
        </div>


      </div>
    </header>
  );
}

export default Header;
