import React, { useState } from "react";

// milk products
import butter from "./assets/img/butter.jpeg";
import cheese from "./assets/img/cheese.jpeg";
import cream from "./assets/img/cream.jpeg";
import milk from "./assets/img/milk.jpeg";
import yogurt from "./assets/img/yogurt.jpeg";

// fruits
import apple from "./assets/img/apple.jpeg";
import cherry from "./assets/img/cherry.jpeg";
import fig from "./assets/img/fig.jpeg";
import grapes from "./assets/img/grapes.jpeg";
import melon from "./assets/img/melon.jpeg";
import apricot from "./assets/img/apricot.jpeg";
import peach from "./assets/img/peach.jpeg";
import plump from "./assets/img/plump.jpeg";
import pomegranate from "./assets/img/pomegranate.jpeg";
import strawberry from "./assets/img/strawberry.jpeg";

// vegetables
import broccoli from "./assets/img/broccoli.jpeg";
import cabbage from "./assets/img/cabbage.jpg";
import carrot from "./assets/img/carrot.jpg";
import cucumber from "./assets/img/cucumber.jpg";
import garlic from "./assets/img/garlic.jpg";
import onion from "./assets/img/onion.jpg";
import pepper from "./assets/img/pepper.jpg";
import potato from "./assets/img/potato.jpg";
import tomato from "./assets/img/tomato.jpg";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import Footer from "./components/Footer";
import Fruit from "./pages/Fruit";
import Shop from "./pages/Shop";
import Milk from "./pages/Milk";
import Vegetable from "./pages/Vegetable";
import Basket from "./pages/Basket";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {
  const [selectedData, setSelectedData] = useState([]);
  const [fruit, setFruit] = useState([
    {
      id: Date.now(),
      count: 1,
      category: "fruit",
      img: apple,
      name: "Apple",
      desc: "Crisp and juicy, apples are a classic fruit loved for their versatility. Perfect for snacking, baking into pies, or adding to salads, apples come in a variety of flavors and colors.",
      liked: false,
      price: 1.5,
      weight: 150,
    },
    {
      id: Date.now() + 1,
      count: 1,
      category: "fruit",
      img: apricot,
      name: "Apricot",
      desc: "Sweet and fragrant, apricots are a delightful stone fruit with a smooth, velvety skin. Enjoy them fresh as a healthy snack, or use them in jams, desserts, and savory dishes.",
      liked: false,
      price: 2.0,
      weight: 120,
    },
    {
      id: Date.now() + 2,
      count: 1,
      category: "fruit",
      img: cherry,
      name: "Cherry",
      desc: "Sweet and succulent, cherries are a seasonal delight loved for their juicy flesh and rich flavor. Whether eaten fresh, baked into pies, or preserved as jams, cherries add a burst of sweetness to any dish.",
      liked: false,
      price: 3.0,
      weight: 200,
    },
    {
      id: Date.now() + 3,
      count: 1,
      category: "fruit",
      img: grapes,
      name: "Grapes",
      desc: "Bursting with flavor, grapes are a favorite fruit for their sweetness and juiciness. Whether enjoyed fresh, frozen for a refreshing treat, or turned into wine, grapes are a versatile and delicious option.",
      liked: false,
      price: 4.5,
      weight: 250,
    },
    {
      id: Date.now() + 4,
      count: 1,
      category: "fruit",
      img: pomegranate,
      name: "Pomegranate",
      desc: "Exotic and refreshing, pomegranates are prized for their ruby-red arils bursting with sweet-tart flavor. Packed with antioxidants, pomegranates are delicious enjoyed on their own or sprinkled over yogurt and salads.",
      liked: false,
      price: 2.8,
      weight: 180,
    },
    {
      id: Date.now() + 5,
      count: 1,
      category: "fruit",
      img: strawberry,
      name: "Strawberry",
      desc: "Juicy and vibrant, strawberries are a summertime favorite. These bright red berries are perfect for adding a pop of color and sweetness to desserts, salads, and smoothies.",
      liked: false,
      price: 2.2,
      weight: 120,
    },
    {
      id: Date.now() + 6,
      count: 1,
      category: "fruit",
      img: fig,
      name: "Fig",
      desc: "Rich and honey-sweet, figs are a luxurious treat with a unique texture and flavor. Whether enjoyed fresh, dried, or cooked into jams and chutneys, figs add a touch of elegance to any dish.",
      liked: false,
      price: 2.4,
      weight: 100,
    },
    {
      id: Date.now() + 7,
      count: 1,
      category: "fruit",
      img: melon,
      name: "Melon",
      desc: "Refreshing and hydrating, melons come in a variety of types, from sweet cantaloupes to crisp honeydews. Enjoy them chilled on a hot day or blend them into smoothies for a cooling treat.",
      liked: false,
      price: 3.0,
      weight: 300,
    },
    {
      id: Date.now() + 8,
      count: 1,
      category: "fruit",
      img: peach,
      name: "Peach",
      desc: "Fragrant and juicy, peaches are a summer staple known for their soft, fuzzy skin and sweet flesh. Perfect for eating fresh, grilling, or baking into cobblers and pies, peaches are a versatile and delicious fruit.",
      liked: false,
      price: 2.5,
      weight: 150,
    },
    {
      id: Date.now() + 9,
      count: 1,
      category: "fruit",
      img: plump,
      name: "Plum",
      desc: "Sweet and tangy, plums come in a range of colors and varieties. Enjoy them fresh as a snack, or incorporate them into desserts, sauces, and savory dishes for a burst of natural sweetness.",
      liked: false,
      price: 2.3,
      weight: 130,
    },
  ]);
  const [vegetable, setVegetable] = useState([
    {
      id: Date.now() + 15,
      count: 1,
      category: "vegetable",
      img: broccoli,
      name: "Broccoli",
      desc: "Broccoli is a nutrient-packed vegetable rich in vitamins, minerals, and antioxidants. It's known for its vibrant green color and versatile use in stir-fries, salads, soups, and as a side dish.",
      liked: false,
      price: 1.8,
      weight: 200,
    },
    {
      id: Date.now() + 16,
      count: 1,
      category: "vegetable",
      img: cabbage,
      name: "Cabbage",
      desc: "Cabbage is a cruciferous vegetable with a mild, slightly sweet flavor. It's commonly used in coleslaws, salads, stir-fries, and soups. Cabbage is also praised for its health benefits.",
      liked: false,
      price: 1.5,
      weight: 300,
    },
    {
      id: Date.now() + 17,
      count: 1,
      category: "vegetable",
      img: carrot,
      name: "Carrot",
      desc: "Carrots are crunchy, sweet root vegetables packed with beta carotene, vitamins, and fiber. They're delicious eaten raw as a snack, grated into salads, or cooked in soups, stews, and casseroles.",
      liked: false,
      price: 1.2,
      weight: 150,
    },
    {
      id: Date.now() + 18,
      count: 1,
      category: "vegetable",
      img: cucumber,
      name: "Cucumber",
      desc: "Cucumbers are cool and refreshing vegetables with a high water content. They're perfect for adding crunch to salads, sandwiches, and wraps, or for pickling to enjoy as a tangy snack.",
      liked: false,
      price: 0.8,
      weight: 180,
    },
    {
      id: Date.now() + 19,
      count: 1,
      category: "vegetable",
      img: garlic,
      name: "Garlic",
      desc: "Garlic is a pungent and aromatic vegetable known for its culinary and medicinal properties. It adds depth of flavor to a wide range of dishes, including soups, sauces, marinades, and stir-fries.",
      liked: false,
      price: 1.0,
      weight: 50,
    },
    {
      id: Date.now() + 20,
      count: 1,
      category: "vegetable",
      img: onion,
      name: "Onion",
      desc: "Onions are versatile bulb vegetables with a savory flavor used as a base in many dishes. They can be caramelized, sautéed, roasted, or used raw in salads, salsas, sandwiches, and more.",
      liked: false,
      price: 0.9,
      weight: 100,
    },
    {
      id: Date.now() + 21,
      count: 1,
      category: "vegetable",
      img: pepper,
      name: "Pepper",
      desc: "Peppers, whether sweet or spicy, are colorful and flavorful vegetables used in cuisines worldwide. They can be eaten raw in salads, stuffed, roasted, grilled, or sautéed as a side or main dish.",
      liked: false,
      price: 1.3,
      weight: 120,
    },
    {
      id: Date.now() + 22,
      count: 1,
      category: "vegetable",
      img: potato,
      name: "Potato",
      desc: "Potatoes are starchy tuber vegetables enjoyed worldwide in countless dishes. They can be boiled, mashed, roasted, fried, or baked and are a versatile ingredient in soups, salads, and casseroles.",
      liked: false,
      price: 0.6,
      weight: 200,
    },
    {
      id: Date.now() + 23,
      count: 1,
      category: "vegetable",
      img: tomato,
      name: "Tomato",
      desc: "Tomatoes are juicy, flavorful fruits commonly mistaken as vegetables. They're used fresh in salads, sandwiches, and salsas, and cooked in sauces, soups, stews, and as a topping on pizzas.",
      liked: false,
      price: 1.1,
      weight: 80,
    },
  ]);
  const [milkData, setMilkData] = useState([
    {
      id: Date.now() + 10,
      count: 1,
      category: "milk",
      img: milk,
      name: "Milk",
      desc: "Nutrient-rich and versatile, milk is a staple dairy product enjoyed in various forms around the world. Use it for drinking, cooking, baking, or making creamy beverages like milkshakes and lattes.",
      liked: false,
      price: 20.0,
      volume: 1,
    },
    {
      id: Date.now() + 11,
      count: 1,
      category: "milk",
      img: cheese,
      name: "Cheese",
      desc: "Rich and flavorful, cheese comes in countless varieties, from sharp cheddars to creamy bries. Enjoy it on its own, melted over dishes, or paired with fruits and wines for a delightful snack.",
      liked: false,
      price: 30.5,
      weight: 200,
    },
    {
      id: Date.now() + 12,
      count: 1,
      category: "milk",
      img: butter,
      name: "Butter",
      desc: "Creamy and indulgent, butter is a versatile ingredient used in cooking, baking, and spreading on toast. Made from churned cream, butter adds richness and flavor to a wide range of dishes.",
      liked: false,
      price: 20.8,
      weight: 250,
    },
    {
      id: Date.now() + 13,
      count: 1,
      category: "milk",
      img: cream,
      name: "Cream",
      desc: "Luxuriously smooth and decadently rich, cream is a staple ingredient in desserts, sauces, and soups. Whether whipped into peaks or poured over berries, cream adds a touch of indulgence to any dish.",
      liked: false,
      price: 10.8,
      volume: 0.5,
    },
    {
      id: Date.now() + 14,
      count: 1,
      category: "milk",
      img: yogurt,
      name: "Yogurt",
      desc: "Creamy and tangy, yogurt is a versatile dairy product enjoyed on its own or used as a base for smoothies, dips, and dressings. Packed with probiotics, yogurt is also beneficial for gut health.",
      liked: false,
      price: 20.2,
      weight: 400,
    },
  ]);
  const category = [
    {
      id: 1,
      name: "Fruits",
      length: fruit.length,
      img: fruit[0].img,
      category: "/fruit",
    },
    {
      id: 2,
      name: "Vegetables",
      length: vegetable.length,
      img: vegetable[0].img,
      category: "/vegetable",
    },
    {
      id: 3,
      name: "Milk Products",
      length: milkData.length,
      img: milkData[0].img,
      category: "/milk",
    },
  ];
  const [registered, setRegistered] = useState(
    JSON.parse(localStorage.getItem("registered")) || false
  );
  return (
    <div className="App">
      <Routes>
        <Route
          path={registered === true ? "/register" : "/"}
          element={<Register />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path={registered === true ? "/" : "/home"}
          element={<Home category={category} />}
        />
        <Route
          path="/fruit"
          element={
            <Fruit
              selectedData={selectedData}
              setSelectedData={setSelectedData}
              setData={setFruit}
              data={fruit}
            />
          }
        />
        <Route
          path="/milk"
          element={
            <Milk
              selectedData={selectedData}
              setSelectedData={setSelectedData}
              data={milkData}
              setData={setMilkData}
            />
          }
        />
        <Route
          path="/vegetable"
          element={
            <Vegetable
              selectedData={selectedData}
              setSelectedData={setSelectedData}
              data={vegetable}
              setData={setVegetable}
            />
          }
        />
        <Route path="/user" element={<User />} />
        <Route
          path="/shop"
          element={
            <Shop
              setSelectedData={setSelectedData}
              selectedData={selectedData}
            />
          }
        />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      {registered === true ? <Footer /> : ""}
    </div>
  );
}

export default App;
