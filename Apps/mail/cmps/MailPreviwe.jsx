
export class MailRreviwe extends React.Component {


    state = {
        mail = null
    }

    render() {

        return (

            <div className="msg-container">
                <input type="checkbox" />
                <input type="radio" />
                <p className="mail-from">{this.props.mail.from}</p>
                <p className="mail-title">{this.props.mail.subject}</p>
                <p className="mail-body">{this.props.mail.body}</p>
                <div>
                    <button className="mail-unread"></button>
                    <button className="mail-delete"></button>
                </div>
            </div>
        )
    }


}