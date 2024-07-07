import BackArrowIcon from "@/assets/icons/left-arrow.svg?react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ data}) => {
  return (
    <Link to="/" className="breadcrumb container">
      <BackArrowIcon />
      {data && data.map((item) => (
        <p className="breadcrumb--text" key={item}>{item}</p>
      ))}
    </Link>
  );
};

export default Breadcrumb;
