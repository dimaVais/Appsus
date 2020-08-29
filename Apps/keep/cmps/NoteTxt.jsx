import '../../../general-assets/general-css/helpers.css'
import { KeepService } from '../services/keep-service.js'




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
                    {/* <i onClick={() => { this.props.history.push(`/mail/list/?content=${this.props.note.info.txt}`) }} className={`fas fa-envelope fa-2x add-note-btn`}></i> */}
                    <i onClick={() => { this.props.onSendMail(this.props.note) }} className={`fas fa-envelope fa-2x add-note-btn`}></i>

                </div>
            </div>
        )

    }

}

