import React from "react";

const Meals = ({ meals, index, title, description, price, popular }) => {
  return (
    <div className="mealCategory">
      {meals.map((meal, index) => {
        const sentenceReducer = (string) => {
          if (string.length > 70) {
            let shorted = string.slice(0, 70);
            shorted = shorted + "...";
            return shorted;
          } else {
            return string;
          }
        };
        return (
          <div key={index} className="detailCat">
            <div>
              <h4>{meal.title}</h4>
              <p>{sentenceReducer(meal.description)}</p>
              <div>
                <span>{meal.price} €</span>
                <span>
                  {meal.popular && (
                    <span className="popular">&#x2605; Populaire</span>
                  )}
                </span>
              </div>
            </div>

            <figure className={!meal.picture && "displayNone"}>
              <img alt="recette" src={meal.picture} />
            </figure>
          </div>
        );
      })}
    </div>
  );
};

export default Meals;
