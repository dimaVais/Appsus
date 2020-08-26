import { NoteTxt } from 'NoteTxt.jsx'

export function KeepList(props) {

    const { notes } = props
    console.log('in list', notes);

    return (
        <div className="notes-list-box">
            <ul className="notes-list-itmes">
                {notes.map(note =>
                    <NoteTxt key={note.id} note={note} />
                )}
            </ul>

        </div>
    )

}

