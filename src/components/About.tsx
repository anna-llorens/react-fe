import { Link } from "react-router-dom";
import "../App.scss";

export default function About() {
  return (
    <div className="about-header">
      <nav className="back-home-link">
        <Link to="/">Back Home</Link>
      </nav>
      <h1 className="mt-1">About</h1>
      <div style={{ width: "300px" }} className="about-content">
        The idea of this App is to keep track of all the Frontend knowledge
        during my daily routine as a resource that I can easily come back and check, and hopefully make it public and useful for other devs. I will be adding sections with new features
        that I would like to check or study.
      </div>
    </div>
  );
}
