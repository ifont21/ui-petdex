import React, { forwardRef, useImperativeHandle } from "react";
import { useRef } from "react";
import "./Upload.scss";
import PublishIcon from "@material-ui/icons/Publish";

export interface IUpload {
  onFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFileReset?: () => void;
  fileSelected?: string;
  loading?: boolean;
}

const Upload = (
  { onFileChange, onFileReset, fileSelected, loading }: IUpload | any,
  ref: any
) => {
  const inputRef = useRef() as any;

  const resetAttacthment = () => {
    (inputRef.current as HTMLInputElement).value = "";

    if (onFileReset) {
      onFileReset();
    }
  };

  useImperativeHandle(ref, () => ({
    resetAttatchment() {
      resetAttacthment();
    },
  }));

  const renderText = (fileSelected: File, isLoading: boolean) => {
    if (!isLoading) {
      return (
        <React.Fragment>
          {!fileSelected ? <PublishIcon /> : ""}
          <span>{fileSelected ? fileSelected : "Upload Picture"}</span>
        </React.Fragment>
      );
    }

    return "Checking ...";
  };

  return (
    <div className="upload">
      <input id="file" ref={inputRef} type="file" onChange={onFileChange} />
      <label htmlFor="file">{renderText(fileSelected, loading)}</label>
    </div>
  );
};

export default forwardRef(Upload);
