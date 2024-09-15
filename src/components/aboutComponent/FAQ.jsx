import { Accordion } from 'react-bootstrap';

const FAQ = () => {
  return (
    <div style={{ padding: '50px 20px' }}>
      <h2 className='pb-3'>Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0" className='text-start'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What services do you offer?</Accordion.Header>
          <Accordion.Body>
            We offer a wide range of services including web development, mobile app development, and more.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How can we contact you?</Accordion.Header>
          <Accordion.Body>
            You can contact us through our email, phone number, or visit our office.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is your pricing model?</Accordion.Header>
          <Accordion.Body>
            We offer flexible pricing depending on the project scope and client needs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is your pricing model?</Accordion.Header>
          <Accordion.Body>
            We offer flexible pricing depending on the project scope and client needs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>What is your pricing model?</Accordion.Header>
          <Accordion.Body>
            We offer flexible pricing depending on the project scope and client needs.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
