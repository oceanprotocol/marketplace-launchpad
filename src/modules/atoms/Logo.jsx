import React, { ReactElement } from 'react'
import { ReactComponent as LogoAsset } from '@oceanprotocol/art/logo/logo.svg'
import * as styles from './Logo.module.css'

export default function Logo(className) {
  return <LogoAsset className={`${styles.logo} ${className && className}`} />
}
