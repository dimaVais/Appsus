import { mailService } from '../services/mail-service.js'

export function DeleteMailBtn(props) {

    function onRemoveMail() {
        mailService.removeMail(props.mailId);
        if (props.loadMails) props.loadMails();
    }

    return (
        <button className="mail-delete" onClick={() => { onRemoveMail() }}>
            <i class="fas fa-trash"></i></button>
    )
}