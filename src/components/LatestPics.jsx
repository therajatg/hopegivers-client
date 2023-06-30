import { useEffect, useState } from "react";
import axios from "../axios";

export const LatestPics = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const res = await axios.get("/api/images");
    setImages(res.data);
  };

  return (
    <div className="flex justify-center flex-wrap gap-x-8 gap-y-12 mb-12">
      {images.map((each) => (
        <img
          key={each.imageUrl}
          src={each.imageUrl}
          className="max-h-80 object-cover"
        />
      ))}
    </div>
  );
};
