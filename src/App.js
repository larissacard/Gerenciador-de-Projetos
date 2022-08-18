import Rout from './routes'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App (props) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Rout/>
    </DndProvider>    
  );
};

export default App;