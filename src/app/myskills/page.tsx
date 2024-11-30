import Image from "next/image"

export default function Myskills () {
    return (
        <div className="myskillsContainer">
            <div>
                <h1 className="titleMyskills">MY SKILLS & EXPERTISE</h1>
            </div>
            <br/>

            <div className = "fristSkill">
                <div className="firstskillImage"> <Image src = "/images/HTML_CSS.png" alt = "firstskillimage" width= {320} height = {160}/></div>
                <p className = "firstskillDescription">
                    Proficient in crafting clean, responsive, and user-friendly web designs using modern HTML and CSS 
                    techniques. Experienced in creating semantic structures, implementing animations, and ensuring 
                    cross-browser compatibility to deliver visually appealing and functional interfaces.
                </p>
            </div>

            <div className = "secondSkill">
            <div className="firstskillImage"> <Image src = "/images/NextJS TailwindCSS.png" alt = "secondskillimage" width= {320} height = {160}/></div>
                <p className = "firstskillDescription">
                Skilled in building high-performance, scalable web applications using Next.js and Tailwind CSS. 
                Proficient in creating responsive, SEO-friendly, and visually appealing designs with efficient,
                 reusable components and modern development practices.
                </p>
            </div>

            <div className = "thirdSkill">
            <div className="thirdskillImage"> <Image src = "/images/typescript.png" alt = "thirdskillimage" width= {170} height = {50}/></div>
                <p className = "thirdskillDescription">
                    Proficient in crafting clean, responsive, and user-friendly web designs using modern HTML and CSS 
                    techniques. Experienced in creating semantic structures, implementing animations, and ensuring 
                    cross-browser compatibility to deliver visually appealing and functional interfaces.
                </p>
            </div>
            <br/>
        </div> 
    )
}