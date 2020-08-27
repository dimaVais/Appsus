
export class Modal extends React.Component {

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
