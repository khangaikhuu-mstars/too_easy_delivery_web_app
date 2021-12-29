
import Carousel from 'react-bootstrap/Carousel'

import sliderBackWeb from "../images/sliderBackWeb.png"
import slider2Web from "../images/slider2Web.png"
import slider3Web from "../images/slider3Web.png"
import sliderPageImageWeb1 from "../images/sliderPageImage1Web.svg"
import sliderPageImageWeb2 from "../images/sliderPageImage2Web.svg"
import React, { useState } from 'react'




function SliderWeb() {

    const [index, setIndex] = useState(0);

    // slider selector

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        // slider page main

        <div className='sliderWeb'>


            {/* slider page 1 */}
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="sliderPageImageWeb1"
                        src={sliderPageImageWeb1}

                    /><img
                        className="sliderPageImageWeb2"
                        src={sliderPageImageWeb2}

                    />
                    <img
                        className="sliderWebImage"
                        src={sliderBackWeb}

                    />

                    <div className='sliderPage1text1Web'>

                        <p >MStars Food delivery</p>
                    </div>
                    <div className='borderLine'>

                    </div>
                    <div className='sliderPage1text2Web'>
                        <p >Хосгүй амтыг хормын дотор хүргэж өгнө.</p>

                    </div>

                </Carousel.Item>

                {/* slider page 2 */}

                <Carousel.Item>
                    <img
                        className="sliderWebImage"
                        src={slider3Web}

                    />
                    {/* <div className='sliderPage3textWeb'>

                        <p>Тун удахгүй...</p>
                    </div> */}


                </Carousel.Item>


                {/* slider page 3 */}
                <Carousel.Item>
                    <img
                        className="sliderWebImage"
                        src={slider2Web}

                    />
                    {/* <div className='sliderPage2textWeb'>

                        <p>Сэт хоол гарч эхэллээ</p>
                    </div> */}



                </Carousel.Item>
            </Carousel>
        </div>
    );
}





export default SliderWeb;
