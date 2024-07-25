import HomeBanner from "../../Components/HomeBanner";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import ProductItem from "../../Components/ProductItem";
import { IoMailOutline } from "react-icons/io5";


const Home =()=>{
    
    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };


    return (
        <>
            <HomeBanner/>


            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/banner-box.jpg" className="cursor w-100"/> 
                            </div>

                            <div className="banner mt-3">
                                <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg" className="cursor w-100"/> 
                            </div>
                        </div>


                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLEERS</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All <IoIosArrowRoundForward/></Button>
                            </div>



                            <div className="product_row w-100 mt-4">
                            <Swiper
                              slidesPerView={4}
                              spaceBetween={0}
                              pagination={{
                                clickable: true,
                              }}
                            modules={[Navigation]}
                            className="mySwiper"
                           >
                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>


                                </Swiper>    
                            </div>






                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All <IoIosArrowRoundForward/></Button>
                            </div>



                            <div className="product_row w-100 mt-5">
                            <Swiper
                              slidesPerView={4}
                              spaceBetween={0}
                              pagination={{
                                clickable: true,
                              }}
                            modules={[Navigation]}
                            className="mySwiper"
                           >
                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductItem/>
                            </SwiperSlide>


                                </Swiper>    
                            </div>

                        </div>


                    </div>
                </div>
            </section>


            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">$20 discount for your first order</p>
                            <h3 className="text-white">Join our newsletter and get...</h3>
                            <p className="text-light">Join our email subscription now to get updates on <br/>promotions and coupons.</p>


                            <form>
                                <IoMailOutline/>
                                <input type="text" placeholder="Your Email Address"/>
                                <Button>Suscribe</Button>
                            </form>

                        </div>

                        <div className="col-md-6">
                            <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/coupon.png"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;