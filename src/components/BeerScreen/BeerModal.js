import React from 'react'
import { connect } from 'react-redux'

import { cartHasItem, addCartItem } from '../../utils'
import { hideModal } from '../../actions'
import { CustomModal, Image, PriceTag, DisableableButton, LabeledText } from '../common'

function BeerModal({ data, show, hideModal }) {
  const handleClick = () => {
    addCartItem(data.id)
    hideModal()
  }

  return (
    <CustomModal onHide={hideModal} show={show} tagline={data.tagline} title={data.name}>
      <div className="d-flex align-items-center pt-4 px-4">
        <Image width={150} height={200} src={data.image_url} alt={data.name} />
        <div className="pl-5 pr-3">{data.description}</div>
      </div>

      <div className="d-flex py-4 align-items-center justify-content-between">
        <LabeledText label="Abv" text={`${data.abv} %`} />

        <div className="d-flex mr-5">
          <h2 className="mr-5">
            <PriceTag price={data.srm} />
          </h2>

          <DisableableButton
            disabled={cartHasItem(data.id)}
            handleClick={handleClick}
            activeText="Add to Cart"
            disabledText="Already in Cart"
          />
        </div>
      </div>
    </CustomModal>
  )
}

const mapStateToProps = state => {
  return {
    show: state.modal.show,
    data: state.modal.data,
  }
}

const mapDispatchToProps = {
  hideModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerModal)
