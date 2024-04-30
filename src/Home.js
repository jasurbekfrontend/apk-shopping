import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "./components/Search";
import BackButton from './components/BackButton'
const Home = ({ category }) => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <BackButton />
      <b>Categories</b>
      <Search />

      <div className="categories-container">
        {category.map((item) => (
          <div
            className="category-card"
            onClick={() => navigate(item.category)}
            key={item.id}
          >
            <div className="image-box">
              <img src={item.img} alt="" />
            </div>
            <div className="text-box">
              <b>{item.name}</b>
              <span>({item.length})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
