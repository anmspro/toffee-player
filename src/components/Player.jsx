// import { useEffect, useRef } from "react";
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

function Player({ source }) {
    // const videoRef = useRef(null);

    // useEffect(() => {
    //     async function loadAsset() {
    //         const videoElement = videoRef.current.video;
    //         if (!videoElement) return;

    //         videoElement.src = source;

    //         try {
    //             await videoElement.play();
    //         } catch (error) {
    //             console.error("Failed to play video:", error);
    //         }
    //     }

    //     loadAsset();
    // }, [source]);

    return <ShakaPlayer autoplay src={source} />;
}

export default Player;
