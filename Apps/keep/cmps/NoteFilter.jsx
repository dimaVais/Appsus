export function NoteFilter(props) {
    return <section className="note-filter">
        <input type="text" placeholder="Filter by Name" onChange={(ev) => {
            props.onFilter(ev.target.value)
        }} />
    </section>
}



