import React from 'react';
import './app.css'

function App() {
  return (
    <div className="app">
      <div className="main">main</div>
      <div className="pyramid">money</div>
        <ul className="moneyList">
          <li className="moneyListItem">
            <span className="moneyListItemNumber">4</span>
            <span className="moneyListItemAmount">$ 400</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">4</span>
            <span className="moneyListItemAmount">$ 400</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">4</span>
            <span className="moneyListItemAmount">$ 400</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">4</span>
            <span className="moneyListItemAmount">$ 400</span>
          </li>
          
        </ul>

    </div>
  );
}

export default App;
