
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="nav">
            <div className="navLeft">
                <i className="navIcon fab fa-facebook-square"></i>
                <i className="navIcon fab fa-twitter-square"></i>
                <i className="navIcon fab fa-pinterest-square"></i>
                <i className="navIcon fab fa-instagram-square"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem">HOME</li>
                    <li className="navListItem">ABOUT</li>
                    <li className="navListItem">CONTACT</li>
                    <li className="navListItem">TRIPS</li>
                    <li className="navListItem">REVIEWS</li>
                </ul>
            </div>
            <div className="navRight">
                <img className="navImg" src="https://media.istockphoto.com/photos/kavala-greece-picture-id1077294562?k=20&m=1077294562&s=612x612&w=0&h=BOO65vSqGyzTGBF0kgXhbp5IVxZq1qIgyy2QYVhQMcQ=" alt=""></img>
            </div>
        </div>
    )
}
