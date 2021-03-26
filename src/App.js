import React, { useState } from 'react';
import './App.css';
import Chart from "react-google-charts";
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import Portfolio from './Components/Portfolio';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const initWeather = [];

  const [weather, setWeather] = useState(initWeather);
  
function convertUTCDateToLocalDate(date) {
  new Date(date.getTime() + date.getTimezoneOffset()*60*1000);
  return date;
}

let chartHumData = [
  ['Aika', '%'],
  ['Please wait...',0]
];

let chartTempData = [
  ['Aika', 'Asteet'],
  ['Please wait...',0]
];

  fetch('https://oppilas-7.azurewebsites.net/api/HttpTriggerCSharp2?code=yLqtlxviUZXCiFxa4vplSNB5x8mXi3Ln7vmokjpTNFVk3wafBe4Crg==&deviceId=1e0040001447393035313136&amount=10')
   .then(response => response.json())
   .then(json => setWeather([...json]));

  let humtempkey =1;

  const rows = () => weather.map(temphum => {

  if(chartHumData[1][0] === 'Please wait...'){
    chartHumData.pop();
  }

  if(chartTempData[1][0] === 'Please wait...'){
    chartTempData.pop();
  }

  chartHumData.push([String(convertUTCDateToLocalDate(new Date (temphum.Timestamp))).split(' ')[4], parseInt(temphum.Hum)])
  chartTempData.push([String(convertUTCDateToLocalDate(new Date (temphum.Timestamp))).split(' ')[4],parseInt(temphum.Hum)])

  return <div key={humtempkey++}>
  <b>Klo</b> {String(convertUTCDateToLocalDate (new Date (temphum.Timestamp))).split(' ')[4]} &nbsp;
  <b>Ilmankosteus</b> {temphum.Hum} % &nbsp;
  <b>Lämpötila</b> {temphum.Temp} °C 
  </div>
  })




  return (
    <Router>
    <div className="App">
    <Header />
    <Footer />
    <Switch>
      <Route path="/Portfolio">
        <Portfolio />
      </Route>
      <Route path="/">
      {rows()}
      <div style={{ display: 'flex'}}>
        <Chart
          width={'100%'}
          height={300}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={chartHumData}
          options={{
            title: 'Ilmankosteus',
            chartArea: { width: '50%'},
            vAxis: {minValue: 0 },
          }}
        />
        </div>
        <div style={{ display: 'flex'}}>
        <Chart
          width={'100%'}
          height={300}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartTempData}
          options={{
            title: 'Lämpötila',
            chartArea: { width: '50%'},
            vAxis: { minValue: 0 },
          }}
        />
      </div> 
      </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
