import React from 'react'
import { useStateValue } from "./StateProvider";


function CheckoutProduct({ id, image, title, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

  return (
    <div className='checkoutproduct'>
     <img className='checkoutproduct_image' src={image} alt=' ' />

     <div className='checkoutproduct_info'>

    <p className='checkoutproduct_title'>{title}</p>

    <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
    </p>

    <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p className='star'>★</p>
                    ))}
                </div>
                <button onClick={removeFromBasket} className='checkoutproduct_button'>Remove from Basket</button>

     </div>
    </div>
  )
}

export default CheckoutProduct