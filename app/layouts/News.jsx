"use client"
import NewsCard from '@components/NewsCard'
import { news } from "../api/newsData"

const News = () => {
    return (
        <div>
            <h2>Novedades</h2>
            <div className="d-flex flex-column">
                {
                    news.map((n, index) => (
                        <NewsCard key={index} data={{
                            title: n.title,
                            autor: n.autor,
                            cover: n.cover,
                            date: n.date,
                            tags: n.tags
                        }
                        } />
                    ))
                }
            </div>

        </div>
    )
}

export default News
