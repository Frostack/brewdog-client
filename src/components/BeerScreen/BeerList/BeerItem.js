import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import { BsHeart, BsHeartFill, BsArrowRightShort } from 'react-icons/bs'

import { showModal, addFavorite, removeFavorite } from '../../../actions'
import BeerImage from '../../UI/BeerImage'
import PriceTag from '../../UI/PriceTag'

function BeerItem({ data, favorites, showModal, addFavorite, removeFavorite }) {
  const renderHeart = () => {
    const isMarked = favorites.some(itemID => itemID === data.id)
    if (isMarked) {
      return (
        <BsHeartFill
          size={20}
          className="cursor-pointer flex-shrink-0 text-danger"
          onClick={() => removeFavorite(data.id)}
        />
      )
    }
    return (
      <BsHeart
        size={20}
        className="cursor-pointer flex-shrink-0"
        onClick={() => addFavorite(data.id)}
      />
    )
  }

  return (
    <Card bg="light" className="mb-5 p-4" style={{ flexBasis: '31%' }}>
      <div className="d-flex">
        <div>
          <BeerImage width={120} height={200} src={data.image_url} alt={data.name} />
        </div>

        <div className="pl-4 py-1 d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="font-weight-bold">{data.name}</h5>
            {renderHeart()}
          </div>

          <div className="text-secondary line-clamp overflow-hidden">
            <small>{data.description}</small>
          </div>

          <div className="d-flex justify-content-between">
            <div className="cursor-pointer" onClick={() => showModal(data)}>
              <u>Learn more</u>
              <BsArrowRightShort className="ml-2" size={24} />
            </div>
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
