import Image from "next/image"


export default function About () {
    return (
        <div className = "aboutContainer">
            <h5 className = "titleAbout">About Me</h5>
            <p className = "descriptionofAbout">
                I am a Front End Developer and solve your problem in web applications by using 
                Typescript , HTML , CSS , NextJS , Tailwind. Also use some AI tools for interractive desinging. 
                I have a an experience of expert level and you can work with me because i give quality work with 
                satsification and also give guidance for your web applications. 
            </p>

            <Image className = "aboutImage"src="/images/aboutimage.png" alt="AboutImage" width={550} height={400}/>
        </div>
    )
}