export function NoteFilter(props) {
    return <section className="note-filter-box">
        <input className="note-filter-input" type="text" placeholder="Filter By Name" onChange={(ev) => {
            props.onFilter(ev.target.value)
        }} />
    </section>
}



