
import React from "react";
import Slider from "react-slick";

const HomeBanner = ()=>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true
      };

    return(
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src = "https://sslimages.shoppersstop.com/sys-master/root/h8e/hb2/33109669904414/Main_EOSS-FLAT-50-WEB--2024-07--10-new-hp.jpg" className="w-100"/>
                </div>
                <div className="item">
                    <img src = "https://sslimages.shoppersstop.com/sys-master/root/h1b/hc0/33109669511198/women-Indianwear_top-banner-web------flat-503off-2024-07-11.jpg" className="w-100"/>
                </div>
                <div className="item">
                    <img src = "https://sslimages.shoppersstop.com/sys-master/root/h2a/hc6/33109669380126/women-westernwear_top-banner-web------flat-503off-2024-07-11.jpg" className="w-100"/>
                </div>
                <div className="item">
                    <img src = "https://sslimages.shoppersstop.com/sys-master/root/h6f/h1e/33130856906782/menswear_top-banner-web_88--k0.jpg" className="w-100"/>
                </div>
            </Slider>
        </div>
    )
}

export default HomeBanner;