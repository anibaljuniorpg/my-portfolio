import { GitHubIcon } from "../icons/github";
import { Instagram } from "../icons/instagram";
import { Linkedin } from "../icons/linkedin";
import "./social-btns"

export default function SocialBtns(){
    return(
        <div className="social">
            <a href="">
                <GitHubIcon/>
            </a>
            <a href="">
                <Linkedin/>
            </a>
            <a href="">
                <Instagram/>
            </a>
        </div>
    )
}