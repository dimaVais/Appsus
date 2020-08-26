import 'assets/css/mail-style.css'
import { SideMenu } from '../cmps/SideMenu.jsx'
import { MailList } from '../cmps/MailList.jsx'

export class MailApp extends React.Component {


    state = {

    }

    render() {
        console.log('render in home')
        return (
            <section>
                <h2 className="mail-header">
                 Mail 
                </h2>
                <div className="mailapp-container flex-row">
                    <SideMenu/>
                    <MailList/>
                </div>
            </section>
        )
    }
}