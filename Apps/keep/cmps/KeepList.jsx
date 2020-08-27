// import { NoteTxt } from 'NoteTxt.jsx'
import { KeepService } from '../services/keep-service.js'

import '../../../general-assets/general-css/helpers.css'
import { NotePreview } from './NotePreview.jsx'

export function KeepList(props) {

    function onRemove(noteId) {
        KeepService.removeNote(noteId).then(props.loadNotes())
    }

    function onSetBackgroundColor(note, color){
        KeepService.setBackGroundColor(note, color).then(props.loadNotes())
    }



    const { notes } = props

    return (
        <div className="notes-list-box">
            <ul className="notes-list-itmes">
             
                {notes.map(note =>
                    
                    <li key={note.id}><NotePreview note={note} onRemove={onRemove} onSetBackgroundColor={onSetBackgroundColor}  /></li>
                )}
            </ul>

        </div>
    )

}

