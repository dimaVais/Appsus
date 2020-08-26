export class NewMail extends React.Component {

    state = {
        mail: {
            from: '',
            subject: '',
            txt:''
        }

    }

    onInputChange = (ev) => {
        this.setState({ mail: { ...this.state.mail, [ev.target.name]: ev.target.value } })
    }

    submitForm = (ev) => {
        ev.preventDefault()
        this.props.onAddNewMail(this.state.mail)
        this.setState({ mail: { from: '', subject: '', txt: '' } })
    }

    render() {

        return (
            <form className="new-mail flex-col justify-center align-center" onSubmit={this.submitForm}>
                <div><h3>Compose your Mail: </h3>  <button >Send</button></div>

                <label htmlFor="from" >From:</label>
                <input type="text" name="from" 
                    placeholder="From:" onChange={this.onInputChange} />

                <label htmlFor="subject" >Subject:</label>
                <input type="text" name="subject" 
                    placeholder="subject:" onChange={this.onInputChange} />

                <label htmlFor="txt"></label>
                <textarea type="textarea" placeholder="Write mail here" name="txt" rows="10" cols="50"
                    onChange={this.onInputChange}/>

            </form>

        )
    }

}