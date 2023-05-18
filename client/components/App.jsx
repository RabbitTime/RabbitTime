import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import EventCreationPage from './EventCreationPage.jsx';
import EventPage from '../pages/EventPage/EventPage.jsx';

// TODO: get rid of this after EventPage is finished
import TimeTable from './Timetable/TimeTable.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<EventCreationPage />} />
          <Route path='/event/:id' element={<EventPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
