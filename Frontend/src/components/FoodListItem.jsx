import React from 'react';

const FoodListItem = ({ leftText, rightText}) => {
  return (
    <li className="flex justify-between p-2 m-2 rounded-lg bg-baby-powder">
      <span>{leftText}</span>
      <span>{rightText}</span>
    </li>
  );
};

export default FoodListItem;