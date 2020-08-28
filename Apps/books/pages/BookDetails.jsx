const { Link } = ReactRouterDOM
import { Currency } from '../cmps/Currency.jsx'
import { bookService } from '../services/book-service.js';
import { OnSale } from '../cmps/OnSale.jsx';
import { RevForm } from '../cmps/RevForm.jsx';
import { Reviwes } from '../cmps/Reviwes.jsx';

export class BookDetails extends React.Component {

    state = {
        book: null
    }

    componentDidMount() {
        const bookId = this.props.match.params.id
        bookService.getBookById(bookId)
            .then(book => this.setState({ book }))
    }


    bookAgeStatus = () => {
        const currYear = new Date().getFullYear();
        const publishYear = this.state.book.publishedDate;
        if (currYear - publishYear >= 10) var ageStatus = ' - Veteran Book';
        else if (currYear - publishYear < 1) ageStatus = ' - New!';
        else ageStatus = '';

        return ageStatus;
    }

    pageCoundStatus = () => {
        const pages = this.state.book.pageCount;
        if (pages > 500) var readType = ' - Long reading';
        else if (pages > 200) readType = ' - Decent Reading';
        else if (pages < 100) readType = ' - Light Reading';
        else readType = '';

        return readType;
    }

    onSubmitForm = (rev) => {
        bookService.addReviwe(rev, this.state.book)
            .then(book => this.setState({ book }))

    }

    onDeleteBook(ev) {
        // const revName = ev.target.name;
        // bookService.deleteReviwe(book,revName);
        // bookService.getBookById(bookWithRev.id)
        // .then(book => {
        //     this.setState({ book: book })
        // })
    }

    render() {
        if (!this.state.book) return null;

        return (
            <div className="main-container">
                <div className="details-container">
                    <h1>{ this.state.book.title } -  Book Details </h1>

                    <div className="show-container">
                        <div className="img-container">
                            <img src={ this.state.book.thumbnail } />
                        </div>
                        <div className="list-container">
                            <ul className="ditail-list">
                                <li> Title: <span> { this.state.book.title } </span> </li>
                                <li> Subtitle: <span> { this.state.book.subtitle } </span> </li>
                                <li> Suthors: <span> { this.state.book.authors.join('') } </span> </li>
                                <li> Published Date: <span> { this.state.book.publishedDate + this.bookAgeStatus() } </span> </li>
                                <li> Description: <span> { this.state.book.description.substring(0,100)+'...' } </span> </li>
                                <li> Page Count: <span> { this.state.book.pageCount + this.pageCoundStatus() } </span> </li>
                                <li> Categories: <span> { this.state.book.categories } </span> </li>
                                <li> Language: <span> { this.state.book.language } </span> </li>
                                <li> Price:
                                { ' ' }<Currency currency={ this.state.book.listPrice.currencyCode } />
                                    { this.state.book.listPrice.amount } </li>
                                <OnSale isOnSale={ this.state.book.listPrice.isOnSale } />
                            </ul>
                        </div>
                    </div>
                    <div className="revs-container">
                        <RevForm onSubmitForm={ this.onSubmitForm } />
                        <Reviwes book={ this.state.book } onDeleteBook={ this.onDeleteBook } />
                    </div>
                </div>
                <Link to='/Book'> <button className="return-btn" >Return To Gallery</button></Link>
            </div >
        )
    }
}   
