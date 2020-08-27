import '../../../general-assets/general-css/helpers.css'
import { KeepService } from '../services/keep-service.js'
import { LongTxt } from '../../../general-cmps/LongTxt.jsx'
// import {green} from '../assets/img/green.jpg'




export class NoteTxt extends React.Component {

    state = {
        note: this.props.note,
        txtValue: ''

    }

    onTxtChange = (ev) => {
        ev.preventDefault()
        KeepService.changeText(this.props.note, ev.target.value)
        this.setState({ txtValue: ev.target.value })
    }


    render() {

        return (

            <div className={`note-txt-box bgc-${this.props.note.backgroundColor}`}>
                <div className="note-txt-value">
                    <textarea value={this.props.note.info.txt} className="note-txt-value" onChange={this.onTxtChange} type="text" />
                </div>
                <div className="note-btns-box">
                    <button onClick={() => { this.props.onRemove(this.props.note.id) }}>remove</button>
                    {/* <button onClick={() => { this.props.onSetBackgroundColor(this.props.note, 'red')}} > <img src={green} alt=""/> red</button> */}
                    <button onClick={() => { this.props.onSetBackgroundColor(this.props.note, 'blue') }} >blue</button>
                    <button onClick={() => { this.props.onSetBackgroundColor(this.props.note, 'green') }} >green</button>
                    <button onClick={() => { this.props.onSetBackgroundColor(this.props.note, 'purple') }} >purple</button>

                </div>
            </div>
        )

    }

}

//