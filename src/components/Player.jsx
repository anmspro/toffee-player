// import { useEffect, useRef } from "react";
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

function Player({ source }) {
    return <ShakaPlayer className="h-[500px]" fullscreen="true" autoplay="true" src={source} />;
}

export default Player;
