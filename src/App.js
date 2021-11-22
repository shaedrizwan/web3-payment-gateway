import { useState } from 'react';
import './App.css';
import PaymentGateway from './components/PaymentGateway/PaymentGateway';
import MerchantLogo from "./assets/merchantLogo.png";

function App() {

  const [paymentModal,setPaymentModal] = useState(false)

  const successFunction = () =>{
    alert("Success function invoked")
  }

  const failureFunction = () =>{
    alert("Failure function invoked")
  }

  const closeModal = () => setPaymentModal(false)
  

  return (
    <>
    <div><button onClick={()=>setPaymentModal(true)}>Show payment</button></div>
    {paymentModal && <PaymentGateway 
    price={3599}
    productName="T-Shirt"
    merchantName="Blue Ribbon Sports"
    merchantLogo={MerchantLogo}
    ethAddress="0xcB38a7C0a3BE1cd1AE2F737221Dbc3400F5480Ab"
    closeModal={closeModal}
    successFunction={successFunction}
    failureFunction={failureFunction}
    />}
  </>
  );
}

export default App;
