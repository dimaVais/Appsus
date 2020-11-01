import '../assets/css/book-style.css'
import { bookService } from '../services/book-service.js';
import { BookList } from '../cmps/BookList.jsx';
// import { BookFilter } from '../cmps/BookFilter.jsx';
import { AddBook } from '../cmps/AddBook.jsx';
// import { Notification } from '../../../general-cmps/Notification.jsx';


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

    onRemoveBook = (bookId) => {
        bookService.removeBook(bookId);
        this.loadbooks();
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
                <div className="flex-col align-center">
                     <AddBook loadbooks={this.loadbooks} />
                </div>
                <BookList onSelectBook={this.onSelectBook} books={booksShow}
                    onRemoveBook={this.onRemoveBook} />
            </section>
        )
    }
}