import React, { useEffect, useRef } from 'react';

import ImageViewer from './Image/image';
import TextViewer from './Text/text';
import Video from './Video/video';

interface IContentProps {
    onScroll: (isBig: boolean) => void;
}

const Content: React.FC<IContentProps> = (props: IContentProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        if (ref && ref.current) {
            props.onScroll(ref.current.getBoundingClientRect().top === 0);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    });

    return (
        <div ref={ref}>
            <Video videoName='../../assets/SWITD2020Opener_1.mp4' controls={false} loop={true} playing={true} muted={true} />
            <TextViewer text="Text 1"></TextViewer>
            <ImageViewer imageName='../../assets/3img.png'></ImageViewer>
            <TextViewer text="Text 2"></TextViewer>
            <ImageViewer imageName='../../assets/XORG3478.JPG'></ImageViewer>
        </div>
    );
};

export default Content;