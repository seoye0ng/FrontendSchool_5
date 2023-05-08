import DisplayMood from './Componentss/DisplayMood/DisplayMood';
import MoodList from './Componentss/MoodList/MoodList';
import { useState } from 'react';

function App() {
  const [currentMood, setCurrentMood] = useState('');

  return (
    <div>
      <MoodList mood={currentMood} onItemClick={setCurrentMood} />
      <DisplayMood mood={currentMood} />
    </div>
  );
}
export default App;
