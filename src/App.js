import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import ExpenseTracker from './components/ExpenseTracker';

function App() {
    return (
        <>
            <Navbar/>
        <ExpenseTracker />
        </>
    )
}

export default App;