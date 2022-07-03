import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ExibirTarefas from './datatask';

const Scrollbar = () => (
  <SimpleBar style={{ maxHeight: 500,}}>
        <ExibirTarefas/>
    </SimpleBar>
);


export default Scrollbar;