import { TextComponent } from "./TextComponent";
import './Components.scss';

export const WorkInprogress = () => (
  <TextComponent
    HtmlTag="h1"
    className="work-in-progress"
    value="🚧  Work in progress 🚧"
  />
);