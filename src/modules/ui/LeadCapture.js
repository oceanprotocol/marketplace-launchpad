/** @jsx jsx */
import {
  jsx,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Box,
  Flex,
  Button
} from 'theme-ui';

const LeadCapture = ({children, ...otherProps}) => (
  <Box
    as="form"
    sx={{
      px: '24px',
      py: '28px',
      mb: '24px',
      mt: '5',
      width: '85%',
      borderRadius: '12px',
      bg: 'primaryMuted'
    }}
    onSubmit={(e) => e.preventDefault()}>
    <b>Would you like to know more about our enterprise packages?</b>
    <Label htmlFor="email">Leave your email and we'll be in touch</Label>
    <Input
      name="email"
      id="email"
      sx={{
        width: '70%',
        mb: '3',
        mr: '3',
        borderColor: 'primaryAlt',
        display: 'inline-block',
        bg: 'white'
      }}
    />

    <Button>Submit</Button>
  </Box>
);

export default LeadCapture;
