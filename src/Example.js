import React from 'react';
import './index.css';

import Alert from 'react-bootstrap/Alert';

export default 
function Example() {
  return (
    <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again.
      </p>
    </Alert>
  )
}
