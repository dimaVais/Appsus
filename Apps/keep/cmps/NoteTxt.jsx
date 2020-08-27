import '../../../general-assets/general-css/helpers.css'
import { KeepService } from '../services/keep-service.js'
// import { LongTxt } from '../../../general-cmps/LongTxt.jsx'




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
                    <textarea value={this.props.note.info.txt} className="note-txt-value-txtarea" onChange={this.onTxtChange} type="text" />
                </div>
                <div className="note-btns-box">
                    <i onClick={() => this.props.onSetPinnedNote(this.props.note)} className="fas fa-thumbtack fa-2x pin-btn"></i>
                    <i className="fas fa-trash fa-2x remove-btn" onClick={() => { this.props.onRemove(this.props.note.id) }}></i>
                    <i onClick={() => { this.props.onSetBackgroundColor(this.props.note, 'red') }} className="fas fa-circle fa-2x red-circle color-btn"></i>
                    <i onClick={() => { this.props.onSetBackgroundColor(this.props.note, 'blue') }} className="fas fa-circle fa-2x blue-circle color-btn"></i>
                    <i onClick={() => { this.props.onSetBackgroundColor(this.props.note, 'green') }} className="fas fa-circle fa-2x green-circle color-btn" ></i>
                    <i onClick={() => { this.props.onSetBackgroundColor(this.props.note, 'purple') }} className="fas fa-circle fa-2x purple-circle color-btn"></i>

                </div>
            </div>
        )

    }

}

//