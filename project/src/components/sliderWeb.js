
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
                 <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <div className="sliderPageImageWeb1">
                        </div>
                        <div className="sliderPageImageWeb2">
                        </div>
                        <div className="sliderWebImage">
                        </div>
                        <div className='sliderPage1text1Web'>
                            <p >MStars Food delivery</p>
                        </div>
                        <div className='borderLineWeb'>
                        </div>
                        <div className='sliderPage1text2Web'>
                            <p >Хосгүй амтыг хормын дотор хүргэж өгнө.</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        < div className="sliderWebImage2"> </div>
                        <div className='sliderPage3textWeb'>
                            <p>Тун удахгүй...</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="sliderWebImage3"> </div>
                        <div className='sliderPage2textWeb'>
                            <p>Сэт хоол гарч эхэллээ</p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div >
        </div>
    );
}





export default SliderWeb;
