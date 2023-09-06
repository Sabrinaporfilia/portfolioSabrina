import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";
import Image from 'next/image'
import './components/styles/home.scss';
import { EmailIcon } from "./components/icon/email-icon";
import SocialBtns from "./components/social-btns/social-btns";



export default function Home() {
  return (
    <main className='container'>

      <Header />

      <Experience />

      <Info />

        <div className="buttons">
          
          <SocialBtns/>

          <a className="btn-primary" href="mailto:sabrinaporfilia@gmail.com">
            Contact Me
          <EmailIcon/>
            </a>
        </div>
     
    </main>
  )
}
