
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

    render() {
        console.log('inModal',this.state.isShown);
        const { isShown } = this.state.isShown
        const { children } = this.props
        return (
            <div className={`modal-wrapper ${isShown ? '' : 'hide'}`} onClick={this.closeModal} >
                <div className="modal-content" onClick={(ev) => ev.stopPropagation()}>
                    <button onClick={this.closeModal}>X</button>
                    {children}
                </div>
            </div >
        )   
    }
}
