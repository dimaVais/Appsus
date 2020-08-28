export function Reviwes(props) {

    return (
        <div className="rev-list-container">
            <h1>Book Reviwes:</h1>
            { props.book.reviwes.map((rev, idx) =>
                <ul className="rev-list" key={ idx } >
                    <li>Reviwe by: { rev.name }</li>
                    <li>rate: { rev.rate }</li>
                    <li>Book red on: { rev.date }</li>
                    <li>Reviwe comments: { rev.text }</li>
                    <button onClick={ props.onDeleteBook }>X</button>
                </ul>

            ) }
        </div>
    )
}