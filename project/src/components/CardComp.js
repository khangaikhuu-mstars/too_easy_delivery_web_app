import React from 'react'
import { Card } from 'react-bootstrap'
import '../css/cardComp.css'

const CardComp = (props) => {
  return (
    <div className="mainCard">
      {props.data.map((foodsDetail) => {
        console.log(foodsDetail)
        return (
          <div className=''>
            <Card className="cardComponent" style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Img variant="top" src={foodsDetail.thumb_img} />
                <Card.Title className='mt-3 mx-2'>{foodsDetail.name}</Card.Title>
                <div className='prices mx-2 row '>
                <Card.Text className='col-5 priceTag' style={{ color: '#f17228' }}>{foodsDetail.price}</Card.Text>
                <Card.Text className='finalPrice col-5'><strike>{foodsDetail.final_price}</strike></Card.Text>
                <div className='col-2'></div>
                </div>
                <Card.Text style={{ display: 'none' }}>{foodsDetail.sales}</Card.Text>
                <Card.Text style={{ display: 'none' }}>{foodsDetail.portion}</Card.Text>
                <Card.Text style={{ display: 'none' }}>{foodsDetail.stock}</Card.Text>
                <Card.Text style={{ display: 'none' }}>{foodsDetail.recipe}</Card.Text>
                <Card.Text style={{ display: 'none' }}>{foodsDetail.category}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default CardComp
