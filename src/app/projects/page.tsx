import Image from "next/image";
import Link from "next/link";


export default function Projects() {
    return (
        <div className = "projectContainer">
            <h2 className = "titleMyprojects">MY PROJECTS</h2>
            
            <div className = "projectOne">                
                <div className = "projectoneImagecontainer">
                    <Image src="/images/project 1.png" className = "projectoneImagesetting"alt="projectoneimage" width={399} height={200}/>
                </div>
                <p className = "projectoneDescription">
                    I have made a project of ATM Machine at user end by using Typescript. 
                    In this project you see some features like Widthdrawal , Balance , Trasnfer etc.
                </p>
                <div>
                    <Link href = {"https://github.com/Faraz-Pasha1/muhammad-faraz-atm-machine-for-all.git"}><button className="projectoneButton">
                    Click Me for link..
                    </button></Link>
                </div>
            </div>

            <div className = "projectTwo">                
                <div className = "projecttwoImagecontainer">
                    <Image src="/images/project 2.png" className = "projecttwoImagesetting"alt="projecttwoimage" width={399} height={200}/>
                </div>
                <p className = "projecttwoDescription">
                    I have made a project of ATM Machine at user end by using Typescript. 
                    In this project you see some features like Widthdrawal , Balance , Trasnfer etc.
                </p>
                <div>
                    <Link href = {"https://github.com/Faraz-Pasha1/Faraz-Number-Guessing-Game.git"}><button className="projecttwoButton">
                    Click Me for link..
                    </button></Link>
                </div>
            </div>

            <div className = "projectThree">                
                <div className = "projectthreeImagecontainer">
                    <Image src="/images/project 3.png" className = "projectthreeImagesetting"alt="projectthreeimage" width={399} height={200}/>
                </div>
                <p className = "projectthreeDescription">
                    I have made a project of ATM Machine at user end by using Typescript. 
                    In this project you see some features like Widthdrawal , Balance , Trasnfer etc.
                </p>
                <div>
                    <Link href = {"https://github.com/Faraz-Pasha1/Faraz-Currency-Exchange-Center.git"}><button className="projectthreeButton">
                    Click Me for link..
                    </button></Link>
                </div>
            </div>

            <div className = "projectFour">                
                <div className = "projectfourImagecontainer">
                    <Image src="/images/project 4.png" className = "projectfourImagesetting"alt="projectfourimage" width={399} height={200}/>
                </div>
                <p className = "projectfourDescription">
                    I have made a project of ATM Machine at user end by using Typescript. 
                    In this project you see some features like Widthdrawal , Balance , Trasnfer etc.
                </p>
                <div>
                    <Link href = {"https://github.com/Faraz-Pasha1/Faraz-Pasha-Word-Counter.git"}><button className="projectfourButton">
                    Click Me for link..
                    </button></Link>
                </div>
            </div>

            <div className = "projectFive">                
                <div className = "projectfiveImagecontainer">
                    <Image src="/images/project 5.png" className = "projectfiveImagesetting"alt="projectfiveimage" width={399} height={200}/>
                </div>
                <p className = "projectfiveDescription">
                    I have made a project of ATM Machine at user end by using Typescript. 
                    In this project you see some features like Widthdrawal , Balance , Trasnfer etc.
                </p>
                <div>
                    <Link href = {"https://github.com/Faraz-Pasha1/Faraz-Pasha-Word-Counter.git"}><button className="projectfiveButton">
                    Click Me for link..
                    </button></Link>
                </div>
            </div>

            <div className = "projectSix">                
                <div className = "projectsixImagecontainer">
                    <Image src="/images/project 5.png" className = "projectsixImagesetting"alt="projectsiximage" width={399} height={200}/>
                </div>
                <p className = "projectsixDescription">
                    I have made a project of ATM Machine at user end by using Typescript. 
                    In this project you see some features like Widthdrawal , Balance , Trasnfer etc.
                </p>
                <div>
                    <Link href = {"https://github.com/Faraz-Pasha1/Faraz-Pasha-Word-Counter.git"}><button className="projectsixButton">
                    Click Me for link..
                    </button></Link>
                </div>
            </div>




            


        </div>
    )
}