export function BookFilter(props) {
    return <section className="book-filter">
        <input type="text" placeholder="Filter by Name" onChange={(ev)=>{
            props.onFilter(ev.target.value)
        }}/>
    </section>
}