import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Pencil } from '../../../static/images/icons/pencil.svg'
// import styles from './DocFooter.module.scss'
import { social, githubContentPath } from '../../../config'

export default function DocFooter({ post, url, externalName }) {
  if (post) {
    url = `${githubContentPath}/${post.parent.relativePath}`
  }

  return (
    <footer >
      <a href={social.Discord}>✋ Ask a question on Discord</a>
      <a href={url} >
        <Pencil /> Edit this page on GitHub
        {externalName && (
          <span >{externalName}</span>
        )}
      </a>
    </footer>
  )
}

DocFooter.propTypes = {
  post: PropTypes.object,
  url: PropTypes.string,
  externalName: PropTypes.string
}
