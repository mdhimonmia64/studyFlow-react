const FeaturedCard = ({ icon, title, description }) => {
  return (
    <div data-aos="fade-right" className="hover:border-2 border-emerald-600 space-y-4 bg-white p-5 rounded-xl shadow-lg text-center">
      {icon}
      <h2 className="font-bold text-2xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FeaturedCard;
