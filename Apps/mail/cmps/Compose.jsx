import '../assets/css/mail-style.css'

export function Compose(props) {


    return (
        <button className='side-btn compose-btn' onClick={props.onOpenModal}> <span>COMPOSE</span></button>
    )
}