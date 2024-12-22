import CardOurValuesClients from "../../Cards/CardOurValuesClients/CardOurValuesClients";
import data from "../../../../data/ourValuesClients.json"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";




import "./style.css"

export default function LoopingOurValuesClients() {
    return (
    <>
        <Swiper
            slidesPerView={2}
            spaceBetween={50}
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
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 2,
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
                        <CardOurValuesClients 
                            date={item.date}
                            typeRealEstate={item.typeRealEstate}
                            category={item.category}
                            commentOfClient={item.commentOfClient}
                        />
                        </SwiperSlide>
                    )
                } )
            }
        </Swiper>

        <div className="footer-Our-Values-Clients">

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
