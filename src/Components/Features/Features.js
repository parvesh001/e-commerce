import React from "react";
import Feature from "./Feature";

const DUMMY_DATA = [
  {
    id: "f1",
    imgSrc: "/Images/Features/feel-happy.jpg",
    altImg: "/Images/Features/feel-happy(alt).jpg",
    altText: "feature-one",
    cardText: "Happy Customer",
  },
  {
    id: "f2",
    imgSrc: "/Images/Features/online-order.jpg",
    altImg: "/Images/Features/online-order(alt).jpg",
    altText: "feature-two",
    cardText: "Online Order",
  },
  {
    id: "f3",
    imgSrc: "/Images/Features/open24hours.jpg",
    altImg: "/Images/Features/open24hours(alt).jpg",
    altText: "feature-three",
    cardText: "24hrs facility",
  },
  {
    id: "f4",
    imgSrc: "/Images/Features/free-shipping.jpg",
    altImg: "/Images/Features/free-shipping(alt).jpg",
    altText: "feature-four",
    cardText: "Free-shipping",
  },
  {
    id: "f5",
    imgSrc: "/Images/Features/promotion.jpg",
    altImg: "/Images/Features/promotion(alt).jpg",
    altText: "feature-five",
    cardText: "Your Promotion",
  },
  {
    id: "f6",
    imgSrc: "/Images/Features/save-money.jpg",
    altImg: "/Images/Features/save-money(alt).jpg",
    altText: "feature-six",
    cardText: "Save Your Money",
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

const featuresContainerClasses =
  "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 gx-0";

export default function Features() {
  return (
    <div className="mt-2 mt-md-5 px-md-5 px-2">
      <h4 className="text-light mb-0 px-2 px-sm-3">FEATURES</h4>
      <div className={featuresContainerClasses}>{features}</div>
    </div>
  );
}
