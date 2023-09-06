import { GitHubIcon } from "../icon/github-icon";
import { LinkedInIcon } from "../icon/linkedin-icon";
import './social-btns.scss'

interface SocialBtns {

}
export default function SocialBtns(){
    return(
        <div className="social">

            <a href="https://www.linkedin.com/in/sabrinaporfilia/" target="_blank">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/Sabrinaporfilia" target="_blank">
                <GitHubIcon/>
            </a>
          </div>
    )
}