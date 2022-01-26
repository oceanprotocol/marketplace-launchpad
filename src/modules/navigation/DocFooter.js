/** @jsx jsx */
import {Fragment} from 'react';
import {jsx, Text, Flex} from 'theme-ui';
import {Icon} from '@makerdao/dai-ui-icons';
import {social, githubContentPath} from '../../../config';
import {Link} from '@modules/navigation';

const DocFooter = (path) => {
  // console.log("path", path)
  const url = githubContentPath + path.path;

  return (
    <div sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Link href={url} target="_blank" rel="noreferrer">
        ✏️ Edit this page on GitHub
      </Link>
      <Link href={social.Discord} target="_blank" rel="noreferrer">
        ✋ Ask a question on Discord
      </Link>
    </div>
  );
};

export default DocFooter;
