
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

import "../../Slider/slider.css"
import CardAskedQuestions from "../../Cards/CardAskedQuestions/CardAskedQuestions";

import data from "../../../../data/questions.json"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

interface Idata {
    nameBTN?: string
}

export default function LoopingQusetion( {nameBTN}:Idata ) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={
                    {
                        nextEl: ".arrow-right-question",
                        prevEl: ".arrow-left-question",
                    }
                }
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    428: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    568: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper slide"
            >
                {
                    data.map( (item) =>{
                        return(
                            <SwiperSlide>
                                <CardAskedQuestions
                                key={item.id}
                                question={item.question}
                                answer={item.answer}
                                />
                            </SwiperSlide>
                        )
                    } )
                }
            </Swiper>

            <div className="footer-feature">
                <div className="button">
                    <button className="btn-feature"> {nameBTN} </button>
                </div>

                <div className="num-of">
                    <p>
                        num <span> of {data.length} </span>
                    </p>
                </div>

                <div className="arrow">
                    <div className="arrow-left-question arrow-left">
                        <FaArrowLeft className="icon-arrow mx-auto cursor-pointer"  />
                    </div>

                    <div className="num-of">
                        <p>
                            num <span>of {data.length} </span>
                        </p>
                    </div>

                    <div className="arrow-right-question arrow-right">
                        <FaArrowRight  className="icon-arrow mx-auto cursor-pointer" />
                    </div>
                </div>
            </div>
        </>
    )
}
