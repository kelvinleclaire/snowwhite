import React, { useEffect, useRef } from 'react';

import ImageViewer from './Image/image';
import TextViewer from './Text/text';
import Video from './Video/video';
import backgroundVideo from './../../assets/SWITD2020Opener_1.mp4';
import styles from './content.module.scss';

interface IContentProps {
    onScroll: (isBig: boolean) => void;
}

const Content: React.FC<IContentProps> = (props: IContentProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        if (ref && ref.current) {
            props.onScroll(ref.current.getBoundingClientRect().top >= -100);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    });

    const text1 = '„I want you, not to be a slave. \nFollow me, I found the way. \nIt´s hard to believe, but I can say. \nThis is not a fairytale.“';
    const text2 = '„I want you, to get out of your grave. \nI know a place, without any pain. \nSo marvelous, you will never escape. \nAnd this is not a fairytale.“'

    return (
        <div ref={ref}>


            <Video videoName={backgroundVideo} controls={false} loop={true} playing={true} muted={true} />
            <div className={styles.contentTable}>
                <div className={styles.contentRow}>
                    <div className={styles.contentCell + ' ' + styles.textView}>
                        <TextViewer text={text1}></TextViewer>
                        <ImageViewer imageName='../../assets/3img.png'></ImageViewer>

                    </div>
                    <div className={styles.contentCell + ' ' + styles.textView}>
                        <ImageViewer imageName='../../assets/XORG3478.JPG'></ImageViewer>

                        <TextViewer text={text2}></TextViewer>

                    </div>
                </div>
                {/* <div className={styles.contentRow}>
                    <div className={styles.contentCell + ' ' + styles.textView}>
                    </div>
                    <div className={styles.contentCell + ' ' + styles.img2View}>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Content;