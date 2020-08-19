import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { BsTrash } from 'react-icons/bs';

import { deleteCartItem } from '../../../actions';
import BeerImage from '../../UI/BeerImage';
import PriceTag from '../../UI/PriceTag';

function CartItem({ deleteCartItem, data }) {
  return (
    <Card bg="light" className="m-5 p-4">
      <div className="d-flex">
        <div>
          <BeerImage width={150} height={175} src={data.image_url} alt={data.name} />
        </div>

        <div className="flex-grow-1 d-flex flex-column align-items-center">
          <BsTrash
            size={32}
            className="align-self-end text-danger cursor-pointer"
            onClick={() => deleteCartItem(data.id)}
          />

          <h1>{data.name}</h1>

          <h3 className="mt-4">
            <PriceTag price={data.srm} />
          </h3>
        </div>
      </div>
    </Card>
  );
}

const mapDispatchToProps = {
  deleteCartItem,
};

export default connect(null, mapDispatchToProps)(CartItem);
