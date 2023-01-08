import React from "react";
import Feature from "./Feature";

const DUMMY_DATA = [
  {
    id: "f1",
    imgSrc: "/Images/Features/feel-happy.jpg",
    altImg:"/Images/Features/feel-happy(alt).jpg",
    altText: "feature-one",
    cardText:"Be Our Happy Customer"
  },
  {
    id: "f2",
    imgSrc: "/Images/Features/online-order.jpg",
    altImg:"/Images/Features/online-order(alt).jpg",
    altText: "feature-two",
    cardText:"Place Online Order"
  },
  {
    id: "f3",
    imgSrc: "/Images/Features/open24hours.jpg",
    altImg:"/Images/Features/open24hours(alt).jpg",
    altText: "feature-three",
    cardText:"Leverage 24hrs service facility"
  },
  {
    id: "f4",
    imgSrc: "/Images/Features/free-shipping.jpg",
    altImg:"/Images/Features/free-shipping(alt).jpg",
    altText: "feature-four",
    cardText:"We are providing free-shipping"
  },
  {
    id: "f5",
    imgSrc: "/Images/Features/promotion.jpg",
    altImg:"/Images/Features/promotion(alt).jpg",
    altText: "feature-five",
    cardText:"We are here for your promotion"
  },
  {
    id: "f6",
    imgSrc: "/Images/Features/save-money.jpg",
    altImg:"/Images/Features/save-money(alt).jpg",
    altText: "feature-six",
    cardText:"Connect with us and save your money"
  },
];

const features = DUMMY_DATA.map((featureData) => {
  return (
    <Feature
      key={featureData.id}
      srcImg={featureData.imgSrc}
      altImg={featureData.altImg}
      altText={featureData.altText}
      cardText={featureData.cardText}
    />
  );
});

const featuresContainerClasses = "mt-2 mt-md-5 px-md-5 px-2 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 gx-0"

export default function Features() {
  return (
    <div className={featuresContainerClasses}>
      {features}
    </div>
  );
}
