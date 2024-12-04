import { Link } from "react-router-dom";
import Icon_Back from "../assets/leftArrow.png";

interface GoToProps {
  path: string; // Define the expected prop type
}

const GoTo: React.FC<GoToProps> = ({ path }) => {
  return (
    <Link to={path}>
      <img
        src={Icon_Back}
        alt="<"
        className="position-absolute rounded-circle shadow"
        style={{
          cursor: "pointer",
          top: "1rem",
          left: "1rem",
          height: "3rem",
        }}
      />
    </Link>
  );
};

export default GoTo;
