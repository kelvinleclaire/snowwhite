import React from 'react';

interface IImageProps {
    imageName: string;
}

const ImageViewer: React.FC<IImageProps> = (props: IImageProps) => {
    return (
        <img src={props.imageName} alt='Bild'></img>
    );
};

export default ImageViewer;