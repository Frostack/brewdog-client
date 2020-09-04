import React from 'react'
import { connect } from 'react-redux'

import { useDeviceSize } from '../../hooks'
import { cartHasItem, addCartItem } from '../../utils'
import { hideModal } from '../../actions'
import { CustomModal, Image, PriceTag, DisableableButton, LabeledText } from '../common'

function BeerModal({ data, show, hideModal }) {
  const deviceSize = useDeviceSize()

  const handleClick = () => {
    addCartItem(data.id)
    hideModal()
  }

  const renderImage = () => {
    return (
      <Image
        width={100}
        height={200}
        src={data.image_url}
        alt={data.name}
        className="d-flex justify-content-center mt-3 mt-l-0"
      />
    )
  }

  const renderButton = () => {
    return (
      <DisableableButton
        disabled={cartHasItem(data.id)}
        handleClick={handleClick}
        activeText="Add to Cart"
        disabledText="Already in Cart"
        className="d-flex align-items-center justify-content-center ml-lg-5 mb-2 mb-l-0 mx-2 mx-lg-0"
        block
      />
    )
  }

  return (
    <CustomModal onHide={hideModal} show={show} tagline={data.tagline} title={data.name}>
      {deviceSize === 'SMALL' ? renderImage() : null}
      <div className="d-flex align-items-center pt-4 px-4">
        {deviceSize !== 'SMALL' ? renderImage() : null}
        <div className="pl-md-5 pr-md-3">{data.description}</div>
      </div>

      <div className="d-flex py-2 py-lg-4 px-3 px-lg-0 align-items-center justify-content-between">
        <LabeledText label="Abv" text={`${data.abv} %`} />

        <div className="d-flex mr-lg-5">
          <h2 className="mr-lg-5">
            <PriceTag price={data.srm} />
          </h2>

          {deviceSize !== 'SMALL' ? renderButton() : null}
        </div>
      </div>
      {deviceSize === 'SMALL' ? (
        <div className="d-flex justify-content-center">{renderButton()}</div>
      ) : null}
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
