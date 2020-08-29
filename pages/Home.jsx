import '../general-assets/general-css/home-style.css'


const { Link } = ReactRouterDOM

export class Home extends React.Component {

    // state = {

    // }

    render() {
        return (
            <section className="home-main-container">
                <div className="home-header-box">
                <h1 className="home-header-big">AppSus</h1>
                <h3 className="home-header-small">Mail. Keep. Books.</h3>
                </div>
                <div className="home-img-box"> 
                <div className="home-img-mail-box">
                   <Link to={'/mail/list'}><img className="home-img-mail"  src="./general-assets/img/home-mail1.png" alt="mail"/></Link>
                   
                </div>
                <div className="home-img-keep-box">
                <Link to={'/keep'}>   <img className="home-img-keep" src="./general-assets/img/home-note2.jpg" alt="keep"/></Link>
                </div>
                <div className="home-img-book-box">
                <Link to={'/book'}> <img className="home-img-book" src="./general-assets/img/home-book.png" alt="books"/></Link>
                </div>
                </div>
            </section>
        )
    }
}



