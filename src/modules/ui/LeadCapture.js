/** @jsx jsx */
import {jsx, Input} from 'theme-ui';

const LeadCapture = ({children, ...otherProps}) => (
  <Input
    {...otherProps}
    sx={{
      p: '24px',
      width: '100%',
      borderColor: 'primary',
      bg: 'successAlt',
      mb: '24px',
      '& > *:only-child': {m: 0}
    }}>
    {children}
  </Input>
);

export default LeadCapture;
