import React from 'react'
import { useStateValue } from "./StateProvider";


function Products({id, title, image, price, rating}) {
  const [{  }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });

  }
  return (
    <div className='product'>
      <div className="product_info">
      <strong> {title} </strong>
      <p className="product_price">
    <small>$</small>
    <strong>{price} </strong>
      </p>
      <div className='product_rating'>
  {
    Array(rating)
      .fill()
      .map((_) => (
        <p className='star'>★</p>
      ))
  }
    </div>

</div>
<img src={image} alt=' '  className='product_img'/>
<button onClick={addToBasket}>
  Add to Basket
</button>

    </div>
  )
}

export default Products