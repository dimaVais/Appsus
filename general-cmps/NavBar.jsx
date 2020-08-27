const { NavLink, withRouter } = ReactRouterDOM
import '../general-assets/general-css/navBar-style.css'

function _NavBar(props) {

    return (
        <nav>

            <div className="nav-bar-box">
                <NavLink exact className="navLink" activeClassName='active-nav' to="/">Nav-Home</NavLink><span> | </span>
                <NavLink className="navLink" activeClassName='active-nav' to="/Book">Nav-Books List</NavLink><span> | </span>
                <NavLink className="navLink" activeClassName='active-nav' to="/keep">Nav-Keep</NavLink>
                <NavLink className="navLink" activeClassName='active-nav' to="/mail/list">Nav-Mail</NavLink>
            </div>
        </nav>
    )
}
export const NavBar = withRouter(_NavBar)
