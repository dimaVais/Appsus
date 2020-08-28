const { NavLink, withRouter } = ReactRouterDOM
import '../general-assets/general-css/navBar-style.css'

function _NavBar() {



    return (
        <nav>

            <div className="main-nav">
                <NavLink exact className="navLink"  to="/"><img className="nav-bar-home-img" src="../general-assets/img/home2.png" alt="Home" /></NavLink>
                <NavLink className="navLink"  to="/mail/list"><img className="nav-bar-mail-img" src="../general-assets/img/mail1.png" alt="Mail" /></NavLink>
                <NavLink className="navLink"  to="/keep"><img className="nav-bar-keep-img" src="../general-assets/img/keep.png" alt="Keep" /></NavLink>
                <NavLink className="navLink"  to="/Book"><img className="nav-bar-book-img" src="../general-assets/img/book.png" alt="Book" /></NavLink>
            </div>
        </nav>
    )
}
export const NavBar = withRouter(_NavBar)
