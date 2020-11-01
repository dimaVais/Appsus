export function NoteVideo({ onRemove, note, onSetPinnedNote, onSetBackgroundColor }) {

    return (
        <section>
            <div className={`note-video-box bgc-${note.backgroundColor}`}>
                {note.info.txt && <p>{note.info.txt}</p>}
                <iframe width="270" height="250" src={note.info.url}></iframe>

                <div className="note-video-btns-box">
                    <i onClick={() => onSetPinnedNote(note)} className="fas fa-thumbtack fa-2x pin-btn"></i>
                    <i className="fas fa-trash fa-2x remove-btn" onClick={() => { onRemove(note.id) }}></i>
                    <i onClick={() => { onSetBackgroundColor(note, 'red') }} className="fas fa-circle fa-2x red-circle color-btn"></i>
                    <i onClick={() => { onSetBackgroundColor(note, 'blue') }} className="fas fa-circle fa-2x blue-circle color-btn"></i>
                    <i onClick={() => { onSetBackgroundColor(note, 'green') }} className="fas fa-circle fa-2x green-circle color-btn" ></i>
                    <i onClick={() => { onSetBackgroundColor(note, 'purple') }} className="fas fa-circle fa-2x purple-circle color-btn"></i>
                </div>
            </div>
        </section>
    )

}


