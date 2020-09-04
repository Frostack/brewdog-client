import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import { BsTrash } from 'react-icons/bs'

import { useDeviceSize } from '../../../hooks'
import { deleteCartItem } from '../../../actions'
import { Image, PriceTag } from '../../common'

function CartItem({ deleteCartItem, data }) {
  const deviceSize = useDeviceSize()
  let imgWidth
  switch (deviceSize) {
    case 'EXTRA_LARGE':
      imgWidth = 150
      break
    case 'LARGE':
      imgWidth = 125
      break
    default:
      imgWidth = '100%'
  }

  const renderImage = () => {
    return (
      <Image
        width={imgWidth}
        height={175}
        src={data.image_url}
        alt={data.name}
        className="mb-4 mb-lg-0"
      />
    )
  }

  return (
    <Card bg="light" className="m-4 m-lg-5 p-4">
      {deviceSize === 'SMALL' ? renderImage() : null}
      <div className="d-flex">
        {deviceSize !== 'SMALL' ? renderImage() : null}

        <div className="flex-grow-1 d-flex flex-column align-items-center">
          <h1 className="text-center">{data.name}</h1>

          <h3 className="mt-4">
            <PriceTag price={data.srm} />
          </h3>

          <div className="mt-4">
            <BsTrash
              size={32}
              className="text-danger cursor-pointer"
              onClick={() => deleteCartItem(data.id)}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

const mapDispatchToProps = {
  deleteCartItem,
}

export default connect(null, mapDispatchToProps)(CartItem)
