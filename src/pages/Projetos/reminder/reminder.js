import { Component } from "react";

class Reminder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    AddReminder(){
        console.log('this state', this.state);
    }

        render() {
            return (
                <div>
                    <div>Lembretes</div>
                    <div className="form-inline">
                        <div className="form-group">
                            <input
                                className="fomr-control"
                                placeholder="I have to"
                                onChange={(event => this.setState({ text: event.target.value }))}></input>
                        </div>
                        <button className="btn btn-success"
                            onClick={() => this.AddReminder()}>Salvar</button>
                    </div>
                </div>
            )
        }
    }

export default Reminder;