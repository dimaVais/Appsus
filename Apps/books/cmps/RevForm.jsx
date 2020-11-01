export class RevForm extends React.Component {

    state = {

        reviwe: {
            name: '',
            rate: '',
            date: '',
            text: ''
        }
    }
    onInputChange = (ev) => {
        const value = ev.target.name === 'rate' ? +ev.target.value : ev.target.value
        this.setState({ reviwe: { ...this.state.reviwe, [ev.target.name]: value } })
    }
    onAddReview = (ev) => {
        ev.preventDefault()
        this.props.onSubmitForm(this.state.reviwe)
        this.setState({ reviwe: { name: '', rate: '', date: '', text: '' } })
    }
    render() {

        return (

            <form className="RateForm" onSubmit={ this.onAddReview }>
                <h4>Tell us your opinion about the book</h4>

                <label htmlFor="name" >What is Your full Name?</label>
                <input type="text" name="name" className="reader" value={ this.state.reviwe.name }
                    onChange={ this.onInputChange } laceholder="Insert Your Full Name" />

                <label htmlFor="rate">How would you rate the book?</label>
                <select name="rate" className="rate" onChange={ this.onInputChange } value={ this.state.reviwe.rate }>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>

                <label htmlFor="date">When Did You read the book?</label>
                <input type="date" name="date" className="date" onChange={ this.onInputChange } value={ this.state.reviwe.date } />

                <label htmlFor="free-txt">Anything more you want to tell us?</label>
                <textarea className="form-text" type="textarea" name="text" rows="4" cols="50" onChange={ this.onInputChange }
                    value={ this.state.reviwe.text } />

                <button >SUBMIT</button>
            </form>
        )
    }
} 