import me from './../../assets/me.jpg'
import Image from 'next/image'
import './header.scss'

export function Header() {
    return (
        <>
            <div className="header">

                <div>
                    <h1> Hi, i'm Sabrina!!</h1>
                    <h2>Developer Web</h2>
                </div>

                <Image
                    src="/me.jpg"
                    alt="Photo Sabrina"
                    width={325}
                    height={290}
                    priority
                />
                
            </div>
        </>
    )
} 