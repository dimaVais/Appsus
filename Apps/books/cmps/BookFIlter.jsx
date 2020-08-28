export function BookFilter(props) {
    return <section className="book-filter">
        <h2 className="filter-header">book Filter:  </h2>
        <input type="text" placeholder="Filter by Name" onChange={(ev)=>{
            props.onFilter(ev.target.value)
        }}/>
    </section>
}