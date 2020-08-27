export function NoteTodos({ onRemove, note, onSetBackgroundColor }) {

    function isDone(doneAt) {
        return (doneAt) ? '' : 'done'
    }

    return (
        <section>
            <div className={`note-todos-box bgc-${note.backgroundColor}`}>
                {note.info.label && <h3>{note.info.label}</h3>}
                <div className="notes-todos-list">
                <ul>
                    {note.info.todos.map(todo => <li className={isDone(todo.doneAt)} key={todo.id}>{todo.txt}</li>)}
                </ul>
                </div>
                <div className="note-todos-btns-box">
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

