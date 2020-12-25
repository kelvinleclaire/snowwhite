import * as React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import styles from './Layout.module.scss';

interface ILayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
    return (
        <div>
            <div>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
