import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addReminder, deleteReminder, clearReminders } from "./action";
import moment from "moment";




class Reminder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate:''
        }
    }

    addReminder() {
        
        this.props.addReminder(this.state.text, this.state.dueDate);
    }  

    deleteReminder(id){
        this.props.deleteReminder(id);
    }
    
    renderReminders(){
        const { reminders } = this.props;
        return (
            <ul className="list-group col-6">
                {
                    reminders.map(reminders => {
                        return(
                            <li key={reminders.id} className="list-group-item">
                                <div className="list-item">
                                    <div>{reminders.text}</div>
                                    <div><em>{moment(new Date(reminders.dueDate)).fromNow()}</em></div>
                                    </div>
                                <div className="list-item delete-button" onClick={() => this.deleteReminder(reminders.id)}>
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

        render() {
            return (
                <div>
                    <div>Lembretes</div>
                    <div className="form-inline">
                        <div className="form-group">
                            <input
                                className="fomr-control"
                                placeholder="Adicione um lembrete aqui..."
                                onChange={(event => this.setState({ text: event.target.value }))}></input>
                            <input className="form-control"
                                   type="datetime-local"
                                   onChange={event => this.setState({dueDate: event.target.value})}></input>
                        </div>
                        
                        <button className="btn btn-success"
                                onClick={() => this.addReminder()}>
                                Salvar
                        </button>
                        { this.renderReminders() }
                        <div
                        className="btn btn-danger"
                        onClick={() => this.props.clearReminders()}
                        >
                            Apagar todos
                        </div>
                    </div>
                </div>
            )
        }
    }

    function mapStateToProps(state){
        console.log('state', state);
        return{
            reminders: state
        }
    }

    // function mapDispatchToProps(dispatch){
    //     return bindActionCreators({AddReminder}, dispatch);
    // }

export default connect(mapStateToProps,{addReminder, deleteReminder, clearReminders})(Reminder);