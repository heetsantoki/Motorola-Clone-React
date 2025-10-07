import React from "react";
import Banner from "./Banner";
import Product from "./Products";

const Home = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: "Motorola razr 50 ultra",
      image: "images/razr50 Ultra SpringGreen.png",
      oldPrice: "1,19,999.00",
      newPrice: "79,999.00",
    },
    {
      id: 2,
      name: "Motorola razr 50",
      image: "images/razr50 KoalaGrey.png",
      oldPrice: "74,999.00",
      newPrice: "54,999.00",
    },
    {
      id: 3,
      name: "Motorola edge 50 neo",
      image: "images/Moto egde50 neo Poinciana.png",
      oldPrice: "29,999.00",
      newPrice: "20,999.00",
    },
    {
      id: 4,
      name: "Motorola edge 50 Fusion",
      image: "images/Moto edge50 Fusion MashmallowBlue.png",
      oldPrice: "25,999.00",
      newPrice: "22,999.00",
    },
    {
      id: 5,
      name: "Motorola edge 50 Ultra",
      image: "images/Moto edge50 Ultra ForestGrey.png",
      oldPrice: "64,999.00",
      newPrice: "49,999.00",
    },
    {
      id: 6,
      name: "Motorola edge 50 Pro",
      image: "images/Moto edge50Pro LuxeLavender.png",
      oldPrice: "44,999.00",
      newPrice: "29,999.00",
    },
    {
      id: 7,
      name: "Motorola edge 50",
      image: "images/Moto egde50 JungleGreen.png",
      oldPrice: "32,999.00",
      newPrice: "21,999.00",
    },
    {
      id: 8,
      name: "Motorola g85",
      image: "images/Moto g85 UrbanGrey.png",
      oldPrice: "20,999.00",
      newPrice: "17,999.00",
    },
    {
      id: 9,
      name: "Motorola g64",
      image: "images/Moto g64 MintGreen.png",
      oldPrice: "19,999.00",
      newPrice: "15,999.00",
    },
    {
      id: 10,
      name: "Motorola g54",
      image: "images/Moto g54 blue.png",
      oldPrice: "21,999.00",
      newPrice: "13,999.00",
    },
    {
      id: 11,
      name: "Motorola g45",
      image: "images/Moto g45 PinkLavender.png",
      oldPrice: "14,999.00",
      newPrice: "12,999.00",
    },
    {
      id: 12,
      name: "Motorola g35",
      image: "images/Moto g35 GuavaRed.png",
      oldPrice: "12,499.00",
      newPrice: "9,999.00",
    },
  ];


  return (
    <>
      <Banner />
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

export default Home;
