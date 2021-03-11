import React from "react";
import BreedDetailsContainer from "../../containers/BreedDetailsContainer";
import "./BreedDetails.scss";

const BreedDetails = ({ breed }: { [key: string]: any }) => {
  return (
    <div className="breed-details">
      <h2 className="breed-details__name">{breed?.name}</h2>
      <div className="breed-details__wrapper">
        <div className="breed-details__picture">
          <img src={breed?.picture} alt="dog" />
        </div>
        <div className="breed-details__main">
          <div>
            <h3>Etimology</h3>
            <p className="breed_details__etimology">{breed?.etimology}</p>
          </div>
        </div>
        <div className="breed-details__more-info">
          <div>
            <h3>History</h3>
            <p className="breed_details__history">{breed?.history}</p>
          </div>
          <div>
            <h3>Features</h3>
            <p className="breed_details__features">{breed?.features}</p>
          </div>
          <div>
            <h3>Feeding</h3>
            <p className="breed_details__features">{breed?.feeding}</p>
          </div>
          <div>
            <h3>Temperament</h3>
            <p className="breed_details__features">{breed?.temperament}</p>
          </div>
          <div>
            <h3>Mortality</h3>
            <p className="breed_details__features">{breed?.mortaility}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedDetailsContainer(BreedDetails);
