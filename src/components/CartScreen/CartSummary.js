import React from 'react';
import { connect } from 'react-redux';

import PriceTag from '../UI/PriceTag';

function CartSummary({ totalPrice }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <h1 className="display-1 mb-5">Total</h1>
      <h2>
        <PriceTag price={totalPrice} />
      </h2>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    totalPrice: state.storage.cart.reduce((prev, cur) => prev + cur.srm, 0),
  };
};

export default connect(mapStateToProps)(CartSummary);
