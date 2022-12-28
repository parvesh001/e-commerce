import React from "react";
import Feature from "./Feature";

const DUMMY_DATA = [
  {
    id: "f1",
    imgSrc: "/Images/Features/feel-happy.jpg",
    altText: "feature-one",
  },
  {
    id: "f2",
    imgSrc: "/Images/Features/online-order.jpg",
    altText: "feature-two",
  },
  {
    id: "f3",
    imgSrc: "/Images/Features/open24hours.jpg",
    altText: "feature-three",
  },
  {
    id: "f4",
    imgSrc: "/Images/Features/free-shipping.jpg",
    altText: "feature-four",
  },
  {
    id: "f5",
    imgSrc: "/Images/Features/promotion.jpg",
    altText: "feature-five",
  },
  {
    id: "f6",
    imgSrc: "/Images/Features/save-money.jpg",
    altText: "feature-six",
  },
];

const features = DUMMY_DATA.map((featureData) => {
  return (
    <Feature
      key={featureData.id}
      srcImg={featureData.imgSrc}
      altText={featureData.altText}
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
