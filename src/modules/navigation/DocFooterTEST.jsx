import React from 'react'
import PropTypes from 'prop-types'
// import { ReactComponent as Pencil } from '../../../static/images/icons/pencil.svg'
// import styles from './DocFooter.module.scss'
import {Icon} from '@makerdao/dai-ui-icons';
import { social, githubContentPath } from '../../../config'

export default function DocFooter() {
  // if (post) {
  //   url = `${githubContentPath}/${post.parent.relativePath}`
  // }

  return (
    <footer >
      {/* <a href={social.Discord}>✋ Ask a question on Discord</a>
      <a href={url} >
        <Icon name="ocean_icon_black" color="primary" size={'52px'} /> Edit this page on GitHub
        {externalName && (
          <span >{externalName}</span>
        )}
      </a> */}
    </footer>
  )
}

// DocFooter.propTypes = {
//   post: PropTypes.object,
//   url: PropTypes.string,
//   externalName: PropTypes.string
// }
