import { createContext, useState } from "react";
import axios from "axios";

interface PhotoContext {
  predictionLabel?: string;
  image?: string;
  loading?: boolean;
  id?: string | null;
  uploadPictureAsync?: (
    data: FormData,
    updateValues: (image: string, label: string) => void
  ) => void;
  setPrediction?: any;
  setImage?: any;
}

export const PhotoRecognitionContext = createContext<PhotoContext>({
  predictionLabel: "",
  image: "",
  loading: false,
  id: null,
});

const PhotoRecognitionProvider = ({ children }: { [key: string]: any }) => {
  const [image, setImage] = useState<string>();
  const [predictionLabel, setPrediction] = useState();
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);

  const uploadPictureAsync = (
    data: FormData,
    updateValues: (image: string, label: string) => void
  ) => {
    setLoading(true);
    axios
      .post(
        "http://ec2-18-205-161-174.compute-1.amazonaws.com:8080/api/upload",
        data
      )
      .then((response) => {
        const data = response.data;
        const { image, key, _id } = data;
        console.log({ image, key, _id });
        updateValues(image, key);
        setLoading(false);
        setId(_id);
      })
      .catch((err) => {
        console.log("some error has ocurred", err);
        setLoading(false);
      });
  };

  return (
    <PhotoRecognitionContext.Provider
      value={{
        image,
        id,
        predictionLabel,
        uploadPictureAsync,
        setPrediction,
        setImage,
        loading,
      }}
    >
      {children}
    </PhotoRecognitionContext.Provider>
  );
};

export default PhotoRecognitionProvider;
