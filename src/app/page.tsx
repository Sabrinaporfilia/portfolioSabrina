import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import './components/styles/home.scss'


export default function Home() {
  return (
    <main className='container'>

      <Header />

     <Experience/>

      <div className="infos">
        <h3>Languages</h3>
        <div className="languages-info">
          <span>🇺🇲 EN - Basic</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>

        </div>
        <h3>Education</h3>
        <div className="education-info">
          <span>🎓</span>
          <span>Universidade</span>
        </div>
        <div className="buttons">
          <div className="social">

          </div>

          <button>Contact Me</button>
        </div>
      </div>
    </main>
  )
}
