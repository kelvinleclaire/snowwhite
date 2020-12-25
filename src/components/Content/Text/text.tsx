import React from 'react';

interface ITextProps {
    text: string;
}

const TextViewer: React.FC<ITextProps> = (props: ITextProps) => {
    return (
        <div>
            <p>
                {props.text}
            </p>
        </div>
    );
};

export default TextViewer;