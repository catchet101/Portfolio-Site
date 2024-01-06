import React from 'react'
import styles from './HamburgerButton.module.css'

const HamburgerButton = (props: {
  onClick: () => void
  isOpened: boolean
}) => {
  const { onClick, isOpened } = props

  return (<>
    <input className={styles.sideMenu} type='checkbox' checked={isOpened} id='sideMenu'/>
    <label className={styles.hamb} htmlFor='sideMenu' onClick={onClick}><span className={styles.hambLine}></span></label>
  </>)
}

export default HamburgerButton