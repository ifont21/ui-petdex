import { useContext } from "react";
import { PhotoRecognitionContext } from "../../providers/photoRecognitionProvider/PhotoRecognitionProvider";
import "./ImagePreview.scss";
import { Skeleton } from "@material-ui/lab";
import React from "react";

export interface Preview {
  imageSrc?: string;
  name?: string;
}

const ImagePreview = ({ name }: Preview) => {
  const { image, loading } = useContext(PhotoRecognitionContext);

  const renderImg = (image?: string, name?: string, loading?: boolean) => {
    if (!loading) {
      return (
        <React.Fragment>
          {!image ? (
            <div className="image-preview__no-image">No Doggy</div>
          ) : (
            <img src={image} alt={name} />
          )}
        </React.Fragment>
      );
    }

    return (
      <Skeleton variant="rect" animation="wave" width="100%" height="100%" />
    );
  };

  return <div className="image-preview">{renderImg(image, name, loading)}</div>;
};

export default ImagePreview;
