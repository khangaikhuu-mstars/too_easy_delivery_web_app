import React from 'react';
// import Button from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import img from './../images/meals.image/food/avocado_salad.png'


const CardComp = (props) => {
    return (
        <Card className='cardComponent' style={{ width: '18rem' } }>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>Avocado Salad</Card.Title>
                <Card.Text style={{ color: '#f17228'}}>
                {/* {6,800₮} */}
                {props.price}
                </Card.Text>
            </Card.Body>
        </Card>

    )
}


export default CardComp