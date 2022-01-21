/** @jsx jsx */
import {Fragment} from 'react';
import {jsx, Text, Flex} from 'theme-ui';
import {Icon} from '@makerdao/dai-ui-icons';
import {social, githubContentPath} from '../../../config';

const DocFooter = (path) => {
  // console.log("path", path)
  const url = githubContentPath + path.path;

  return (
    <Fragment>
      <a href={social.Discord} target="_blank" rel="noreferrer">
        ✋ Ask a question on Discord
      </a>
      <br />
      <a href={url} target="_blank" rel="noreferrer">
        ✏️Edit this page on GitHub
      </a>
    </Fragment>
  );
};

export default DocFooter;
