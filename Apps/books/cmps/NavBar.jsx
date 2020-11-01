const { NavLink, withRouter } = ReactRouterDOM

function _NavBar(props) {

    return (
        <nav>
            <h1 className="page-header">Welcome to miss-book </h1>
            <div>
                <NavLink exact className="navLink" activeClassName='active-nav' to="/">Home</NavLink><span> | </span>
                <NavLink className="navLink" activeClassName='active-nav' to="/Book">Books List</NavLink><span> | </span>
                <NavLink className="navLink" activeClassName='active-nav' to="/About">About</NavLink>
            </div>
        </nav>
    )
}
export const NavBar = withRouter(_NavBar)