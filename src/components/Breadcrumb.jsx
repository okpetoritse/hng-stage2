import BackArrowIcon from "@/assets/icons/left-arrow.svg?react";

const Breadcrumb = ({ data}) => {
  return (
    <section className="breadcrumb container">
      <BackArrowIcon />
      {data && data.map((item) => (
        <p className="breadcrumb--text" key={item}>{item}</p>
      ))}
    </section>
  );
};

export default Breadcrumb;
