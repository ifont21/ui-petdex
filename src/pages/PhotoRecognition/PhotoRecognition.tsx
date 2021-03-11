import ImagePreview from "../../components/ImagePreview/ImagePreview";
import StyledButton from "../../components/StyledButton/StyledButton";
import BreedPrediction from "../../features/BreedPrediction/BreedPrediction";
import UploadPicture from "../../features/UploadPicture/UploadPicture";
import PhotoRecognitionProvider from "../../providers/photoRecognitionProvider/PhotoRecognitionProvider";
import "./PhotoRecognition.scss";

const PhotoRecognition = () => {
  return (
    <PhotoRecognitionProvider>
      <div className="photo-recognition">
        <ImagePreview name="Doggy" />
        <div className="divider"></div>
        <UploadPicture />
      </div>

      <BreedPrediction />
    </PhotoRecognitionProvider>
  );
};

export default PhotoRecognition;
