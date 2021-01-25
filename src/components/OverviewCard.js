import GrowthRate from "./GrowthRate";
export default function OverviewCard(props) {
  return (
    <article className="card overview-card">
      <div className="overview-card__title-and-icon-wrapper">
        <h3 className="overview-card__title">{props.title}</h3>
        <div className="overview-card__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            {props.icon}
          </svg>
        </div>
      </div>
      <div className="overview-card__number-and-growth-wrapper">
        <p className="overview-card_number">{props.statsNumber}</p>
        <GrowthRate
          unit="percent"
          growthNumber={props.growthNumber}
          growth={props.growth}
        />
      </div>
    </article>
  );
}
