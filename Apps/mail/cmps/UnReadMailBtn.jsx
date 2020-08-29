import { mailService } from '../services/mail-service.js'

export function UnReadMailBtn(props) {

    function onUpdateMailUnRead() {
        mailService.updateMailNotIsRead(props.mailId);
        if (props.loadMails) props.loadMails();
    }

    return (
        <button className="mail-unread" onClick={(ev) => { ev.stopPropagation(); onUpdateMailUnRead() }}>
            <i className="fas fa-envelope-open"></i></button>
    )
}