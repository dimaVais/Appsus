import { KeepService } from '../services/keep-service.js'
import { NotePreview } from './NotePreview.jsx'
import { eventBus } from '../../../services/event-bus-service'
import '../../../general-assets/general-css/helpers.css'
const { withRouter } = ReactRouterDOM
export const KeepList = withRouter(_KeepList)

function _KeepList(props) {
    

    function onRemove(noteId) {
        KeepService.removeNote(noteId).then(props.loadNotes())
        eventBus.emit('notify', { msg: 'Note Deleted!', type: 'success' })
    }

    function onSetBackgroundColor(note, color) {
        KeepService.setBackGroundColor(note, color).then(props.loadNotes())
        eventBus.emit('notify', { msg: 'Background Color Changed!', type: 'success' })

    }

    function onSetPinnedNote(note) {
        if (note.isPinned) eventBus.emit('notify', { msg: 'Note Unpinned!', type: 'success' })
        if (!note.isPinned) eventBus.emit('notify', { msg: 'Note Pinned!', type: 'success' })
        KeepService.setPinnedNote(note).then(props.loadNotes())
        
    }

    function OnDoneAt(noteId, todoId) {
        KeepService.doneAt(noteId, todoId);
        props.loadNotes();
    }

    function onSendMail(note) {

        props.history.push(`/mail/list/?content=${note.info.txt}`)
    }

    const { notes } = props
    const pinnedNotes = notes.filter((note) => note.isPinned);
    const normalNotes = notes.filter((note) => !note.isPinned);

    return (
        <div className="notes-list-box">
            <h4 className="pinned-notes-header">Pinned Notes</h4>
            <ul className="notes-list-itmes">
                {pinnedNotes.map((pinnedNote) => {
                    return (
                        <li key={pinnedNote.id}>
                            <NotePreview
                            onSendMail={onSendMail}
                                note={pinnedNote}
                                OnDoneAt={OnDoneAt}
                                onSetPinnedNote={onSetPinnedNote}
                                onRemove={onRemove}
                                onSetBackgroundColor={onSetBackgroundColor} />
                        </li>
                    )
                })}
            </ul>
            <hr />
            <h4 className="regular-notes-header">Regular Notes</h4>
            <ul className="notes-list-itmes">
                {normalNotes.map((note) => {
                    return (
                        <li key={note.id}>
                            <NotePreview
                            onSendMail={onSendMail}
                                note={note}
                                OnDoneAt={OnDoneAt}
                                onSetPinnedNote={onSetPinnedNote}
                                onRemove={onRemove}
                                onSetBackgroundColor={onSetBackgroundColor} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}


