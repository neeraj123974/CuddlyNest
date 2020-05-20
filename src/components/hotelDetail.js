import React from 'react';
import HotelImages from './imageCards'

export default function HotelDetail() {
  return (
      <div className = 'row divWidth'>
        <HotelImages title = {'Hotel Vijay Nagar'} amount = {'from $30'} src = {'https://img.cuddlynest.com/images/listings/2019/12/28/23/t/c3cbffc8fe5b34748f87c8e877fe3599_460x327.jpg'} />          
        <HotelImages title = {'Hotel New Sunder'} amount = {'from $50'} src = {'https://img.cuddlynest.com/images/listings/2019/12/20/20/t/070cf9c186201efe36667de58b0ee2f8_460x327.jpg'} />          
        <HotelImages title = {'Hotel Vijay Nagar'} amount = {'from $45'} src = {'https://img.cuddlynest.com/images/listings/2019/12/20/20/t/070cf9c186201efe36667de58b0ee2f8_460x327.jpg'} />          
        <HotelImages title = {'FabHotel Rajnandani'} amount = {'from $20'} src = {'https://img.cuddlynest.com/images/listings/2019/08/06/22/t/755c902337bf395fcb8fe606f065eff9_460x327.jpg'} />          
        <HotelImages title = {'FabHotel Amrit Residency'} amount = {'from $19'} src = {'https://img.cuddlynest.com/images/listings/2019/08/06/22/t/e25d9276beb06933a3ec438d541e9002_460x327.jpg'} />          
        <HotelImages title = {'Hotel Princess Palace'} amount = {'from $15'} src = {'https://img.cuddlynest.com/images/listings/2019/12/20/20/t/c0e4a55a3895fc67827370f9287a4b72_460x327.jpg'} />          
      </div>
  );
}