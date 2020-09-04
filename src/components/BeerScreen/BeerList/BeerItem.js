import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'

import { useDeviceSize } from '../../../hooks'
import { showModal, addFavorite, removeFavorite } from '../../../actions'
import { Image, PriceTag, Heart, LearnMoreButton, Description } from '../../common'

function BeerItem({ data, isMarked, showModal, addFavorite, removeFavorite }) {
  const deviceSize = useDeviceSize()
  let cardStyle = {
    flexBasis: '100%',
    imgWidth: 100,
  }
  switch (deviceSize) {
    case 'EXTRA_LARGE':
      cardStyle.flexBasis = '32%'
      cardStyle.imgWidth = 150
      break
    case 'LARGE':
      cardStyle.flexBasis = '47%'
      cardStyle.imgWidth = 125
      break
    case 'MEDIUM':
      cardStyle.flexBasis = '100%'
      cardStyle.imgWidth = 125
      break
    default:
      cardStyle.flexBasis = '100%'
      cardStyle.imgWidth = '100%'
  }

  const onHeartClick = () => {
    isMarked ? removeFavorite(data.id) : addFavorite(data.id)
  }
  const onLearnMoreClick = () => {
    showModal(data)
  }

  const renderImage = () => {
    return (
      <Image
        width={cardStyle.imgWidth}
        height={200}
        src={data.image_url}
        alt={data.name}
        className="mb-3"
      />
    )
  }

  return (
    <Card bg="light" className="mb-5 p-4" style={{ flexBasis: cardStyle.flexBasis }}>
      {deviceSize === 'SMALL' ? renderImage() : null}
      <div className="d-flex">
        {deviceSize !== 'SMALL' ? renderImage() : null}
        <div className="pl-md-4 py-1 d-flex flex-column justify-content-between flex-grow-1">
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="font-weight-bold">{data.name}</h5>
            <Heart marked={isMarked} onClick={onHeartClick} />
          </div>

          <Description text={data.description} />

          <div className="d-flex justify-content-between">
            <LearnMoreButton onClick={onLearnMoreClick} />
            <PriceTag price={data.srm} />
          </div>
        </div>
      </div>
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    favorites: state.storage.favorites,
  }
}

const mapDispatchToProps = {
  showModal,
  addFavorite,
  removeFavorite,
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerItem)
