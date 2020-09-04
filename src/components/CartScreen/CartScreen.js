import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { fetchCartItems, clearCartCache } from '../../actions'
import { useDeviceSize } from '../../hooks'
import CartList from './CartList/CartList'
import CartSummary from './CartSummary'
import { Loading } from '../common'

function CartScreen({ fetchCartItems, clearCartCache, items, totalPrice }) {
  useEffect(() => {
    fetchCartItems()
    return clearCartCache
  }, [fetchCartItems, clearCartCache])

  const deviceSize = useDeviceSize()

  if (!items) return <Loading />

  if (deviceSize === 'EXTRA_LARGE' || deviceSize === 'LARGE') {
    return (
      <Row className="vh-100" style={{ paddingTop: 56 }} noGutters>
        <Col>
          <CartList items={items} />
        </Col>
        <Col>
          <CartSummary totalPrice={totalPrice} />
        </Col>
      </Row>
    )
  } else {
    return (
      <div style={{ paddingTop: 56 }}>
        <CartSummary totalPrice={totalPrice} />
        <CartList items={items} horizontal />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.storage.cart,
    totalPrice: state?.storage?.cart?.reduce((prev, cur) => prev + cur.srm, 0),
  }
}

const mapDispatchToProps = {
  fetchCartItems,
  clearCartCache,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)
