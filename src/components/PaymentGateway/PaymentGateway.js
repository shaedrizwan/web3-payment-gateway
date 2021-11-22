import './PaymentGateway.css';
import { useState } from 'react';
import { PaymentHome, PayViaEth,PayViaCard } from '..';

function PaymentGateway({price,productName,merchantName,merchantLogo,ethAddress,closeModal,successFunction,failureFunction}) {

    const [paymentPage,setPaymentPage] = useState("home")

  return (
  <div className="app-backdrop">
      <div className="payment-modal">
        <div className="modal-header">
          <div onClick={closeModal} className="top-bar">x</div>
          <div className="header-content">
            <img src={merchantLogo} className="merchant-logo" alt={merchantName}/>
            <div className="header-details">
              <div className="merchant-name">{merchantName}</div>
              <div className="product-name">{productName}</div>
              <div className="product-price">₹ {price}</div>
            </div>
          </div>
        </div>
        <div className="modal-body">
          {paymentPage === "home" && <PaymentHome setPaymentPage={setPaymentPage} />}
          {paymentPage === "ethereum" && <PayViaEth price={price} ethAddress={ethAddress} setPaymentPage={setPaymentPage} successFunction={successFunction} closeModal={closeModal}/>}
          {paymentPage === "card" && <PayViaCard price={price} closeModal={closeModal}  setPaymentPage={setPaymentPage} successFunction={successFunction} failureFunction={failureFunction}/>}
        </div>
      </div>
    </div>
  );
}

export default PaymentGateway;
