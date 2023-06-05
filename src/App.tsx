import React from 'react';
import logo from './logo.svg';
import car from './images/delivery-truck.svg'
import './App.scss';
import { Location } from './location';
import { Catalog } from './catalog';
import { Route } from './Route';
import { Slaider } from './Slaider';
import { TopSold } from './TopSold';

function App() {
  return (
    <div className="App">
      <h4 className='freeDelivery'><span>
        <img src={car} alt="" />
        </span>Доставка и сборы по Харькову бесплатно</h4>
        <Location/>
        <Catalog/>
        <Route/>
        <Slaider/>
        <TopSold/>
    </div>        
  );
}

export default App;
