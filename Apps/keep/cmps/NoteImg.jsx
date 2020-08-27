export function NoteImg({ onRemove, note, onSetBackgroundColor }) {

    return (
        <section>
            <div className={`note-img-box bgc-${note.backgroundColor}`}>
                {note.info.txt && <p>{note.info.txt}</p>}
                <img className="note-img" src={note.info.url} alt="img" />
                <div className="note-img-btns-box">
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

