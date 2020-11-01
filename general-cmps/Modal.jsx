
export class Modal extends React.Component {
    state = {
        isShown: false
    }

    componentDidMount() {
        this.setState({isShown: this.props.isShown  })
    }

    closeModal = () => {
        this.setState({ isShown: false })
    }
    //dd
    render() { 
        console.log('inModal',this.state.isShown);
        const { isShown } = this.state.isShown

    render() {
        const { children } = this.props
        return (
            <div className={`modal-wrapper ${this.props.isShown ? '' : 'hide'}`} onClick={this.props.toggleModal} >
                <div className="modal-content" onClick={(ev) => ev.stopPropagation()}>
                    <button onClick={this.props.toggleModal}>X</button>
                    {children}
                </div>
            </div >
        )
    }
}
