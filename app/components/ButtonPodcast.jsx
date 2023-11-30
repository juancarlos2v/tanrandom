"use client"
import style from '@styles/buttonpodcast.module.css'
import { Button } from 'react-bootstrap'

const ButtonPodcast = () => {
    return (
        <div>
            <Button variant={null} className={style.button}>
                Podcast
            </Button>
        </div>
    )
}

export default ButtonPodcast
