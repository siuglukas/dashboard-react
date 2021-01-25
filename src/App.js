import "./index.css";
import Header from "./components/Header";
import DetailsCard from "./components/DetailsCard";
import OverviewCard from "./components/OverviewCard";
import { nanoid } from "nanoid";
function App(props) {
  const detailsCards = [
    {
      socialMedia: "facebook",
      mediaIcon: props.data.facebook,
      cardUsername: "@nathanf",
      followersNumber: "1987",
      growth: "positive",
      growthNumber: 15,
    },
    {
      socialMedia: "twitter",
      mediaIcon: props.data.twitter,
      cardUsername: "@nathanf",
      followersNumber: "1044",
      growth: "positive",
      growthNumber: 99,
    },
    {
      socialMedia: "instagram",
      mediaIcon: props.data.instagram,
      cardUsername: "@realnathanf",
      followersNumber: "11k",
      growth: "positive",
      growthNumber: 1099,
    },
    {
      socialMedia: "facebook",
      mediaIcon: props.data.youtube,
      cardUsername: "@Nathan F.",
      followersNumber: "1987",
      growth: "negative",
      growthNumber: 144,
    },
  ];

  const overviewCards = [
    {
      title: "Page Views",
      icon: props.data.facebook,
      statsNumber: 87,
      growthNumber: 3,
      growth: "positive",
    },
    {
      title: "Likes",
      icon: props.data.facebook,
      statsNumber: 52,
      growthNumber: 2,
      growth: "negative",
    },
    {
      title: "Likes",
      icon: props.data.instagram,
      statsNumber: 5462,
      growthNumber: 2257,
      growth: "positive",
    },
    {
      title: "Page Views",
      icon: props.data.instagram,
      statsNumber: "52k",
      growthNumber: 1375,
      growth: "positive",
    },
    {
      title: "Page Views",
      icon: props.data.twitter,
      statsNumber: 117,
      growthNumber: 3,
      growth: "positive",
    },
    {
      title: "Page Views",
      icon: props.data.twitter,
      statsNumber: 507,
      growthNumber: 553,
      growth: "positive",
    },
    {
      title: "Page Views",
      icon: props.data.youtube,
      statsNumber: 107,
      growthNumber: 19,
      growth: "negative",
    },
    {
      title: "Page Views",
      icon: props.data.youtube,
      statsNumber: 1407,
      growthNumber: 12,
      growth: "negative",
    },
  ];

  const renderDetailCards = detailsCards.map((card) => {
    return (
      <DetailsCard
        key={nanoid()}
        socialMedia={card.socialMedia}
        cardUsername={card.cardUsername}
        mediaIcon={card.mediaIcon}
        followersNumber={card.followersNumber}
        growth={card.growth}
        growthNumber={card.growthNumber}
      />
    );
  });

  const renderOverviewCards = overviewCards.map((card) => {
    return (
      <OverviewCard
        key={nanoid()}
        title={card.title}
        icon={card.icon}
        statsNumber={card.statsNumber}
        growthNumber={card.growthNumber}
        growth={card.growth}
      />
    );
  });

  return (
    <div className="page">
      <Header />
      <section className="overview-top">{renderDetailCards}</section>
      <section className="overview-bottom">
        <h2 className="overview-bottom__heading">Overview - Today</h2>
        <div className="overview-bottom__cards-wrapper">
          {renderOverviewCards}
        </div>
      </section>
    </div>
  );
}

export default App;
