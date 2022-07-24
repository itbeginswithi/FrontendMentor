import React, {useState} from 'react';

import IconStar from './images/icon-star.svg';
import './App.scss';

function App() {
  const [rating, setRating] = useState(null);

  return (
    <main>
      <div className="wrapper">
        
        {/* Rating */}
        <div className='rating__container'>
          <div className='rating__star'>
            <img src={IconStar} alt='Star Icon'/>
          </div>

          <div className='rating__info'>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          </div>

          <div className="rating__list" role="list">
            
          </d>
        </div>
        {/* Switches */}
      </div>
    </main>
  );
}

export default App;
