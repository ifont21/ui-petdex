import { Props } from "../../pages/Admin/BreedsListSetting/BreedListSetting";
import "./SubmitButton.scss";

const SubmitButton = ({ value, disabled }: Props) => {
  return (
    <input
      type="submit"
      className="submit-button"
      value={value}
      disabled={disabled}
    />
  );
};

export default SubmitButton;
