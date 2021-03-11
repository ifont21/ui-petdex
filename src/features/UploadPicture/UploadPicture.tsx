import React, { useContext, useRef, useState } from "react";
import Upload from "../../components/Upload/Upload";
import { PhotoRecognitionContext } from "../../providers/photoRecognitionProvider/PhotoRecognitionProvider";
import "./UploadPicture.scss";

const UploadPicture = () => {
  const [file, setFile] = useState<File | null>(null);
  const { uploadPictureAsync, setPrediction, setImage, loading } = useContext(
    PhotoRecognitionContext
  );

  const uploadRef = useRef();

  const updateValues = (image: string, label: string) => {
    setImage(image);
    setPrediction(label);
    (uploadRef?.current as any)?.resetAttatchment();
  };

  const onFileUpload = (file: File) => {
    const payload = new FormData();
    payload.append("filename", file as Blob, file?.name);

    if (!uploadPictureAsync) return;

    uploadPictureAsync(payload, updateValues);
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = event?.target?.files![0];
    onFileUpload(newFile);
    setFile(newFile);
  };

  const onFileReset = () => {
    setFile(null);
  };

  return (
    <div className="upload-picture__wrapper">
      <div className="upload-picture__about">
        <p>
          Don't you recognize the breed exaclty of any Dog you've seen and you
          want to know more about it ?
        </p>
        <p>Let's Figure it out</p>
      </div>

      <Upload
        ref={uploadRef}
        onFileChange={onFileChange}
        onFileReset={onFileReset}
        fileSelected={file?.name}
        loading={loading}
      />
    </div>
  );
};

export default UploadPicture;
