const Amount = ({
    props,
    divStyle,
    pStyle,
    buttonStyle,
    onClickToAddAmount,
    onClickToAddCoupon,
    onClickToSubtractAmount,
    onClickToSubtractCoupon
  }) => {
    console.log("자식 랜더링😎")
    const { amount, coupon } = props;
  
    return (
      <div style={divStyle}>
        { amount > 1 && <button style={buttonStyle} onClick={onClickToSubtractAmount}>-</button>} 
        <p style={pStyle}>수량 : {amount}</p>
        <button style={buttonStyle} onClick={onClickToAddAmount}>+</button>
  
        {coupon >= 1 && <button style={buttonStyle} onClick={onClickToSubtractCoupon}>-</button> } 
        <p style={pStyle}>쿠폰 : {coupon}</p>
        <button style={buttonStyle} onClick={onClickToAddCoupon}>+</button>
      </div>
    );
  };
  
  export default Amount;