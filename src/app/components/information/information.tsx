import { SectionTitle } from '../sectionTitle/sectionTitle'
import './information.scss'

export function Info() {

    return (

        <div className="infos">


            <SectionTitle text='Languages'/>
                <div className="languages-info">
                    <span>🇺🇲 EN - Basic</span>
                    
                    <span>🇧🇷 PT-BR - Native Speaker</span>

                </div>
                <SectionTitle text='Education'/>
                    <div className="education-info">
                        <span>🎓</span>
                        <span>Universidade</span>
                    </div>
                </div>
                )
}