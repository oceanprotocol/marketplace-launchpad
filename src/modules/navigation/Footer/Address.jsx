import React from 'react'
import { Link } from 'gatsby'
// import Logo from '../../../atoms/Logo'
// import { useSiteMetadata } from '../../../hooks/useSiteMetadata'
import * as styles from './Address.module.css'
// import { useConsent } from '../../../hooks/useConsent'
import Logo from '@oceanprotocol/art/logo/logo.svg'
import * as logoStyles from '../../atoms/Logo.module.css'

export default function Address() {
  // const { company } = useSiteMetadata()
  const year = new Date().getFullYear()

  // const { resetConsentStatus } = useConsent()

  return (
    <div className={styles.address}>
      <div>
        <Link to="/" className={styles.logo} title="Back to Homepage">
        <img src={Logo} alt="Logo" className={logoStyles.logo}/>
        </Link>

        <p>
          <strong>Ocean Protocol Foundation Ltd.</strong>
          <br />
          The Commerze @ Irving
          <br />
          1 Irving Place, #08-11
          <br />
          369546 Singapore
        </p>
      </div>

      <div className={styles.copyright}>
        <p>
          <small>
            © {year} Ocean Protocol — Ocean Protocol Foundation Ltd. 
          </small>
        </p>
        <p> 
          <small>
              <Link style={{marginRight: '15px'}}to="/en/privacy">Privacy Policy</Link>
              <Link to="/en/privacy/#cookies">Cookie Policy</Link>
          </small>
        </p>
    
      </div>
    </div>
  )
}
