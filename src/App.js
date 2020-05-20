import React from 'react';
import Header from './components/header'
import SubHeader from './components/subHeader'
import HotelDetail from './components/hotelDetail'
import SimpleMap from './components/googleMap' 
import Divider from '@material-ui/core/Divider';

function App() {
  return (
  	<>
       <Header/>
       <SubHeader/>
       <div className='imageComponent'>
        <Divider />
       <HotelDetail/>
       <div className = 'row divWidth'>
        <SimpleMap />
      </div>
    </div>
    </>
  );
}

export default App;
