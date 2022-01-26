/** @jsx jsx */
import {jsx} from 'theme-ui';
import {social, githubContentPath} from '../../../config';
import {Link} from '@modules/navigation';

const DocFooter = (props) => {
  let url = githubContentPath + props.path;
  if (props.fileAbsolutePath?.includes('index.mdx') | (props.path === '/en/')) {
    url = url + 'index.mdx';
  } else {
    if (url.endsWith('/')) {
      url = url.slice(0, -1) + '.mdx';
    } else {
      url = url + '.mdx';
    }
  }

  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px',
        fontSize: '0.9rem'
      }}>
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
