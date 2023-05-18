import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import EventCreatorPage from '../pages/EventCreatorPage/EventCreatorPage.jsx';
import EventPage from '../pages/EventPage/EventPage.jsx';

// TODO: get rid of this after EventCreatorPage & EventPage is finished
import EventCreationPage from './EventCreationPage.jsx';
import TimeTable from './TimeTable.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<EventCreatorPage />} />
          <Route path='/event/:id' element={<EventPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
