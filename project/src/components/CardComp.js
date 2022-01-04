import React from 'react'
import { Card } from 'react-bootstrap'
import FoodsData from '../data/foods.json'
import '../css/cardComp.css'

const CardComp = () => {
  return (
    <div className="mainCard">
      {FoodsData.map((foodsDetail) => {
        return (
          <div>
            <Card className="cardComponent" style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Img variant="top" src={foodsDetail.thumb_img} />
                <Card.Title>{foodsDetail.name}</Card.Title>
                <Card.Text style={{ color: '#f17228' }}>{foodsDetail.price}</Card.Text>
                <Card.Text style={{display: 'none'}} >{foodsDetail.sales}</Card.Text>
                <Card.Text style={{display: 'none'}} >{foodsDetail.portion}</Card.Text>
                <Card.Text style={{display: 'none'}} >{foodsDetail.stock}</Card.Text>
                <Card.Text style={{display: 'none'}} >{foodsDetail.recipe}</Card.Text>
                <Card.Text style={{display: 'none'}} >{foodsDetail.category}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default CardComp
