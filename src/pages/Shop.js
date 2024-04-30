import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import back from "../assets/svg/back.svg";
import { useNavigate } from "react-router-dom";
const Shop = ({ selectedData, setSelectedData }) => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const navigate = useNavigate();
  const [basketData, setBasketData] = useState(
    JSON.parse(localStorage.getItem("key")) || []
  );
  const notify = () => toast("Savatga qo'shildi");
  function addcart(id) {
    selectedData.map((item) => {
      if (item.id === id) {
        localStorage.setItem("cart", JSON.stringify(...cartItems, item));
      } else {
        return null;
      }
    });

    notify();
  }
  function like(id) {
    setSelectedData(
      selectedData.map((item) => {
        if (item.id === id) {
          item.liked = !item.liked;
        }
        return item;
      })
    );
  }

  return (
    <div className="shop-wrapper">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {selectedData.map((item) => (
        <div className="product-card" key={item.id}>
          <div className="top-card">
            <img src={item.img} alt="" />
          </div>
          <div className="bottom-card">
            <button
              className="navigate-back"
              onClick={() => navigate(`/${item.category}`)}
            >
              <img src={back} alt="" />
            </button>
            <b>{item.name}</b>
            <div className="shop-price">
              <b>{item.price} </b>{" "}
              <p> $ / {item.weight ? "10 piece" : "bottle"}</p>
            </div>
            <p>
              ~{" "}
              {item.weight
                ? `${item.weight} gram / piece`
                : `${item.volume} liter / bottle`}
            </p>

            <b>Description</b>
            <span>{item.desc}</span>
            <div className="shop-actions">
              <button onClick={() => like(item.id)}>
                {item.liked ? <FcLike /> : <IoMdHeartEmpty />}
              </button>
              <button onClick={() => addcart(item.id)}>
                <RiShoppingCartLine /> ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
