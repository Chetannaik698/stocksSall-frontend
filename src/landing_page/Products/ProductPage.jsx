import React from "react";
import ProductHero from "./ProductHero";
import LeftProduct from "./LeftProduct";
import RightProduct from "./RightProduct";

const ProductPage = () => {
  return (
    <>
      <ProductHero />

      <LeftProduct
        ProductImg="/products-kite.png"
        ProductName="Kite"
        ProductDetails="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        Demo="Try demo"
        Learn="Learn more"
        PlayStore="/google-play-badge.svg"
        AppStore="appstore-badge.svg"
      />

      <RightProduct
        ProductImg="/products-console.png"
        ProductName="Console"
        ProductDetails="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        Demo="Learn more "
      />

      <LeftProduct
        ProductImg="/products-coin.png"
        ProductName="Coin"
        ProductDetails="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        Demo="Coin"
        PlayStore="/google-play-badge.svg"
        AppStore="appstore-badge.svg"
      />

      <RightProduct
        ProductImg="/products-kiteconnect.png"
        ProductName="Kite Connect API"
        ProductDetails="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        Demo="Kite Connect"
      />

      <LeftProduct
        ProductImg="/varsity-products.png"
        ProductName="Varsity mobile"
        ProductDetails="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        PlayStore="/google-play-badge.svg"
        Demo="Try demo"
        Learn="Learn more"
        AppStore="appstore-badge.svg"
      />
    </>
  );
};

export default ProductPage;
