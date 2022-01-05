import React from 'react-bootstrap'
import Icon from '../images/MobileLocationIcon.svg'

function DeliveryRadius() {
    return (
        <div>
            <div className='TabMap'>
                <div className='container'>
                    <div className='DeliveryMap'>
                        <div className='deliveryMapBack'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='TextBus'>
                    <div className='DeliveryText'>
                        Хүргэлтийн бүс
                    </div>
                </div>
            </div>
            <div className='container MobileBus'>
                <div className='TabText'>
                    <div className='TextWidth'>
                        <div >
                            <div className='TextFlex'>
                                <div>
                                    <div className='Abus'>
                                        "A" бүс
                                    </div>
                                </div>
                                <div className='BusText'>

                                    <div className='BusList'> <img src={Icon} className=' d-md-none' />  Нархан хотгон</div>
                                    <div className='BusList'> <img src={Icon} className=' d-md-none' />  26-байр</div>
                                    <div className='BusList'> <img src={Icon} className=' d-md-none' />  Хоймор хотгон</div>
                                    <div className='BusList2'> 56-байр</div>
                                    <div className='BusList2'> 36-байр</div>
                                    <div className='BusList2'> 16-байр</div>
                                    <div className='BusList2'> Хоймор хотгон</div>
                                    <div className='BusList2'> 46-байр</div>
                                </div>
                                <div className='BusText'>
                                    <div className='BusList'> <img src={Icon} className=' d-md-none' />  Нархан хотгон</div>
                                    <div className='BusList'> <img src={Icon} className=' d-md-none' />  26-байр</div>
                                    <div className='BusList'> <img src={Icon} className=' d-md-none' />  Хоймор хотгон</div>
                                    <div className='BusList2'> 56-байр</div>
                                    <div className='BusList2'> 36-байр</div>
                                    <div className='BusList2'> 16-байр</div>
                                    <div className='BusList2'> Хоймор хотгон</div>
                                    <div className='BusList2'> 46-байр</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='TextWidth'>
                        <div >
                            <div className='TextFlex'>
                                <div>
                                    <div className='Abus'>
                                        "Б" бүс
                                    </div>
                                </div>
                                <div className='BusText'>
                                    <div className='BusList'> <img src={Icon} className=' d-md-none' /> Нархан хотгон</div>
                                    <div className='BusList'> <img src={Icon} className='d-md-none' /> 26-байр</div>
                                    <div className='BusList'> <img src={Icon} className=' d-md-none' /> Хоймор хотгон</div>
                                    <div className='BusList2'> 56-байр</div>
                                    <div className='BusList2'> 36-байр</div>
                                    <div className='BusList2'> 16-байр</div>
                                    <div className='BusList2'> Хоймор хотгон</div>
                                    <div className='BusList2'> 46-байр</div>
                                </div>
                                <div className='BusText'>
                                    <div className='BusList'> <img src={Icon} className=' d-md-none' /> Нархан хотгон</div>
                                    <div className='BusList'> <img src={Icon} className=' d-md-none' /> 26-байр</div>
                                    <div className='BusList'> <img src={Icon} className=' d-md-none' />Хоймор хотгон</div>
                                    <div className='BusList2'> 56-байр</div>
                                    <div className='BusList2'> 36-байр</div>
                                    <div className='BusList2'> 16-байр</div>
                                    <div className='BusList2'> Хоймор хотгон</div>
                                    <div className='BusList2'> 46-байр</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='TabMap2'>
            </div>
        </div>

    )
}

export default DeliveryRadius



