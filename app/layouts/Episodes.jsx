"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EpisodeCard from '@components/EpisodeCard'
import { Button } from 'react-bootstrap'
import { episodes } from "../api/episodesData"
import Slider from 'react-slick/lib/slider'

const Episodes = ({ items }) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2, // Cambia este valor según la cantidad de elementos que deseas mostrar en cada fila
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 768, // Ajusta este valor según el punto de quiebre deseado
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h2>Episodios</h2>
                <div className=' d-flex justify-content-between btns'>
                    <Button> - </Button>
                    <Button>  + </Button>
                </div>
            </div>
            <Slider {...settings} >
                {
                    episodes.map((episode, index) => {
                        return (
                            <EpisodeCard key={index} data={
                                {
                                    e: episode.e,
                                    title: episode.title
                                }
                            } />

                        )
                    })

                }

            </Slider>


            <style jsx>{`
                .btns{
                    width:5rem;
                }
            `}</style>
        </div>
    )
}

export default Episodes
