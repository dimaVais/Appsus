

export class NoteTxt extends React.Component  {

    


    state = {
        note: this.props
    }

    render() {
        {console.log('note in txt' , this.props)}
        return (
            
            <div className="note=txt-box">
                <div className="note-txt-value">
                    <h1>{this.props.info.txt}</h1>
                </div>
                <div className="note-txt-btns-box">

                </div>
            </div>
         )

    }

}