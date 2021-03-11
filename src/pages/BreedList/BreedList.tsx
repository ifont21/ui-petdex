import BreedListContainer from "../../containers/BreedListContainer";
import "./BreedList.scss";

const BreedList = ({ breeds }: { [key: string]: any }) => {
  return (
    <div className="breed-list">
      {breeds?.map((breed: any) => {
        return (
          <div className="breed-list__item" key={breed?._id}>
            {breed?.key}
          </div>
        );
      })}
    </div>
  );
};

export default BreedListContainer(BreedList);
