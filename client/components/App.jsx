import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import EventCreatorPage from '../pages/EventCreatorPage/EventCreatorPage.jsx';
import TimeTable from './TimeTable.jsx';


// TODO: remove this after EventCreatorPage is done
import EventCreationPage from './EventCreationPage.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<EventCreatorPage />} />
          <Route path='/event/:id' element={<TimeTable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
