import style from "@styles/newscard.module.css"

const NewsCard = ({ data }) => {
    return (
        <div className={`${style.card} col-sm-12 col-lg-6`}>
            <p>{data.title} </p>
            <p>{data.autor} </p>
        </div>
    )
}

export default NewsCard
