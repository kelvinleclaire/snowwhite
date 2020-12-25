import * as React from 'react';
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import { Collapse, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { isPropertySignature } from 'typescript';
import StickyHeader from '../Header/header';

import styles from './navmenu.module.scss';

var menustyles = {
  bmBurgerButton: {
    position: 'relative',
    width: '27px',
    height: '23px',
    left: '-30px',
    top: '20px',
    float: 'right'
  },
  bmBurgerBars: {
    background: '#fe0000'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#fe0000'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '250px'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'block',
    color: '#b8b7ad'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },
}

interface INavMenuState {
  isOpen: boolean;
}

interface INavMenuProps {
  isBig: boolean;
}

const NavMenu: React.FC<INavMenuProps> = (props: INavMenuProps) => {

  return (
    <div>
      <StickyHeader isBig={props.isBig}>
        <div className={styles.logoContainer}>
          <img src='../../assets/final-logo.png' alt='Logo' className={styles.logo}></img>
        </div>
        <div className={styles.menuContainer}>
          <Menu right styles={menustyles}>
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

