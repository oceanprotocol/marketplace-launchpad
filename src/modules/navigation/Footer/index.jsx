import React from 'react'
import Address from './Address'
import Waves from './Waves'
import Container from './Container'
import * as styles from './index.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.grid}>
        <Address />
      </Container> 
      <Waves className={styles.waves} />
    </footer>
  )
}
