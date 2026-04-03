import img from "../assets/photo-3.png";
export default function Services() {
  return (
  <div className="page">
    <h1>My Services</h1>
    <img src={img} alt="services" />

    <div className="card">
    <h3>Sport Insight & Predictions</h3>
    <p>
      Helping you to win offen and frequently with good predictions, experience & insights
    </p>
    </div>

    <div className="card">
    <h3>Betting Analysis</h3>
    <p>
      Accurate predictions and insights that enhances multiple winnings 
    </p>
    </div>

    <div className="card">
      <h3>staking skills</h3>
      always go for the best sport options and alternatives
    </div>
    </div>

  );
}