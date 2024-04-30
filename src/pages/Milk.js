import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { RiShoppingCartLine } from "react-icons/ri";
import Search from "../components/Search";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Milk = ({ data, setData, setSelectedData, selectedData }) => {
  const basketData = JSON.parse(localStorage.getItem("cart")) || [];
  const navigate = useNavigate();
  const notify = () => toast("Savatga qo'shildi");
  function select(item) {
    setSelectedData([item]);
    navigate("/shop");
  }
  function like(id) {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            liked: !item.liked,
          };
        }
        return item;
      })
    );
  }

  function addcart(item) {
    if (item) {
      basketData.push(item);
      notify();
      console.log(basketData);
      localStorage.setItem("cart", JSON.stringify(basketData));
    }
  }

  return (
    <div className="home-wrapper">
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
      <BackButton />
      <b>Milk products</b>
      <Search />
      <div className="shop-container">
        {data.map((item) => (
          <div className="shop-card" key={item.id}>
            <div className="left-side">
              <img src={item.img} alt="" onClick={() => select(item)} />
            </div>
            <div className="right-side">
              <b onClick={() => select(item)}>{item.name}</b>
              <div onClick={() => select(item)} className="price">
                <b>{item.price}</b>{" "}
                <p> $/{item.weight ? "10 piece" : "bottle"}</p>
              </div>
              <div className="actions">
                <button onClick={() => like(item.id)}>
                  {item.liked ? <FcLike /> : <IoMdHeartEmpty />}
                </button>

                <button onClick={() => addcart(item)}>
                  <RiShoppingCartLine />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milk;
