import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

function Player() {
    const bigBunny = "https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8"
    const angelOne = "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd"
    return <ShakaPlayer className="h-[95vh]" fullscreen="true" autoplay="true" src={bigBunny} />;
}

export default Player;
