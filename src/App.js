import './App.css';
import OldYoutubeForm from './components/OldYoutubeForm';
import RefactoredYoutubeForm from './components/RefactoredYoutubeForm';
import NewYoutubeForm from './components/NewYoutubeForm';

function App() {
  return (
    <div className="App">
      {/* <OldYoutubeForm/> */}
      {/* <RefactoredYoutubeForm/> */}
      <NewYoutubeForm/>
    </div>
  );
}

export default App;
