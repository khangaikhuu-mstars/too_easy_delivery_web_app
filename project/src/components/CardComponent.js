import React from 'react';
import { Card,} from 'react-bootstrap';
import  NumberFormat  from 'react-number-format';
import '../css/cardComp.css'

const CardComp = (props) => {
  return (
    
    <div className="mainCard row">
      {props.data.map((foodsDetail) => {
        return (
            <div className='cardContainer col-6 col-lg-3 col-md-3 col-sm-6'>
              <Card className={foodsDetail.sales ? "cardComponentWithBadge":"cardComponentWithoutBadge" }>
                <Card.Body className='cardBody'>
                  <Card.Img variant="top" className='thumbnail' src={foodsDetail.thumb_img} />
                  <Card.Title className="mt-3 foodTitle">{foodsDetail.name}</Card.Title>
                  <div className="prices mx-2 row ">
                    <Card.Text className="col-6 priceTag" style={{ color: '#f17228' }}>
                    <NumberFormat value={foodsDetail.final_price = foodsDetail.price - (foodsDetail.price * foodsDetail.discount_percentage / 100)} displayType={'text'} thousandSeparator={true} suffix={'₮'} />
                    </Card.Text>
                    <Card.Text className="finalPrice col-6">
                      <strike style={foodsDetail.discount_percentage== 0 ? {display: 'none'}:{display: 'block'}}><NumberFormat value={foodsDetail.price} displayType={'text'} thousandSeparator={true} suffix={'₮'} /></strike>
                    </Card.Text>
                  </div>
                  <Card.Text style={{ display: 'none' }}>{foodsDetail.sales}</Card.Text>
                  <Card.Text style={{ display: 'none' }}>{foodsDetail.portion}</Card.Text>
                  <Card.Text style={{ display: 'none' }}>{foodsDetail.stock}</Card.Text>
                  <Card.Text style={{ display: 'none' }}>{foodsDetail.recipe}</Card.Text>
                  <Card.Text style={{ display: 'none' }}>{foodsDetail.category}</Card.Text>
                  <Card.Text className='discount_percentage' style={foodsDetail.discount_percentage== 0 ? {display: 'none'}:{display: 'block'}}>{foodsDetail.discount_percentage}%</Card.Text>
                </Card.Body>
              </Card>
            </div>
        )
      })}
    </div>
  )
}

export default CardComp;
