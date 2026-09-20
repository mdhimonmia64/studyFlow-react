import React from "react";

const FeaturedCard = ({ icon, title, description }) => {
  return (
    <div className="space-y-4 bg-white p-4 rounded-xl shadow-lg text-center">
      {icon}
      <h2 className="font-bold text-2xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FeaturedCard;
