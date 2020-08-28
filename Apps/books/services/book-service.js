import { utilService } from '../../../../services/utils-service.js'
import { storageServie } from '../../../../services/storage-service.js'
import { eventBus } from '../../../../services/event-bus-service.js'


export const bookService = {
    query,
    getBookById,
    addReviwe,
    deleteReviwe,
    setCurrSearch,
    getBooksNames,
    addBook
}

const BOOK_KEY = 'BOOKS';
var currSearch = 'effective%20javascript'
var books = [];
var booksFound;



function _getBooks() {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${currSearch}`)
        .then(books => books.data);
}

function query() {
    if (!books.length) {
        return _getBooks()
            .then(booksFromApi => {
                return books = booksFromApi.items.map(book => {
                    return _parseBook(book)
                });
            })
    } else {
        return Promise.resolve(books);
    }
}

function _parseBook(book) {

    return {
        id: book.id,
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle || '',
        authors: book.volumeInfo.authors,
        publishedDate: book.volumeInfo.publishedDate,
        description: book.volumeInfo.description,
        pageCount: book.volumeInfo.pageCount,
        categories: book.volumeInfo.categories,
        thumbnail: book.volumeInfo.imageLinks.thumbnail,
        language: book.volumeInfo.language,
        listPrice: {
            amount: (book.saleInfo.listPrice) ? book.saleInfo.listPrice.amount : 50,
            currencyCode: (book.saleInfo.listPrice) ? book.saleInfo.listPrice.currencyCode : 'USD',
            isOnSale: book.saleInfo.saleability,
        },
        reviwes: [
            {
                "name": "Good Critic",
                "rate": "5",
                "date": "2020-01-01",
                "text": "Very Good Book!"
            }
        ]
    }
}

function setCurrSearch(newSearch) {
    currSearch = newSearch;
}

function getBooksNames() {
    return _getBooks()
        .then(booksFromApi => {
            return booksFound = booksFromApi.items.map(book => {
                return _parseBook(book)
            });
        })
}

function getBookById(id) {
    const bookToFind = books.find(book => book.id === id);
    window.theBooks = books
    return Promise.resolve(bookToFind);
}

function addBook(book){
    books.unshift(book)
    storageServie.saveToStorage(BOOK_KEY, mails);

}

function addReviwe(reviwe, bookToSave) {
    bookToSave.reviwes.push(reviwe);
    books = books.map(book => (book.id === bookToSave.id) ? bookToSave : book);
    storageServie.saveToStorage(BOOK_KEY, mails);
    return Promise.resolve(bookToSave);
}

function deleteReviwe(book, name) {
    const revDeleteIdx = book.reviwes.findIndex(rev => rev.name === name);
    book.reviwes.splice(revDeleteIdx, 1);
    storageServie.saveToStorage(BOOK_KEY, mails);
    return book;
}

