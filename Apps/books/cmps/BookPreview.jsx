const { Link } = ReactRouterDOM
import { Currency } from 'Currency.jsx'
import { OnSale } from 'OnSale.jsx';



export function BookPreview(props) {

    return (
        <Link className="book-link" to={`/book/${props.book.id}`}>
            <div className="book-prev" >
                <h5>{props.book.title}</h5>
                <img className="thumb" src={props.book.thumbnail} alt="" />
                <p><Currency currency={props.book.listPrice.currencyCode} /> {props.book.listPrice.amount}</p>
                <OnSale isOnSale={props.book.listPrice.isOnSale}/>
            </div>
        </Link>
    )
}