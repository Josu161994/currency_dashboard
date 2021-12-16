import './App.css';
import React, { useState, useEffect } from "react";
// import socketIOClient from "socket.io-client";
var axios = require("axios").default;

export default function App() {
  const [currencies, setcurrencies] = useState("");
  // const ws = useRef(null);

  // let first = useRef(false);

  // const url = "https://api.exchangerate-api.com/v4/latest/INR";

  // useEffect(() => {
  //   const socket = socketIOClient({
  //       method: 'GET',
  //       url: 'https://api.exchangerate-api.com/v4/latest/INR',
  //     });
  //   socket.on((response) => {
  //     console.log(response.data.rates)
  //     setcurrencies(response.data.rates)
  //   });

  // }, []);

  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://api.exchangerate-api.com/v4/latest/INR',
    };

    axios.request(options).then(function (response) {
      console.log(response.data.rates);
      setcurrencies(response.data.rates);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  // var options = {
  //   method: 'GET',
  //   url: 'https://api.exchangerate-api.com/v4/latest/INR',
  // };

  // axios.request(options).then(function (response) {
  //   //console.log(response.data.rates);
  //   setcurrencies(response.data.rates);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  return (
    <div className="App-header">
      <header className="dashboard">
        <h2> Currency Dashboard in INR for 1 Rupees</h2>
      </header>
      <div>
        <table>
          <tbody>
            <tr>
              <td>USD</td>
              <td>::</td>
              <td><pre>  {currencies.USD}</pre></td>
            </tr>
            <tr>
              <td>EUR</td>
              <td>::</td>
              <td><pre>  {currencies.EUR}</pre></td>
            </tr>
            <tr>
              <td>SGD</td>
              <td>::</td>
              <td><pre>  {currencies.SGD}</pre></td>
            </tr>
            <tr>
              <td>AUD</td>
              <td>::</td>
              <td><pre>  {currencies.AUD}</pre></td>
            </tr>
            <tr>
              <td>GBP</td>
              <td>::</td>
              <td><pre>  {currencies.GBP}</pre></td>
            </tr>
          </tbody>
        </table></div>
    </div>
  );
};