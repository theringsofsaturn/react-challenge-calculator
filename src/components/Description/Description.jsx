import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Description = () => {
  return (
    <>
      <Alert variant="dark">
        <Alert.Heading>Welcome to the React Challenge</Alert.Heading>
        <p>
          Taken the html structure in the example below (index.html), write a
          simple React calculator (adder) so that has the following mandatory
          functionalities:
        </p>
        <ul>
          <li>Rows can be added and removed</li>
          <li>Each row have a sign (minus or plus)</li>
          <li>
            Each row can be enabled or disabled by a dedicated control button
          </li>
          <li>Disabled rows must be excluded from the addition.</li>
          <li>The result must be updated "live" while the user is writing</li>
        </ul>
        <p>
          Feel free to add libraries if needed. Structure and quality of the
          code, are matter of evaluation ES6+ Javascript knowledge is matter of
          evaluation Look and feel of the solution is a plus
        </p>
        <Alert.Heading>Solution Below</Alert.Heading>
      </Alert>
    </>
  );
};

export default Description;
