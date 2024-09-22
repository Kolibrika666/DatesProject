import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './globalStyles/index.scss';

import HistoricDates from './HistoricDates/HistoricDates';

const App = () => {
    const bool = true;
    return (
        <div>
            <HistoricDates/>
        </div>
    );
};

export default App;