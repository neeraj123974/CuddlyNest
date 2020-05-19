import React from 'react';
import Divider from '@material-ui/core/Divider';
import HotelImages from './imageCards'
export default function HotelDetail() {
  return (
    <div className='imageComponent'>
      <Divider />
      <div className = 'row divWidth'>
        <HotelImages title = {'Hotel New'} src = {'https://img.cuddlynest.com/images/listings/2019/12/28/23/t/c3cbffc8fe5b34748f87c8e877fe3599_460x327.jpg'} />          
        <HotelImages title = {'Hotel New Sunder'} src = {'https://img.cuddlynest.com/images/listings/2019/12/20/20/t/070cf9c186201efe36667de58b0ee2f8_460x327.jpg'} />          
        <HotelImages title = {'Hotel Vijay Nagar'} src = {'https://img.cuddlynest.com/images/listings/2019/12/20/20/t/070cf9c186201efe36667de58b0ee2f8_460x327.jpg'} />          
        <HotelImages title = {'FabHotel Rajnandani'} src = {'https://img.cuddlynest.com/images/listings/2019/08/06/22/t/755c902337bf395fcb8fe606f065eff9_460x327.jpg'} />          
        <HotelImages title = {'FabHotel Amrit Residency'} src = {'https://img.cuddlynest.com/images/listings/2019/08/06/22/t/e25d9276beb06933a3ec438d541e9002_460x327.jpg'} />          
        <HotelImages title = {'Hotel Princess Palace'} src = {'https://img.cuddlynest.com/images/listings/2019/12/20/20/t/c0e4a55a3895fc67827370f9287a4b72_460x327.jpg'} />          
      </div>
      <div className = 'row divWidth'>
       <img className='googleImg' alt='' src = {'googleMap.jpg'} />
      </div>
    </div>
  );
}