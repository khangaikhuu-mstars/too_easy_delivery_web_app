
import Carousel from 'react-bootstrap/Carousel'

import sliderBackTab from "../images/sliderBackTab.png"
import slider2Tab from "../images/slider2Tab.png"
import slider3Tab from "../images/slider3Tab.png"
import sliderPageImageTab1 from "../images/sliderPageImageTab1.svg"
import sliderPageImageTab2 from "../images/sliderPageImageTab2.svg"
import React, { useState } from 'react'




function SliderTab() {

    const [index, setIndex] = useState(0);

    // slider selector

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        // slider page main

        <div className='sliderTab'>


            {/* slider page 1 */}
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="sliderPageImageTab1"
                        src={sliderPageImageTab1}

                    /><img
                        className="sliderPageImageTab2"
                        src={sliderPageImageTab2}

                    />
                    <img
                        className="sliderTabImage"
                        src={sliderBackTab}

                    />

                    <div className='sliderPage1text1Tab'>

                        <p >MStars Food delivery</p>
                    </div>
                    <div className='borderLine'>

                    </div>
                    <div className='sliderPage1text2Tab'>
                        <p >Хосгүй амтыг хормын дотор хүргэж өгнө.</p>

                    </div>

                </Carousel.Item>

                {/* slider page 2 */}

                <Carousel.Item>
                    <img
                        className="sliderTabImage"
                        src={slider3Tab}

                    />
                    <div className='sliderPage3textTab'>

                        <p>Тун удахгүй...</p>
                    </div>


                </Carousel.Item>


                {/* slider page 3 */}
                <Carousel.Item>
                    <img
                        className="sliderTabImage"
                        src={slider2Tab}

                    />
                    <div className='sliderPage2textTab'>

                        <p>Сэт хоол гарч эхэллээ</p>
                    </div>



                </Carousel.Item>
            </Carousel>
        </div>
    );
}





export default SliderTab;
