import React, { useEffect, useRef, useState } from 'react';
import { isBigIntLiteral } from 'typescript';
import styles from './header.module.scss';

interface IHeaderProps {
    children?: React.ReactNode;
    isBig: boolean;

}

const StickyHeader: React.FC<IHeaderProps> = (props: IHeaderProps) => {

    let className = props.isBig ? styles.headerBig : styles.headerSmall;
    return (
        <header className={className}>
            {props.children}
        </header>

    );
};

export default StickyHeader;