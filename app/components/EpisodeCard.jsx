"use client"
import style from "@styles/episodecard.module.css"
const EpisodeCard = ({ data }) => {
    return (
        <div className={style.card} >
            <p>{data.e} </p>
            <p>{data.title} </p>
        </div>
    )
}

export default EpisodeCard
