import React from 'react'
import styles from './HamburgerButton.module.css'

const HamburgerButton = (props: {
  onClick: () => void
}) => {
  const { onClick } = props

  return (<>
    <input className={styles.sideMenu} type='checkbox' id='sideMenu'/>
    <label className={styles.hamb} htmlFor='sideMenu' onClick={onClick}><span className={styles.hambLine}></span></label>
  </>)
}

export default HamburgerButton