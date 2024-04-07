// import { useEffect, useRef } from "react";
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

function Player({ source }) {
    const elephantsDream = "https://ftp.itec.aau.at/datasets/DASHDataset2014/ElephantsDream/15sec/ElephantsDream_15s_onDemand_2014_05_09.mpd"
    const bigBunny = "https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8"
    return <ShakaPlayer className="h-[500px]" fullscreen="true" autoplay="true" src={bigBunny} />;
}

export default Player;
