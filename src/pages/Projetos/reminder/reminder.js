import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addReminder, deleteReminder, clearReminders } from "./action";
import moment from "moment";
import 'moment/locale/pt-br'
import { Title, Input, Save, Delete, Lembrete, Notas } from "./style";
import { Container } from "react-bootstrap";



class Reminder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addReminder() {

        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminders() {
        const { reminders } = this.props;
        moment.locale('pt-br')
        return (
            <ul className="list-group">
                {
                    reminders.map(reminders => {
                        return (
                            <Lembrete key={reminders.id} className="list-group-item d-flex justify-content-between">
                                <div className="list-item">
                                    <div>{reminders.text}</div>
                                    <div><em>{moment(new Date(reminders.dueDate)).fromNow()}</em></div>
                                </div>
                                <div className="list-item delete-button" onClick={() => this.deleteReminder(reminders.id)}>
                                    <button type="button" class="btn-close" aria-label="Close"></button>
                                </div>
                            </Lembrete>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div>
                <div className="d-flex mt-3">
                    <img src="assets/Frame.svg" style={{ height: "30px", width: "30px" }}></img>
                    <Title>Lembretes</Title>
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <Input
                            className="fomr-control"
                            placeholder="Adicione um lembrete aqui..."
                            onChange={(event => this.setState({ text: event.target.value }))}>
                        </Input>
                        <Input className="form-control"
                            type="datetime-local"
                            onChange={event => this.setState({ dueDate: event.target.value })}>

                        </Input>
                    </div>
                    <div className="d-flex" style={{ width: "300px", marginLeft: "0.5rem" }}>
                        <Save className="btn"
                            onClick={() => this.addReminder()}>
                            Salvar
                        </Save>

                        <Delete
                            className="btn"
                            onClick={() => this.props.clearReminders()}
                        >
                            Apagar Todos
                        </Delete>
                    </div>
                    <Notas >
                        {this.renderReminders()}
                    </Notas>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        reminders: state
    }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({AddReminder}, dispatch);
// }

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(Reminder);