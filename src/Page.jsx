import React, { useState } from 'react';
import './Page.css';

function Page() {
  const [amount, setAmount] = useState('');
  const [friends, setFriends] = useState('');
  const [tip, setTip] = useState('');
  const [paymentPerFriend, setPaymentPerFriend] = useState(null);
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFriendsChange = (event) => {
    setFriends(event.target.value);
  };

  const handleTipChange = (event) => {
    setTip(event.target.value);
  };
  const calculatePayments = () => {
    const totalAmount = parseFloat(amount);
    const numFriends = parseInt(friends);
    const tipPercentage = parseFloat(tip);
    const totalWithTip = totalAmount * (1 + tipPercentage);
    const amountPerFriend = totalWithTip / numFriends;

    return amountPerFriend;
  };

  const handleButtonClick = () => {
    const paymentPerFriend = calculatePayments();
    setPaymentPerFriend(paymentPerFriend);
  };

  return (
    <div className='page-container'>
      <h1>Split the nota</h1>

      <div className="container">
        <p>Summa</p>
        <input type="text" id='amount' value={amount} onChange={handleAmountChange} />
        <p>Antal vänner</p>
        <input type="text" id="friends" value={friends} onChange={handleFriendsChange} />
        <p>Dricks<br></br>(skriv i decimalform 0.10 = 10% osv) </p>
        <input type="text" id="tip" value={tip} onChange={handleTipChange} />
        <button onClick={handleButtonClick}>Räkna</button>
      </div>
<div className="total">
      {/* Visa belopp per vän */}
      {paymentPerFriend !== null && (
        <p>Varje person ska betala: {paymentPerFriend.toFixed(2)}</p>
      )}
      </div>
    </div>
  );
}

export default Page;
