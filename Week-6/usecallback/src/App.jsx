import { useEffect, useState,useCallback,memo } from "react";
import axios from "axios";
import "./App.css";
let i=1;
function App() {
  const [exchangeData1,setExchangeData1]=useState({});
  const [exchangeData2,setExchangeData2]=useState({});  
  const [bankData,setBankData]=useState({});

  useEffect(()=>{

    setExchangeData1({returns:100})
  },[])

  useEffect(()=>{

    setExchangeData2({returns:100})
  },[])

  useEffect(()=>{

    setTimeout(()=>{setBankData({income:100})},5000);
  },[])


  const calculateCryptoReturns=useCallback(function(){
    return exchangeData1.returns+exchangeData2.returns;
  },[exchangeData1,exchangeData2])

  return(
    <div>
      <CryptoGainCalculator calculateCryptoReturns={calculateCryptoReturns}></CryptoGainCalculator>
    </div>
  )
}

const CryptoGainCalculator=memo(function CryptoGainCalculator({calculateCryptoReturns}){
  console.log("Child Re-render");
  return <div> Returns are {calculateCryptoReturns()}</div>
})


export default App;
