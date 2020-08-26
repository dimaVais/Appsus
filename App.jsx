import {Home} from './pages/Home.jsx'
import {BookApp} from './pages/BookApp.jsx'
import {KeepApp} from './pages/KeepApp.jsx'
import {MailApp} from './pages/MailApp.jsx'
import {NavBar} from 'general-cmps/NavBar.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export class App extends React.Component {

    render() {

        return (
            <Router>
                <div>
                    <header>
                        <h1>Lets Dance</h1>
                        <NavBar />
                    </header>
                    <main>
                        <Switch>
                            <Route component={BookApp} path="/book" />
                            <Route component={KeepApp} path="/keep" />
                            <Route component={MailApp} path="/mail" />
                            <Route component={Home} path="/" />
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
}

