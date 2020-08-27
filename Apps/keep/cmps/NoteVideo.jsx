export function NoteVideo({ onRemove, note, onSetBackgroundColor }) {

    return (
        <section>
            <div className={`note-video-box bgc-${note.backgroundColor}`}>
                {note.info.txt && <p>{note.info.txt}</p>}
                <iframe width="250" height="200" src={note.info.url}></iframe>
                
                <div className="note-video-btns-box">
                    <button onClick={() => { onRemove(note.id) }}>remove</button>
                    <button onClick={() => { onSetBackgroundColor(note, 'red') }} >red</button>
                    <button onClick={() => { onSetBackgroundColor(note, 'blue') }} >blue</button>
                    <button onClick={() => { onSetBackgroundColor(note, 'green') }} >green</button>
                    <button onClick={() => { onSetBackgroundColor(note, 'purple') }} >purple</button>
                </div>
            </div>
        </section>
    )

}


