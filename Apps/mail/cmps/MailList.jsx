import '../assets/css/mail-style.css'

export class MailList extends React.Component {

    state = {
        mails: []
    }


    render() {
        return (<div className='mail-list-container'>
            <ul>
                {this.state.mails.map(mail => {
                    return <li className="add-book-item">
                        <MailPreviwe mail={mail}/>
                    </li>
                })}
            </ul>
        </div>
        )
    }
}