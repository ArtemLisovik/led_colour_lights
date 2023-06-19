// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ExtraPropositionItem } from '../ExtraPropositionItem/ExtraPropositionItem';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './ExtraProposition.scss'


export const ExtraProposition = () => {

    return (
        <section className="advantages">
            <div className="container">
                <div className="advantages__wrapper">

                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        speed={600}
                        loop={true}
                        navigation={false}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}>

                        <SwiperSlide>
                            <ExtraPropositionItem
                                title='Якість'
                                message='Вернем деньги или обменяем товар, если он сломаеться в течении недели' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ExtraPropositionItem
                                title='Безкоштовна доставка'
                                message='При замовленні від 2000грн - доставка на
                                відділення НП безкоштовна!' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ExtraPropositionItem
                                title='Знижки'
                                message='Знижка 10% до дня народження' />
                        </SwiperSlide>


                    </Swiper>

                </div>
            </div>
        </section>

    );
};