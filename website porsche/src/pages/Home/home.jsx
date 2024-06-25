import React, { useState, useRef } from 'react';
import homeStyles from './home.module.css';
import homeVideo from '../../utils/videos/videoPorsche.mp4';
import SideBar from '../../components/Side-bar/side-bar';
import Play from '../../utils/img/play.png';
import Pause from '../../utils/img/pause.png';

function Home() {
    const [isVideoPaused, setIsVideoPaused] = useState(false);
    const videoRef = useRef(null);

    const toggleVideoPlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsVideoPaused(false);
        } else {
            videoRef.current.pause();
            setIsVideoPaused(true);
        }
    };

    return (
        <div className={homeStyles['App']}>
            <div className={homeStyles['container-video']}>
                <video ref={videoRef} className={homeStyles['video']} autoPlay loop muted>
                    <source src={homeVideo} type="video/mp4" />
                </video>
                <div className={homeStyles['overlay']}></div>
                <div className={homeStyles['content']}>
                    <div className={homeStyles['container-title']}>
                        <span className={homeStyles['title']}>PORSCHE</span>
                        <span className={homeStyles['caption']}>Permaneça com sua essência.</span>
                        <button className={homeStyles['button']}>Saiba mais</button>
                    </div>
                </div>
                <button onClick={toggleVideoPlay} className={homeStyles['video-control']}>
                    {isVideoPaused ? <img className={homeStyles['play']} src={Play} alt="" /> : <img className={homeStyles['pause']} src={Pause} />}
                </button>
                <SideBar />
            </div>

            <div className={homeStyles['container-novidades']}>
                <span className={homeStyles['title-novidades']}>Novidades</span>
                <div className={homeStyles['container-cards']}>
                    <div className={homeStyles['card']}>
                        <div className={homeStyles['card-image']}></div>
                        <span className={homeStyles['card-title']}>Modelo 1</span>
                        <span className={homeStyles['card-caption']}>Descrição do modelo 1</span>
                    </div>
                    <div className={homeStyles['card']}>
                        <div className={homeStyles['card-image']}></div>
                        <span className={homeStyles['card-title']}>Modelo 2</span>
                        <span className={homeStyles['card-caption']}>Descrição do modelo 2</span>
                    </div>
                    <div className={homeStyles['card']}>
                        <div className={homeStyles['card-image']}></div>
                        <span className={homeStyles['card-title']}>Modelo 3</span>
                        <span className={homeStyles['card-caption']}>Descrição do modelo 3</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;