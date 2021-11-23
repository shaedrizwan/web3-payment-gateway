import { useState } from 'react';
import './App.css';
import PaymentGateway from './components/PaymentGateway/PaymentGateway';
import MerchantLogo from "./assets/merchantLogo.png";
import TshirtImage from "./assets/wagmi-tshirt.png";

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
    <div className="home">
      <div className="image-container">
        <img src={TshirtImage} alt="tshirt"/>
      </div>
      <div className="pr-details">
        <div className="pr-title">WAGMI T-Shirt - Limited Edition</div>
        <div className="pr-price">₹ 3599</div>
        <div className="pr-description">Click the Buy Now button to open the payment component. Please note that this is a demo payment gateway. Do not use Ethereum Mainnet or Real Card Details for the transaction.</div>
        <div><button className="btn-buynow" onClick={()=>setPaymentModal(true)}>Buy Now</button></div>
      </div>
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
  </div>
  );
}

export default App;
