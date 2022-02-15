/** @jsx jsx */
import {jsx, Label, Input, Box, Button} from 'theme-ui';
import React from 'react';
import {useForm, ValidationError} from '@formspree/react';

const LeadCapture = ({children, ...otherProps}) => {
  const [state, handleSubmit] = useForm('mjvlgalg');
  if (state.succeeded) {
    return <p>Thanks for your interest! We'll be in touch soon.</p>;
  }

  return (
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
      onSubmit={handleSubmit}>
      <b>
        Would you like to know more about how we can support your enterprise?
      </b>
      <Label htmlFor="email">Leave your email and we'll be in touch</Label>
      <Input
        name="email"
        id="email"
        type="email"
        sx={{
          width: '70%',
          mb: '3',
          mr: '3',
          borderColor: 'secondaryMuted',
          display: 'inline-block',
          bg: 'white'
        }}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <Button>Submit</Button>
    </Box>
  );
};

export default LeadCapture;
