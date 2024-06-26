import React, { useState, useRef } from 'react';
import homeStyles from './home.module.css';
import homeVideo from '../../utils/videos/videoPorsche.mp4';
import SideBar from '../../components/Side-bar/side-bar';
import Play from '../../utils/img/play.png';
import Pause from '../../utils/img/pause.png';
import P911 from '../../utils/img/911.png';
import P718 from '../../utils/img/718.png';
import PGT3 from '../../utils/img/GT3-RS.png';

function Home() {
    const [isVideoPaused, setIsVideoPaused] = useState(false);
    const videoRef = useRef(null);

    // Estados e funções do Carrossel
    const [currentIndex, setCurrentIndex] = useState(0);
    const models = [
        { title: 'Porsche 911 Turbo s', description: 'Our engineers like to talk about the most perfect sports car ever. Incredible performance, whilst being comfortable and fully suitable for everyday use.', image: P911 },
        { title: 'Porsche 718 Boxster', description: 'The 718 models were made for the sport of it. They are mid-engined roadsters that unite the sporting spirit of the legendary Porsche 718 with the sports car of tomorrow.', image: P718 },
        { title: 'Porsche 911 GT3 RS', description: 'Athletes know: top performance requires more than perfect conditions and luck. Relentless training to become stronger and faster.', image: PGT3 },
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? models.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === models.length - 1 ? 0 : prevIndex + 1
        );
    };

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
                    {isVideoPaused ? <img className={homeStyles['play']} src={Play} alt="Play" /> : <img className={homeStyles['pause']} src={Pause} alt="Pause" />}
                </button>
                <SideBar />
            </div>

            <div className={homeStyles['container-novidades']}>
                <span className={homeStyles['title-novidades']}>Modelos</span>
                <div className={homeStyles['carousel-wrapper']}>
                    <div className={homeStyles['container-cards']} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {models.map((model, index) => (
                            <div className={homeStyles['card']} key={index}>
                                <div className={homeStyles['card-image']}>
                                    <img src={model.image} alt={model.title} className={homeStyles['image']} />
                                </div>
                                <span className={homeStyles['card-title']}>{model.title}</span>
                                <span className={homeStyles['card-caption']}>{model.description}</span>
                            </div>
                        ))}
                    </div>
                    <div className={homeStyles['carousel-size']}>
                        <div className={homeStyles['carousel-controls']}>
                            <button className={homeStyles['carousel-control']} onClick={prevSlide}>‹</button>
                            <button className={homeStyles['carousel-control']} onClick={nextSlide}>›</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
