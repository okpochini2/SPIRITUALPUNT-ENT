import Stats from "../components/Stats";
import { Link } from "react-router-dom";

 export default function Home() {
  return (
  <div className="page">
  <h1>Welcome to Spiritualpunt Enterprise</h1>
  <p>
    Your trusted platform for sporty sport predictions & analysis.
  </p>

    <Link to="services">
    <button className="btn">Get Started</button>
    </Link>
    
  <Stats />
  </div>
  );
 }