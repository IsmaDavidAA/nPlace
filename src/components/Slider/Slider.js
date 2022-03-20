import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
export default function Slider() {
  return (
    <AwesomeSlider
      media={[
        {
          source:
            "https://th.bing.com/th/id/OIP.9hYAD_t7kzMIL6tP4sQF2QHaE8?pid=ImgDet&rs=1",
        },
        {
          source:
            "https://i.pinimg.com/736x/22/5f/5d/225f5da6d53a79186d9047926880b68d.jpg",
        },
        {
          source:
            "https://listing.pamgolding.co.za/images/properties/201811/1122360/H/1122360_H_54.jpg",
        },
      ]}
    />
  );
}
