export function NoteTodos({ onRemove, note, onSetPinnedNote, onSetBackgroundColor }) {

    function isDone(doneAt) {
        return (doneAt) ? '' : 'done'
    }


    return (
        <section>
            <div className={`note-todos-box bgc-${note.backgroundColor}`}>
                <div className="notes-todos-list">
                    <ul>
                        {note.info.todos.map(todo => <li className={isDone(todo.doneAt)} key={todo.id}>{todo.text}</li>)}
                    </ul>
                </div>
                <div className="note-todos-btns-box">
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

