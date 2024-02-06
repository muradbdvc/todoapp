import React from 'react'
import PropTypes from 'prop-types'

export default function Nav(props) {
  return (
    <div>{props.title}{props.HomeMenu}</div>
  )
}
Nav.propTypes = {
    title: PropTypes.string.isRequired,
    HomeMenu: PropTypes.string.isRequired}
Nav.defaultProps = {
    title : 'menu',
    HomeMenu : 'about'
}
