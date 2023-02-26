import Axios from "axios";
import dotenv from "dotenv";

dotenv.config({
  path: "./config.env",
});

const handleExtractImageUrl = (imageObj) => {
  const imageUrls = imageObj.results.map((image, index) => ({
    src: image.urls.regular,
    attribute: `image-${index}`,
  }));

  return imageUrls;
};

const handleImageGenerator = async (imageQuery) => {
  const res = await Axios.get(
    `https://api.unsplash.com/search/photos?query=${imageQuery}&orientation=landscape&per_page=5?page=1`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.VITE_UNSPLASH_API}`,
      },
    }
  );
  const { data } = res;
  return handleExtractImageUrl(data);
};

export default handleImageGenerator;
