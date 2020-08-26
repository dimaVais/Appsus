import '../../../general-assets/general-css/helpers.css'

export class NoteTxt extends React.Component {

    state = {
        note: this.props.note,

        
    }

    



    render() {

        return (

            <div className="note-txt-box">
                <div className="note-txt-value">
                    <p>{this.props.note.info.txt}</p>
                </div>
                <div className="note-txt-btns-box">
                    <button onClick={() => { this.props.onRemove(this.props.note.id)}}>remove</button>
                    <button>edit</button>
                    <button onClick={() => { this.props.onSetBackgroundColor(this.props.note, 'red')}} >red</button>
                </div>
            </div>
        )

    }

}