import { SectionTitle } from "../sectionTitle/sectionTitle"
import './experience.scss'
import Image from 'next/image'
interface ExperienceProps {

}

export function Experience() {
    return (
        <>

            <div className="experience">
                <SectionTitle text="Experience" />
                <p>texto</p>

                <div className="experience-time">

                    <div className="experience-language">
                        <Image
                            src="/java.png"
                            alt="Java Logo"
                            width={50}
                            height={50}
                            priority
                        />

                        <div className="experience-unit">
                            <div className="experience-measure measure-0">
                            <span>6 months</span>
                            </div>
                        </div>
                    </div>



                    <div className="experience-language">
                        <Image
                            src="/react.png"
                            alt="React Logo"
                            width={50}
                            height={50}
                            priority
                        />
                        <div className="experience-unit">
                            <div className="experience-measure measure-0">
                            <span>6 months</span>
                            </div>
                        </div>
                    </div>



                    <div className="experience-language ">
                        <Image
                            src="/ts.png"
                            alt="Typescript Logo"
                            width={50}
                            height={50}
                            priority
                        />
                        <div className="experience-unit">
                            <div className="experience-measure measure-0">
                            <span>6 months</span>
                            </div>
                        </div>
                    </div>



                    <div className="experience-language">
                        <Image
                            src="/js.png"
                            alt="JavaScript Logo"
                            width={50}
                            height={50}
                            priority
                        />

                        <div className="experience-unit">
                            <div className="experience-measure measure-0">
                                <span>6 months</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}