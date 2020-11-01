import { bookService } from '../services/book-service.js';


export class AddBook extends React.Component {

    state = {
        search: '',
        books: []
    }

    onAddBook = (book) => {
        bookService.addBook(book);
        this.props.loadbooks();
    }


    onSearchBooks = (ev) => {
        ev.preventDefault();
        this.setState({ search: ev.target.value });
        bookService.setCurrSearch(ev.target.value);
        bookService.getBooksNames()
            .then(books => this.setState({ books: books }))
    }

    render() {
        var listRender = '';
        if (this.state.books.length && this.state.search) {
            listRender = <div className="find-books-list">
                <h1>Choose A book to add to your list</h1>
                <ul>
                    {this.state.books.map(book => {
                        return <li className="add-book-item">{book.title} <button onClick={() => { this.onAddBook(book) }}>+</button> </li>
                    })}
                </ul>
            </div>
        }
        return (
            <div className="add-book-container">
                <form action="">
                    <span>Search In Our Collection Book: </span>
                    <input type="text" name="bookName" className="nice-input reader"
                        onChange={this.onSearchBooks} placeholder="Search Here" />
                </form>
                {listRender}
            </div>
        )
    }

}