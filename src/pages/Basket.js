import React, { useState, useEffect } from "react";
import deleteIc from "../assets/svg/delete.svg";

const Basket = () => {
  const [basketData, setBasketData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setBasketData(data);
    calculateTotal(data);
  }, []);

  useEffect(() => {
    calculateTotal(basketData);
    localStorage.setItem("cart", JSON.stringify(basketData));
  }, [basketData]);

  const calculateTotal = (data) => {
    let total = 0;
    data.forEach((item) => {
      total += item.price * item.count;
    });
    setTotalPrice(total);
  };

  const plus = (id) => {
    const updatedData = basketData.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setBasketData(updatedData);
  };

  const minus = (id) => {
    const updatedData = basketData.map((item) => {
      if (item.id === id && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setBasketData(updatedData);
  };

  const remove = (id) => {
    const updatedData = basketData.filter((item) => item.id !== id);
    setBasketData(updatedData);
  };

  const handleClearance = () => {
    setBasketData([]);
  };

  return (
    <div className="home-wrapper">
      <b>Basket</b>
      <div className="shop-container">
        {basketData.map((item) => (
          <div className="shop-card" key={item.id}>
            <div className="left-side">
              <img src={item.img} alt="" />
            </div>
            <div className="right-side">
              <b>{item.name}</b>
              <div className="price">
                <b>{item.price}</b>{" "}
                <p> $/{item.weight ? "10 piece" : "bottle"}</p>
              </div>
              <div className="basket-actions">
                <button onClick={() => minus(item.id)}>–</button>
                <p>{item.count}</p>
                <button onClick={() => plus(item.id)}>+</button>
                <button onClick={() => remove(item.id)}>
                  <img src={deleteIc} alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <p>Your subtotal: {totalPrice}$</p>
        <button>Clearance</button>
      </div>
    </div>
  );
};

export default Basket;
