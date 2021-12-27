
import Carousel from 'react-bootstrap/Carousel'
import slider_background from "../images/slider_background.png"
import slider2 from "../images/slider2.png"
import slider3 from "../images/slider3.png"
import sliderPageImage1 from "../images/sliderPageImage1.svg"
import sliderPageImage2 from "../images/sliderPageImage2.svg"
import React, { useState } from 'react'




function Slider() {

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
                        className="sliderPageImage1"
                        src={sliderPageImage1}

                    /><img
                        className="sliderPageImage2"
                        src={sliderPageImage2}

                    />
                    <img
                        className="sliderMobileImage"
                        src={slider_background}

                    />

                    <div className='sliderPage1text1'>

                        <h3 >MStars Food delivery</h3>
                    </div>
                    <div className='sliderPage1text2'>
                        <p >Хосгүй амтыг хормын дотор хүргэж өгнө.</p>

                    </div>

                </Carousel.Item>

                {/* slider page 2 */}

                <Carousel.Item>
                    <img
                        className="sliderMobileImage"
                        src={slider2}

                    />

                    <div className='sliderPage2text'>

                        <h3>Сэт хоол тун удахгүй</h3>
                    </div>

                </Carousel.Item>


                {/* slider page 3 */}
                <Carousel.Item>
                    <img
                        className="sliderMobileImage"
                        src={slider3}

                    />

                    <div className='sliderPage3text'>

                        <h3>Тун удахгүй...</h3>
                    </div>


                </Carousel.Item>
            </Carousel>
        </div>
    );
}





export default Slider;
