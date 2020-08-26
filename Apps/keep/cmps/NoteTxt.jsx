

export class NoteTxt extends React.Component  {

    


    state = {
        note: this.props
    }

    render() {
        {console.log('note in txt' , this.note)}
        return (
            
            <div className="note=txt-box">
                <div className="note-txt-value">

                </div>
                <div className="note-txt-btns-box">

                </div>
            </div>
         )

    }

}