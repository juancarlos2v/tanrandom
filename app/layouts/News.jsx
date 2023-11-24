"use client"
import NewsCard from '@components/NewsCard'
import { news } from "../api/newsData"

const News = () => {
    return (
        <div>
            <h2>Novedades</h2>
            {
                news.map((n, index) => (
                    <NewsCard key={index} data={{
                        title: n.title,
                        autor: n.autor
                    }
                    } />
                ))
            }

        </div>
    )
}

export default News
