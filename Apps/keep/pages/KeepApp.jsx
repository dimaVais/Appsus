import '../assets/css/keep-style.css'
import { KeepList } from '../cmps/KeepList.jsx'
import { KeepService } from '../services/keep-service.js'



export class KeepApp extends React.Component {


    state = {
        txtValue: '',
        notes: []

    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        KeepService.query()
            .then(notes => {
                this.setState({ notes })
            })
    }

    onAddNote = (ev) => {
        ev.preventDefault()
        KeepService.addNote(this.state.txtValue)
            .then(res => this.setState({ notes: res }))

    }

    onInputChange = (ev) => {
        ev.preventDefault()
        this.setState({ txtValue: ev.target.value })
    }

    render() {
        return (
            <section className="keep-main-container">
                <div className="note-input-box">
                    <form>
                        <input name="name" placeholder="Add New Note" type="text" value={this.state.txtValue} onChange={this.onInputChange} />
                        <button type="button" onClick={this.onAddNote} className="add-note-btn">Add</button>

                    </form>
                </div>
                <div>
                    <KeepList  notes={this.state.notes} />
                </div>
            </section>
        )
    }
}
