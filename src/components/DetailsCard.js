import GrowthRate from "./GrowthRate";

function DetailsCard(props) {
  return (
    <article className={"card details-card details-card--" + props.socialMedia}>
      <div className="details-card__icon-and-username-wrapper">
        <div className="details-card__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            {props.mediaIcon}
          </svg>
        </div>

        <div className="details-card__username">{props.cardUsername}</div>
      </div>
      <p className="details-card__followers-number">{props.followersNumber}</p>
      <p className="details-card__followers-text">FOLLOWERS</p>
      <GrowthRate growthNumber={props.growthNumber} growth={props.growth} />
    </article>
  );
}

export default DetailsCard;
