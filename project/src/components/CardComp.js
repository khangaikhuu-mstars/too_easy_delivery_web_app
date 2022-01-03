import React from 'react';
// import Button from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import FoodsData from '../data/foods.json'

const CardComp = () => {
        return (
            <div>
                {FoodsData.map((foodsDetail, index) => {
                    return(
                        <div>
                            <Card className='cardComponent' style={{ width: '18rem' } }>
                            <Card.Body>
                                <Card.Img variant="top" src={foodsDetail.thumb_img} />
                                <Card.Title>{foodsDetail.name}</Card.Title>
                                <Card.Text style={{ color: '#f17228'}}>
                                {foodsDetail.price}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>

)

}


export default CardComp