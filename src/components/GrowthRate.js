function GrowthRate(props) {
  const arrowUp = <path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z" />;
  const arrowDown = (
    <path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z" />
  );
  return (
    <div className={"stats " + (props.unit ? "stats--positioned" : "")}>
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
        {props.growth === "positive" ? arrowUp : arrowDown}
      </svg>
      <p
        className={
          "stats__growth " +
          (props.growth !== "positive" ? "stats__growth--negative " : "")
        }
      >
        {props.growthNumber}
        {props.unit ? "%" : " Today"}
      </p>
    </div>
  );
}

export default GrowthRate;
