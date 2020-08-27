import {NoteTxt} from 'NoteTxt.jsx'
import {NoteImg} from 'NoteImg.jsx'
import {NoteVideo} from 'NoteVideo.jsx'
import {NoteTodos} from 'NoteTodos.jsx'


export function NotePreview({note, onRemove, onSetPinnedNote, onSetBackgroundColor}) {


    switch (note.type) {
        case 'NoteText':
            return <NoteTxt onRemove={onRemove} onSetPinnedNote={onSetPinnedNote} onSetBackgroundColor={onSetBackgroundColor} note={note}/>
        case 'NoteImg':
            return <NoteImg onRemove={onRemove} onSetPinnedNote={onSetPinnedNote} onSetBackgroundColor={onSetBackgroundColor} note={note}/>
        case 'NoteVideo':
            return <NoteVideo  onRemove={onRemove} onSetPinnedNote={onSetPinnedNote} onSetBackgroundColor={onSetBackgroundColor} note={note}/>
        case 'NoteTodos':
            return <NoteTodos  onRemove={onRemove} onSetPinnedNote={onSetPinnedNote} onSetBackgroundColor={onSetBackgroundColor} note={note}/>
        default:
            return<NoteTxt onRemove={onRemove} onSetPinnedNote={onSetPinnedNote} onSetBackgroundColor={onSetBackgroundColor} note={note}/>
    }

}