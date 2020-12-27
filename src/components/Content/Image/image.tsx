import React from 'react';
import styles from './image.module.scss';

interface IImageProps {
    imageName: string;
}

const ImageViewer: React.FC<IImageProps> = (props: IImageProps) => {
    return (
        <div>
            <img src={props.imageName} alt='Bild' className={styles.imgStyle}></img>
        </div>
    );
};

export default ImageViewer;