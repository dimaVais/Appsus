export class MailFilter extends React.Component {
    state = {
        filterBy: ''
    }
    // componentDidMount() {
    //     const filterBy = new URLSearchParams(this.props.location.search).get('filterBy') || ''
    //     this.setState({ filterBy }, () => this.props.onFilter(this.state.filterBy))
    // }

    handleChange = ({ target }) => {
        this.setState({ filterBy: target.value }, () => this.props.onFilter(this.state.filterBy))
    }

    render() {
        return <section className="mail-filter">
            <h3>Search Mails</h3>
            <input value={ this.state.filterBy } type="text" placeholder="Search by Name or body"
                onChange={ this.handleChange } />
        </section >
    }
}