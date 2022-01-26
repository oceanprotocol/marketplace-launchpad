/** @jsx jsx */
import {Fragment} from 'react';
import {jsx, Text, Flex} from 'theme-ui';
import {Icon} from '@makerdao/dai-ui-icons';
import {social, githubContentPath} from '../../../config';
import {Link} from '@modules/navigation';

const DocFooter = (path) => {
  let url = githubContentPath + path.path;
  let file = path.path.split('/').pop();
  if (file === '') {
    url = url + 'index.mdx';
  } else {
    url = url + '.mdx';
  }

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
