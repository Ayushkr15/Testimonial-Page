import React from 'react';
import Review from './Review';
function App() {
  return(
    <section className='container'> 
      <div className='title'>
        <h3>Our Reviews</h3>
        <div className='underline'> </div>
      </div>
      <Review />
    </section>
    );
}

export default App;
