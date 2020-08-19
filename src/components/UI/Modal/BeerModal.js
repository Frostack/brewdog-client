import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { BsBagFill } from 'react-icons/bs';

import { cartHasItem, addCartItem } from '../../../utils';
import { hideModal } from '../../../actions';
import CustomModal from './CustomModal';
import BeerImage from '../BeerImage';
import PriceTag from '../PriceTag';

function BeerModal({ data, show, hideModal }) {
  const renderButton = () => {
    const handleClick = () => {
      addCartItem(data.id);
      hideModal();
    };

    const disabled = cartHasItem(data.id);

    return (
      <Button
        className="d-flex align-items-center ml-5"
        variant={disabled ? 'secondary' : 'primary'}
        disabled={disabled}
        onClick={handleClick}
      >
        {disabled ? 'Already in Cart' : 'Add to Cart'} <BsBagFill size={18} className="ml-3" />
      </Button>
    );
  };

  return (
    <CustomModal onHide={hideModal} show={show} tagline={data.tagline} title={data.name}>
      <div className="d-flex align-items-center pt-4 px-4">
        <div>
          <BeerImage width={150} height={200} src={data.image_url} alt={data.name} />
        </div>
        <div className="pl-5 pr-3">{data.description}</div>
      </div>

      <div className="d-flex py-4 align-items-center justify-content-between">
        <div className="ml-5 pl-2">
          <strong className="mr-4">Abv</strong>
          <span>{data.abv} %</span>
        </div>
        <div className="d-flex mr-5">
          <h2 className="mr-5">
            <PriceTag price={data.srm} />
          </h2>
          {renderButton()}
        </div>
      </div>
    </CustomModal>
  );
}

const mapStateToProps = state => {
  return {
    show: state.modal.show,
    data: state.modal.data,
  };
};

const mapDispatchToProps = {
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerModal);
