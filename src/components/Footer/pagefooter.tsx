import React from 'react';
import styles from './pageFooter.module.scss';
interface IPagefooterProps {

}

const Pagefooter: React.FC<IPagefooterProps> = (props: IPagefooterProps) => {
    return (
        <footer className={styles.footer}></footer>
    );
};

export default Pagefooter;