"use client"
import style from "@styles/episodecard.module.css"
const EpisodeCard = ({ data }) => {
    return (
        <div className={`${style.card} d-flex justify-content-between align-items-center`} >
            <div className={style.cover} >

            </div>
            <div>
                <p>{data.e} </p>
                <p>{data.title} </p>
            </div>
        </div>
    )
}

export default EpisodeCard
