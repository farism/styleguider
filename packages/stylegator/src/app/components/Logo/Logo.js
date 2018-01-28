import React from 'react'
import PropTypes from 'prop-types'

import styles from './logo.scss'
import logo from '../../assets/logo.png'

const Logo = ({ src = logo }) => (
  <a className={styles['logo']} href="#/">
    <span
      className={styles['image']}
      {...{ style: { backgroundImage: `url(${src})` } }}
    />
  </a>
)

Logo.propTypes = {}

Logo.defaultProps = {}

export default Logo