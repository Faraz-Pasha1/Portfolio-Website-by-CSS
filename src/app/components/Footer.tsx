import Link from "next/link"

export default function Footer () {
    return (
        <div className = "footerContainer">
            <div className = "footerAddress">
                <p className = "footerContactdetails"><span className = "footerContactspan">Address: </span> Shahrah e Faisal, Karachi, Sindh Pakistan</p>
                <p className = "footerContactdetails"><span className = "footerContactspan">Contact # </span>+923322457913</p>
            </div>

            <div className = "footerMenucontainer">
            <ul className = "footerMenu">
                <Link href = {"/"}><li className = "footerMenuList">Home</li></Link>
                <Link href = {"/projects"}><li className = "footerMenuList">Projects</li></Link>
                <Link href = {"/about"}><li className = "footerMenuList">About</li></Link>                
                <Link href = {"/contact"}><li className = "footerMenuList">Contact</li></Link>
            </ul>
            </div>

            <div className = "socialmediaContainer">
            <ul className = "footerMenu">
                <Link href = {"/"}><li className = "footerMenuList">Facebook</li></Link>
                <Link href = {"/projects"}><li className = "footerMenuList">Instagram</li></Link>
                <Link href = {"/about"}><li className = "footerMenuList">Whatsapp</li></Link>                
                <Link href = {"/contact"}><li className = "footerMenuList">LinkedIn</li></Link>
            </ul>
            </div>

            <div className = "footerCopyrightcontainer">
                <p className = "copyRightlineparagraph">@ Muhammad Faraz 2024. All Copyright Reserved</p>
            </div>

        </div>
    )
}