import '../general-assets/general-css/home-style.css'


const { NavLink } = ReactRouterDOM

export class Home extends React.Component {

    // state = {

    // }

    render() {
        return (
            <section>
                <NavLink to="/mail/list">Mail</NavLink>
                <NavLink to="/keep">Keep</NavLink>
                <NavLink to="/book">Book</NavLink>

                <h2 className="home-header">
                 home  
                </h2>
            </section>
        )
    }
}


