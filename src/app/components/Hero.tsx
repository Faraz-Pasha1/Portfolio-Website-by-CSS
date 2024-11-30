import Link from "next/link";
import Image from "next/image";
import Myskills from "../myskills/page";
import Projects from "../projects/page";
import About from "../about/page";
import Contact from "../contact/page";

export default function Hero () {
    return (
        <div className = "introSection">
                        
            {/* INTRO DESCRIPTION SECTION */}

            <div className = "heroTitleDescription">
                <p className = "heroTitle">FRONT END DEVELOPER</p>
                <p className = "heroDescription1">
                Welcome to my portfolio! I am a passionate Front-End Developer with expertise in building 
                sleek, responsive, and user-friendly web experiences. With a strong foundation in <span className = "descSpancolor">HTML, CSS, 
                Tailwind , NextJS , Typescript.</span> I craft visually stunning and performant layouts
                </p> 
                <p className = "heroDescription2">
                Feel free to explore and get in touch—lets build something amazing together!
                </p>
                <Link href = {"/contact"}><button className = "introButton">Get in Touch !</button></Link>
            </div>
            
            {/* INTRO IMAGE SECTION */}

            <div className = "introImage">
            <Image src="/images/introImage.png" alt="IntroImage" width={1300} height={300}/>
            </div> <br/>

            <div>
                <Myskills/>
            </div> 
            <div>
                <Projects/>
            </div>
            <div>
                <About/>
            </div>
            <div>
                <Contact/>
            </div>
            
            
        </div>
        
    )
}