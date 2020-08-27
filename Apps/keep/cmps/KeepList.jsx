// import { NoteTxt } from 'NoteTxt.jsx'
import { KeepService } from '../services/keep-service.js'

import '../../../general-assets/general-css/helpers.css'
import { NotePreview } from './NotePreview.jsx'

export function KeepList(props) {

    function onRemove(noteId) {
        KeepService.removeNote(noteId).then(props.loadNotes())
    }

    function onSetBackgroundColor(note, color) {
        KeepService.setBackGroundColor(note, color).then(props.loadNotes())
    }

    function onSetPinnedNote(note) {
        KeepService.setPinnedNote(note).then(props.loadNotes())

    }



    const { notes } = props
    const pinnedNotes = notes.filter((note) => note.isPinned);
    const normalNotes = notes.filter((note) => !note.isPinned);

    return (
        <div className="notes-list-box">
            <ul className="notes-list-itmes">
                {pinnedNotes.map((pinnedNote) => {
                return (
                <li key={pinnedNote.id}>
                    <NotePreview 
                    note={pinnedNote} 
                    onSetPinnedNote={onSetPinnedNote}
                    onRemove={onRemove} 
                    onSetBackgroundColor={onSetBackgroundColor} />
                </li>
                )})}
            </ul>
            <hr/>
            <ul className="notes-list-itmes">
                {normalNotes.map((note) => {
                return (
                <li key={note.id}>
                    <NotePreview 
                    note={note} 
                    onSetPinnedNote={onSetPinnedNote}
                    onRemove={onRemove} 
                    onSetBackgroundColor={onSetBackgroundColor} />
                </li>
                )})}
            </ul>
        </div>
    )

}


