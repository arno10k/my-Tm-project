import Accordion from 'react-bootstrap/Accordion';
export default function Testing() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Test1</Accordion.Header>
        <Accordion.Body>
          I'm testing 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Test2</Accordion.Header>
        <Accordion.Body>
          I'm still testing
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
