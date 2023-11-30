import style from "@styles/newscard.module.css"
const NewsCard = ({ data }) => {
    const date = data.date
    const tags = data.tags
    console.log(tags)

    return (
        <>
            <div style={{ backgroundImage: `url(${data.cover})` }} className={`${style.card} col-sm-12 col-lg-6`}>
                <div className="d-flex">
                    {tags.map((t, index) =>
                        <div className={style.tag}>
                            <p key={index}>{t}</p>
                        </div>
                    )}
                </div>
                <p>{date}</p>
            </div>
        </>

    )
}

export default NewsCard
