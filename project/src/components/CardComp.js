import React from 'react'
import { Card} from 'react-bootstrap'
import '../css/cardComp.css';

const CardComp = (props) => {
  return (
    <div className="mainCard flex-container">
      {props.data.map((foodsDetail) => {
        console.log(foodsDetail)
        return (
            <div className="row">
              <Card className={foodsDetail.sales ? "cardComponentWithBadge":"cardComponentWithoutBadge" } style={{ width: '16rem' }}>
                <Card.Body>
                  <Card.Img variant="top" src={foodsDetail.thumb_img} />
                  <Card.Title className="mt-3 mx-2 foodTitle">{foodsDetail.name}</Card.Title>
                  <div className="prices mx-2 row ">
                    <Card.Text className="col-5 priceTag mx-2" style={{ color: '#f17228' }}>
                      {foodsDetail.final_price = foodsDetail.price - (foodsDetail.price * foodsDetail.discount_percentage / 100)}₮
                    </Card.Text>
                    <Card.Text className="finalPrice col-5">
                      <strike style={foodsDetail.discount_percentage== 0 ? {display: 'none'}:{display: 'block'}}>{foodsDetail.price}</strike>
                    </Card.Text>
                    <div className="col-2"></div>
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

export default CardComp
