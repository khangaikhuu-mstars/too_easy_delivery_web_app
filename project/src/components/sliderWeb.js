import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react'

function SliderWeb() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='Margin'>
            <div className='sliderWeb'>
                <Carousel activeIndex={index} onSelect={handleSelect} >
                    <Carousel.Item>
                        <div className='centerContent sliderWebImage'>
                            <div className='container'>
                                <div className='row flexPage1'>
                                    <div className='imageSidepage1 col-6'>
                                        <div className="sliderPageImageWeb1">
                                        </div>
                                        <div className="sliderPageImageWeb2">
                                        </div>
                                    </div>
                                    <div className='textSidepage1 col-6'>
                                        <div className='sliderPage1text1Web'>
                                            <p >MStars Food delivery</p>
                                        </div>
                                        <div className='borderLineWeb'>
                                        </div>
                                        <div className='sliderPage1text2Web'>
                                            <p >Хосгүй амтыг хормын дотор хүргэж өгнө.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        < div className="sliderWebImage2">
                          <div className='sliderPage3textWeb'>
                            <p>Тун удахгүй...</p>
                        </div>
                        </div>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="sliderWebImage3"> 
                          <div className='sliderPage2textWeb'>
                            <p>Сэт хоол гарч эхэллээ</p>
                        </div>
                        </div>
                        
                    </Carousel.Item>
                </Carousel>
            </div >
        </div>
    );
}





export default SliderWeb;
