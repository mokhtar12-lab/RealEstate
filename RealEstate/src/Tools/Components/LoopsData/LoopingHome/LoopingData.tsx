import CardProperties from "../../../Components/Cards/CardProperties/CardProperties"
import data from "../../../../data/data.json"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import "./style.css"
import { Link } from "react-router";

interface IData {
    nameBTN: string,
    hiddenBTN?: string,
    urlPage?: string,
}


export default function LoopingData( {nameBTN, hiddenBTN, urlPage}:IData ) {



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
                        nextEl: ".arrow-right-property",
                        prevEl: ".arrow-left-property",
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
                                <CardProperties 
                                    key={item.id}
                                    image={item.image}
                                    title={item.title} 
                                    description={item.description}
                                    typeBed={item.typeBedrooms}
                                    typeBathroom={item.typeBathroom}
                                    typeProperty={item.typeProperty}
                                    price={item.price}
                                />
                            </SwiperSlide>
                        )
                    } )
                }
            </Swiper>
            <div className="footer-feature-data">
                <div className={`button ${hiddenBTN}`}>
                    <Link to={urlPage} className={`btn-feature`}> {nameBTN} </Link>
                </div>

                <div className="num-of">
                    <p>
                        num <span> of {data.length} </span>
                    </p>
                </div>

                <div className="arrow">
                    <div className="arrow-left arrow-left-property">
                        <FaArrowLeft className="icon-arrow mx-auto cursor-pointer"  />
                    </div>

                    <div className="num-of">
                        <p>
                            num <span>of {data.length}</span>
                        </p>
                    </div>

                    <div className="arrow-right arrow-right-property">
                        <FaArrowRight  className="icon-arrow mx-auto cursor-pointer" />
                    </div>
                </div>
            </div>
        </>
    )
}
