

export class LongTxt extends React.Component {
    state = {
        isShowAll: false
    }

    toggleMore = () => {
        this.setState({ isShowAll: !this.state.isShowAll });
    } 


    render() {
        const limit = this.props.limit;
        const txt = this.props.text;
        const { isShowAll } = this.state;
        const toShow = txt.substring(0, limit);
        return (
            <section>
                {txt.length <= limit && txt}
                {txt.length > limit && isShowAll &&
                    <div>
                        {txt}
                        <a className="read-link" onClick={this.toggleMore}>{`<--`}</a>
                    </div>}
                {txt.length > limit && !isShowAll &&
                    <div>
                        {toShow}
                        <a className="read-link" onClick={this.toggleMore}>...</a>
                    </div>}
            </section>
        )
    }
}

