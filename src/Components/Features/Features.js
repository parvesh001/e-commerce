import React from "react";
import f1 from "../../Assets/Features/feel-happy.jpg";
import f2 from "../../Assets/Features/online-order.jpg";
import f3 from "../../Assets/Features/open24hours.jpg";
import f4 from "../../Assets/Features/free-shipping.jpg";
import f5 from "../../Assets/Features/promotion.jpg";
import f6 from "../../Assets/Features/save-money.jpg";
import Feature from "./Feature";

const DUMMY_DATA = [
  {
    id: "f1",
    imgSrc: f1,
    altText: "feature-one",
  },
  {
    id: "f2",
    imgSrc: f2,
    altText: "feature-two",
  },
  {
    id: "f3",
    imgSrc: f3,
    altText: "feature-three",
  },
  {
    id: "f4",
    imgSrc: f4,
    altText: "feature-four",
  },
  {
    id: "f5",
    imgSrc: f5,
    altText: "feature-five",
  },
  {
    id: "f6",
    imgSrc: f6,
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

const featuresContainerClasses = "mt-2 mt-md-5 px-md-5 px-2 d-flex flex-column flex-md-row align-items-center gap-3"

export default function Features() {
  return (
    <div className={featuresContainerClasses}>
      {features}
    </div>
  );
}
