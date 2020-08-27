const { NavLink, withRouter } = ReactRouterDOM
import '../general-assets/general-css/navBar-style.css'

function _NavBar(props) {

    return (
        <nav>

            <div className="nav-bar-box">
                <NavLink exact className="navLink" activeClassName='active-nav' to="/"><img className="nav-bar-home-img" src="../general-assets/img/home2.png" alt="home"/></NavLink>
                <NavLink className="navLink" activeClassName='active-nav' to="/mail/list"><img className="nav-bar-mail-img" src="../general-assets/img/mail3.jpg" alt="mail"/></NavLink>
                <NavLink className="navLink" activeClassName='active-nav' to="/keep">MissKeep</NavLink>
                <NavLink className="navLink" activeClassName='active-nav' to="/Book">MissBooks</NavLink>
            </div>
        </nav>
    )
}
export const NavBar = withRouter(_NavBar)
