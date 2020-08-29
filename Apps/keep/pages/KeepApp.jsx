import '../assets/css/keep-style.css'
import '../../../general-assets/general-css/helpers.css'
import { KeepList } from '../cmps/KeepList.jsx'
import { NoteFilter } from '../cmps/NoteFilter.jsx'
import { KeepService } from '../services/keep-service.js'
import { eventBus } from '../../../services/event-bus-service'


export class KeepApp extends React.Component {


    state = {
        selectedType: '',
        txtValue: '',
        notes: [],
        filterBy: '',
        placeholder: 'Choose Type or Just Enter a Note'

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

    setFilter = (filterBy) => {
        this.setState({ filterBy })
        this.loadNotes();
    }

    getNotesForDisplay() {
        return this.state.notes.filter(note => note.info.txt.toLowerCase().includes(this.state.filterBy.toLowerCase()))
    }

    onInputChange = (ev) => {
        ev.preventDefault()
        this.setState({ txtValue: ev.target.value })
    }

    onSelectType = (type) => {

        switch (type) {
            case 'text':
                this.setState({ selectedType: type, placeholder: 'What Needs to Be Done?' });
                break;
            case 'image':
                this.setState({ selectedType: type, placeholder: 'Insert an image URL' });
                break;
            case 'video':
                this.setState({ selectedType: type, placeholder: 'Insert a YouTube URL' });
                break;
            case 'todos':
                this.setState({ selectedType: type, placeholder: 'Separate tasks with a comma' });
                break;
            case 'mail':
                this.setState({ selectedType: type, placeholder: 'Send this note as a mail' });
                break;
            default:
                this.setState({ selectedType: type, placeholder: 'What Needs to Be Done?' });
                break;
        }


    }

    onKeyPressed = (ev) => {
        if (ev.keyCode === 13) this.onAddNote(ev)
    }

    onAddNote = (ev) => {
        ev.preventDefault()
        if (this.state.txtValue === '') return;
        if (this.state.selectedType === 'mail') {
            this.props.history.push(`/mail/list/?content=${this.state.txtValue}`)
            return;
        }
        KeepService.addNote(this.state.txtValue, this.state.selectedType)
            .then(res => this.setState({ notes: res }))
        eventBus.emit('notify', { msg: 'Note Added', type: 'success' })
    }





    render() {

        if (!this.state.notes.length) return <h2>loading notes...</h2>
        const notes = this.getNotesForDisplay();
        return (
            <section className="keep-main-container">
                {<NoteFilter onFilter={this.setFilter} filterBy={this.state.filterBy} />}
                <div className="note-input-box">
                    <form className="form-box">
                        <input className="note-input" onKeyDown={this.onKeyPressed} placeholder={this.state.placeholder} type="text" value={this.state.txtValue} onChange={this.onInputChange} />

                        <div className="control-punnel-btns">
                            <i onClick={this.onAddNote} className="fas fa-plus-circle fa-2x add-note-btn plus"></i>
                            <i onClick={() => this.onSelectType('text')} className={`fas fa-comment-dots fa-2x add-note-btn ${this.state.selectedType === 'text' ? 'active-btn' : ''}`}></i>
                            <i onClick={() => this.onSelectType('image')} className={`fas fa-camera-retro fa-2x add-note-btn ${this.state.selectedType === 'image' ? 'active-btn' : ''}`}></i>
                            <i onClick={() => this.onSelectType('video')} className={`fas fa-video fa-2x add-note-btn ${this.state.selectedType === 'video' ? 'active-btn' : ''}`}></i>
                            <i onClick={() => this.onSelectType('todos')} className={`fas fa-tasks fa-2x add-note-btn ${this.state.selectedType === 'todos' ? 'active-btn' : ''}`}></i>
                            <i onClick={() => this.onSelectType('mail')} className={`fas fa-envelope fa-2x add-note-btn ${this.state.selectedType === 'mail' ? 'active-btn' : ''}`}></i>
                        </div>
                    </form>
                </div>
                <div>
                    <KeepList loadNotes={this.loadNotes} onInputChange={this.onInputChange} onAddNote={this.onAddTextNote} notes={notes} /> {/*check onaddtextnote*/}
                </div>
            </section>
        )
    }
}

