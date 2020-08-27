import '../assets/css/keep-style.css'
import '../../../general-assets/general-css/helpers.css'
import { KeepList } from '../cmps/KeepList.jsx'
import { NoteFilter } from '../cmps/NoteFilter.jsx'
import { KeepService } from '../services/keep-service.js'



export class KeepApp extends React.Component {


    state = {
        selectedType: '',
        txtValue: '',
        notes: [],
        filterBy: '',
        placeholder: 'Choose Type'

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

    onAddTextNote = (ev) => {
        ev.preventDefault()
        KeepService.addTextNote(this.state.txtValue)
            .then(res => this.setState({ notes: res }))

    }
    onAddImgNote = (ev) => {
        ev.preventDefault()
        KeepService.addImgNote(this.state.txtValue)
            .then(res => this.setState({ notes: res }))

    }
    onAddVideoNote = (ev) => {
        ev.preventDefault()
        KeepService.addVideoNote(this.state.txtValue)
            .then(res => this.setState({ notes: res }))

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
                console.log(type);
                this.setState({ selectedType: type, placeholder: 'Insert an image URL and click on the camera' });
                break;
            case 'video':
                this.setState({ selectedType: type, placeholder: 'Insert a YouTube URL and click on the video camera' });
                break;
            case 'todos':
                this.setState({ selectedType: type, placeholder: 'Make a list of tasks' });
                break;
            default:
                this.setState({ selectedType: type, placeholder: 'What Needs to Be Done?' });
                break;
        }
    }

    onAddNote = (ev) => {
        ev.preventDefault()
        KeepService.addNote(this.state.txtValue , this.state.selectedType)
            .then(res => this.setState({ notes: res }))
    }


    render() {

        if (!this.state.notes.length) return <h2>loading notes...</h2>
        const notes = this.getNotesForDisplay();
        return (
            <section className="keep-main-container">
                {<NoteFilter onFilter={this.setFilter} filterBy={this.state.filterBy} />}
                <div className="note-input-box">
                    <form>
                        <input className="note-input" placeholder={this.state.placeholder} type="text" value={this.state.txtValue} onChange={this.onInputChange} />
                        
                        <i onClick={this.onAddNote} className="far fa-plus-square fa-2x add-note-btn"></i>
                        <i onClick={() => this.onSelectType('text')} className="fas fa-comment-dots fa-2x add-note-btn"></i>
                        <i onClick={() => this.onSelectType('image')} className="fas fa-camera-retro fa-2x add-note-btn"></i>
                        <i onClick={() => this.onSelectType('video')} className="fas fa-video fa-2x add-note-btn"></i>
                        <i onClick={() => this.onSelectType('todos')} className="fas fa-tasks fa-2x add-note-btn"></i>
                    </form>
                </div>
                <div>
                    <KeepList loadNotes={this.loadNotes} onInputChange={this.onInputChange} onAddNote={this.onAddTextNote} notes={notes} />
                </div>
            </section>
        )
    }
}

