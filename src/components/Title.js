const Title = (props) => {
  const { title, text } = props;
  return (
    <>
      <div className="section-title">
        <h2>
          {text} <span>{title}</span>
        </h2>
      </div>
    </>
  );
};
export default Title;
