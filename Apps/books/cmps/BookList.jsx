import { BookPreview } from 'BookPreview.jsx'
import { AddBook } from './AddBook.jsx'

export function BookList(props) {

    return (
        <div className="main-contianer" >
            <ul className="book-list">
                {
                    props.books.map(book =>
                        <li key={book.id}>
                            <BookPreview book={book} onRemoveBook={props.onRemoveBook} />
                        </li>
                    )
                }
            </ul>    
        </div>
    )
}
