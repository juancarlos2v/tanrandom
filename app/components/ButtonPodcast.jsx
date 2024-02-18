"use client"
import style from '@styles/buttonpodcast.module.css'
import { Button } from 'react-bootstrap'
import Logo from "@components/Logo";
import Spotify from '@icons/Spotify';

const ButtonPodcast = () => {
    return (
        <div>


            <Button variant={null} className={style.button}>
                <Spotify className="m-0" />
                Podcast
            </Button>
        </div>
    )
}

export default ButtonPodcast
