import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

/*
It counts a ‘significant media playback’ as a time when a user watches an
audio and video stream for more than 7 seconds in their active tab at a
resolution of more than 200×140 pixels. If the score is high enough, it enables autoplay.
chrome://media-engagement
*/

interface IVideoProps {
    videoName: string;
    playing: boolean;
    controls: boolean;
    loop: boolean;
    muted: boolean;
}

const Video: React.FC<IVideoProps> = (props: IVideoProps) => {
    const [playerState, setplayerState] = useState<boolean>(false);
    useEffect(() => {
        setplayerState(true);
    }, []);

    return (
        <div>
            <ReactPlayer
                url={props.videoName}
                playing={props.playing}
                controls={props.controls}
                loop={props.loop}
                muted={props.muted}
                onReady={() => setplayerState(true)}
                width='100%'
                height='100%'

            />
        </div>
    );
};

export default Video;