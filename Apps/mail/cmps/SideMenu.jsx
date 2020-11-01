import '../assets/css/mail-style.css'
import { Compose } from './Compose.jsx'
import { Inbox } from './Inbox.jsx'
import { Starred } from './Starred.jsx'
import { Sent } from './Sent.jsx'
import { MailStatus } from 'MailStatus.jsx'

export class SideMenu extends React.Component {

    state = {
        isBurgerOpen: false
    }

    componentDidMount() {
        this.setState({ isBurgerOpen: false });
    }

    toggleHamburger = () => {
        this.setState({ isBurgerOpen: !this.state.isBurgerOpen });
    }

    render() {

        const menuClass = (this.state.isBurgerOpen) ? 'side-btn-container-open  flex-col' : 'side-btn-container flex-col';
        const barsClas = (this.state.isBurgerOpen) ? 'hidden' : 'bars fas fa-bars z-index';
        const closeClas = (this.state.isBurgerOpen) ? 'close fas fa-times' : 'hidden';

        return (

            <div className={'main-side-container'}>
                <div className="side-btn hamburger" onClick={this.toggleHamburger}>
                    <i className={barsClas}></i>
                    <i className={closeClas}></i>
                </div>
                <div className={menuClass}>
                    <Compose onOpenModal={this.props.onOpenModal} />
                    <Inbox />
                    {/* <Starred />
                    <Sent /> */}
                </div>

                <MailStatus />

            </div>
        )
    }

}