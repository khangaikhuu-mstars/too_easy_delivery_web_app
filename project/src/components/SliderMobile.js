
import Carousel from 'react-bootstrap/Carousel'

import slider_background from "../images/sliderBackMobile.png"
import slider2 from "../images/slider2Mobile.png"
import slider3 from "../images/slider3Mobile.png"
import sliderPageImage1 from "../images/sliderPageImage1Mobile.svg"
import sliderPageImage2 from "../images/sliderPageImage2Mobile.svg"
import React, { useState } from 'react'




function SliderMobile() {

    const [index, setIndex] = useState(0);

    // slider selector

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        // slider page main

        <div className='sliderMobile'>


            {/* slider page 1 */}
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="sliderPageImage1Mobile"
                        src={sliderPageImage1}

                    /><img
                        className="sliderPageImage2Mobile"
                        src={sliderPageImage2}

                    />
                    <img
                        className="sliderMobileImage"
                        src={slider_background}

                    />

                    <div className='sliderPage1text1Mobile'>

                        <p >MStars Food delivery</p>
                    </div>
                    <div className='sliderPage1text2Mobile'>
                        <p >Хосгүй амтыг хормын дотор хүргэж өгнө.</p>

                    </div>

                </Carousel.Item>

                {/* slider page 2 */}

                <Carousel.Item>
                    <img
                        className="sliderMobileImage"
                        src={slider2}

                    />

                    <div className='sliderPage2textMobile'>

                        <p>Сэт хоол тун удахгүй</p>
                    </div>

                </Carousel.Item>


                {/* slider page 3 */}
                <Carousel.Item>
                    <img
                        className="sliderMobileImage"
                        src={slider3}

                    />

                    <div className='sliderPage3textMobile'>

                        <p>Тун удахгүй...</p>
                    </div>


                </Carousel.Item>
            </Carousel>
        </div>
    );
}





export default SliderMobile;
