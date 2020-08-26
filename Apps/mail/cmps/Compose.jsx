import '../assets/css/mail-style.css'

export function Compose(props) {


    return (
        <button calssName='compose-btn' onClick={props.onOpenModal}> COMPOSE</button>
    )
}