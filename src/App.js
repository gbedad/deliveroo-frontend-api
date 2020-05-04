import React, { useState, useEffect } from "react";
import axios from "axios";
import LogoDeliveroo from "./Deliveroo_logo.png";

import "./App.css";
import Meals from "./components/Meals";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await axios.get(
      "https://deliveroo-backend-api.herokuapp.com/"
    );
    setData(response.data);
    setIsLoading(false);
    console.log(response.data.restaurant.name);
  };
  useEffect(() => {
    getData();
  }, []);

  return isLoading ? (
    <span>Encours de chargement...</span>
  ) : (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img alt="logo Deliveroo" src={LogoDeliveroo} />
        </div>
      </div>
      <div className="subHeader">
        <div className="presentation">
          <div className="texte">
            <h2>{data.restaurant.name}</h2>
            <p>{data.restaurant.description}</p>
          </div>
          <figure>
            <img src={data.restaurant.picture} alt="plats" />
          </figure>
        </div>
      </div>

      <div className="categories">
        {data.categories.map((cat, index) => {
          return (
            <div className="catMeals" key={index}>
              <h3>{cat.name}</h3>
              <Meals
                category={cat}
                meals={cat.meals}
                key={index}
                title={cat.title}
                description={cat.description}
                price={cat.price}
                popular={cat.popular}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
