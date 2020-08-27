export class NewMail extends React.Component {

    state = {
        mail: {
            from: '',
            subject: '',
            txt: ''
        }

    }

    onInputChange = (ev) => {
        this.setState({ mail: { ...this.state.mail, [ev.target.name]: ev.target.value } })
    }

    submitForm = (ev) => {
        ev.preventDefault()
        this.props.onAddNewMail(this.state.mail)
        this.setState({ mail: { from: '', subject: '', txt: '' } })
        this.props.toggleModal();
    }

    render() {

        return (
            <form className="new-mail flex-col space-around  " onSubmit={this.submitForm}>
                <div><h3>Compose your Mail: </h3>  <button >Send</button></div>
                <div className="flex-row ">
                    <label htmlFor="from" >From:</label>
                    <input type="text" name="from" className="input-from"
                        placeholder="From:" onChange={this.onInputChange} />
                </div>
                <div className="flex-row">
                    <label htmlFor="subject" >Subject:</label>
                    <input type="text" name="subject" className="input-subject"
                        placeholder="subject:" onChange={this.onInputChange} />
                </div>
                <label htmlFor="txt"></label>
                <textarea type="textarea" placeholder="Write mail here" name="txt" rows="8" cols="50"
                    onChange={this.onInputChange} />

            </form>

        )
    }

}