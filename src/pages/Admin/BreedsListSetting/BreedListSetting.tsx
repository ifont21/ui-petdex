import BreedListContainer from "../../../containers/BreedListContainer";
import BreedsGrid from "../../../features/BreedsGrid/BreedsGrid";
import "./BreedListSetting.scss";

export interface Props {
  [key: string]: any;
}

export interface IBreedListSettingProps extends Props {
  breeds: Breed[];
}

export interface Breed extends Props {
  _id: string;
  name: string;
  key: string;
  etimology: string;
  history: string;
  features: string;
  temperament: string;
  mortaility: string;
  caring: string;
  feeding: string;
  picture: string;
}

const BreedListSetting = ({ breeds }: IBreedListSettingProps) => {
  return (
    <div className="breed-list-setting">
      <h2 className="breed-list-setting__title">Current Breeds</h2>
      <BreedsGrid breeds={breeds} />
    </div>
  );
};

export default BreedListContainer(BreedListSetting);
