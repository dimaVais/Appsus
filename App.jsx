import { Home } from './pages/Home.jsx'
import { BookApp } from 'Apps/books/pages/BookApp.jsx'
import { KeepApp } from 'Apps/keep/pages/KeepApp.jsx'
import { MailApp } from 'Apps//mail/pages/MailApp.jsx'
import { NavBar } from 'general-cmps/NavBar.jsx'
import 'general-assets/general-css/layout.css'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export class App extends React.Component {

    state = {
        showMenu: false
    }

    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }

    render() {

        return (
            <Router>
                <div>
                    <header className={`app-header ${(this.state.showMenu) ? 'menu-open' : ''}`}>
                        <img className="logo" src="general-assets/img/logo.png" alt="logo" />
                        <img className="apps-menu-btn" onClick={this.toggleMenu} src="/general-assets/img/apps1.png" alt="" />

                        <NavBar  />
                    </header>
                    <main>
                        <Switch>
                            <Route component={BookApp} path="/book" />
                            <Route component={KeepApp} path="/keep" />
                            <Route component={MailApp} path="/mail/list" />
                            <Route component={Home} path="/" />
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
}

