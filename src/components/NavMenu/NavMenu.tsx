import * as React from 'react';
import { slide as Menu } from 'react-burger-menu'
import StickyHeader from '../Header/header';
import styles from './navmenu.module.scss';
import './menuStyles.css';



interface INavMenuProps {
  isBig: boolean;
}

const NavMenu: React.FC<INavMenuProps> = (props: INavMenuProps) => {
  let className = props.isBig ? styles.logo : `${styles.logo} ${styles.shrink}`;
  return (
    <div>
      <StickyHeader isBig={props.isBig}>
        <div className={styles.logoContainer}>
          <img src='../../assets/final-logo.png' alt='Logo' className={className}></img>
        </div>
        <div className={styles.menuContainer}>
          <Menu right >
            <a id="home" href="/">Home</a>
            <a id="about" href="/about">About</a>
            <a id="contact" href="/contact">Contact</a>
            <a id="settings" href="/settings">Settings</a>
          </Menu>
        </div>
      </StickyHeader>
    </div>
  );
};

export default NavMenu;

