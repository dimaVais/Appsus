import '../assets/css/book-style.css'
import { bookService } from '../services/book-service.js';
import { BookList } from '../cmps/BookList.jsx';
import { BookFilter } from '../cmps/BookFilter.jsx';
import { AddBook } from '../cmps/AddBook.jsx';


export class BookApp extends React.Component {
    state = {
        filterBy: '',
        books: [],
    }
    componentDidMount() {
        this.loadbooks();
    }

    loadbooks = () => {
        bookService.query()
            .then(_books => this.setState({ books: _books }))
    }

    setFilter = (filterBy) => {
        this.setState({ filterBy })
    }

    getbooksForDisplay = () => {
        if (this.state.filterBy) {
            const books = this.state.books.filter(book => book.title.includes(this.state.filterBy))
            return books;
        }

        return this.state.books;
    }

    render() {
        const booksShow = this.getbooksForDisplay();
        return (
            <section className="book-app">
                <BookFilter onFilter={this.setFilter} />
                <AddBook loadbooks={this.loadbooks} />
                <BookList onSelectBook={this.onSelectBook} books={booksShow}
                    selectedBook={(this.state.selectedBook) ? this.state.selectedBook : null} />
            </section>
        )
    }
}