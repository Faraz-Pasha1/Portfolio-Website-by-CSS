import Link from "next/link"


export default function Header () {
    return (
        <div className= "headerSection">
            <p className = "headerTitle">Muhammad Faraz</p>
            <ul className = "headerMenu">
                <Link href = {"/"}><li className = "menuList">Home</li></Link>
                <Link href = {"/projects"}><li className = "menuList">Projects</li></Link>
                <Link href = {"/about"}><li className = "menuList">About</li></Link>                
                <Link href = {"/contact"}><li className = "menuList">Contact</li></Link>
            </ul>

        </div>
    )
}