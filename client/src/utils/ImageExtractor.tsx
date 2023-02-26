type Image = {
  src: string;
  attribute: string;
};

export const handleExtractImageUrlFromDB = (imageObj: Array<Image>) => {
  const imageUrls = imageObj.map((image: Image) => image.src);

  return imageUrls;
};
