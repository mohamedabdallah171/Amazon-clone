import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Row , Col } from 'reactstrap';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}] = useStateValue();
  return (
    <div className='checkout'>
        <Row className='checkout_row'>

        <Col className='checkout_left' lg={8} md={8} sm={12}>

    <img src='\images\OCC_Amazon1._CB423492668_.jpg' alt=' ' className='checkout_ad' />

    {basket?.length === 0 ?(
        <div>
            <h2>
            Your Shopping Basket is empty
            </h2>
            <p>You have no items in your basket. To buy one or more , Click "Add to basket" next to the item</p>
        </div>
    ) : (
        <div>
            <h2 className='checkout_title'>
                Your Shopping Basket
            </h2>

            {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
    )}
    
        </Col>

        {basket.length > 0 && (
            <Col className='checkout_right' lg={4} md={4} sm={5}>
           <Subtotal />
            </Col>
  )}
        </Row>

    </div>
  )
}

export default Checkout