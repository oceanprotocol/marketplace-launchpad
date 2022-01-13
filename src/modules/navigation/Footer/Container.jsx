import React, { ReactElement, ReactNode } from 'react'
import * as styles from './Container.module.css'

export default function Container({
  children,
  narrow,
  className
}) {
  return (
    <div
      className={`${styles.container} ${narrow && styles.narrow} ${
        className && className
      }`}
    >
      {children}
    </div>
  )
}
