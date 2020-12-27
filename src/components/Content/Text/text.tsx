import React from 'react';
import styles from './text.module.scss';

interface ITextProps {
    text: string;
}

const TextViewer: React.FC<ITextProps> = (props: ITextProps) => {
    return (
        <div>
            <blockquote className={styles.blockquoteView}>
                <p>
                    <span>
                        {props.text.split('\n').map((item, key) => {
                            return <span key={key}>{item}<br /></span>
                        })}

                    </span>
                </p>
            </blockquote>
        </div>
    );
};

export default TextViewer;