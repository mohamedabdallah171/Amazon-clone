import React from "react";
import { useStateValue } from "./StateProvider";
import { basketTotal } from "./Reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <div>
        <p>Subtotal ({basket.length} items)</p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
        <small>$</small> {basketTotal(basket)}
      </div>

      <button className="subtotal-button"> Procced to Checkout </button>
    </div>
  );
}

export default Subtotal;
