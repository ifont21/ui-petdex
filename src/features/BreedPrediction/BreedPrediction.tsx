import React, { useContext } from "react";
import StyledButton from "../../components/StyledButton/StyledButton";
import { PhotoRecognitionContext } from "../../providers/photoRecognitionProvider/PhotoRecognitionProvider";
import "./BreedPrediction.scss";

const BreedPrediction = () => {
  const { predictionLabel: breed, id } = useContext(PhotoRecognitionContext);

  console.log("My Id is ", id);

  return (
    <React.Fragment>
      {breed ? (
        <div className="breed">
          <div>
            <h2>Let Me Guess ...</h2>
            <span>
              This is a <strong>{breed}</strong>
            </span>
            <StyledButton link={`/pets/${id}`} />
          </div>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default BreedPrediction;
