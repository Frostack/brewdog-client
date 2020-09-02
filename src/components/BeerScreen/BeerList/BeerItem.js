import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'

import { showModal, addFavorite, removeFavorite } from '../../../actions'
import { Image, PriceTag, Heart, LearnMoreButton, Description } from '../../common'

function BeerItem({ data, isMarked, showModal, addFavorite, removeFavorite }) {
  const onHeartClick = () => {
    isMarked ? removeFavorite(data.id) : addFavorite(data.id)
  }
  const onLearnMoreClick = () => {
    showModal(data)
  }

  return (
    <Card bg="light" className="mb-5 p-4" style={{ flexBasis: '31%' }}>
      <div className="d-flex">
        <Image width={120} height={200} src={data.image_url} alt={data.name} />

        <div className="pl-4 py-1 d-flex flex-column justify-content-between">
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
