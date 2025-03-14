import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";

import ".styles/home.scss";
import { Info } from "./components/infomation/information";
import SocialBtns from "./components/social-btn/social-btns";

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <Info/>
      <div className="buttons">
        <SocialBtns/>
        <a className="bts-primary">contate-me</a>
      </div>
        
    </main>   
  );
}
