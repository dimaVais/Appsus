import '../assets/css/mail-style.css'

export function Compose(props) {


    return (
        <button className='compose-btn' onClick={props.onOpenModal}> COMPOSE</button>
    )
}