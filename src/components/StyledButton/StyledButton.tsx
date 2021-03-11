import "./StyledButton.scss";
import { Link } from "react-router-dom";

const StyledButton = ({ link }: { [key: string]: any }) => {
  return (
    <div className="styled-button">
      <Link to={link}>Find Out More</Link>
    </div>
  );
};

export default StyledButton;
