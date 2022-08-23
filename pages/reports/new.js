import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const members = [
  { name: "", isPresent: true },
  { name: "", isPresent: true },
  { name: "", isPresent: true },
  { name: "", isPresent: false },
  { name: "", isPresent: false },
  { name: "", isPresent: true },
];

const New = () => {
  return (
    <FormPage className="">
      <Form>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="Disabled input" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Meeting format</Form.Label>
            <Form.Select id="disabledSelect">
              {["Online", "Offline"].map((format) => (
                <option key={format}>{format}</option>
              ))}
            </Form.Select>
          </Form.Group>
          {["Key Highlights", "Prayer Requests", "Miscelleneous"].map(
            (item) => (
              <Form.Group className="mb-3" controlId={item} key={item}>
                <Form.Label>{item}</Form.Label>
                <Form.Control as="textarea" rows={4} cols={33} />
              </Form.Group>
            )
          )}

          {/* buttons */}
          <div className="d-flex">
            <Button type="button" variant="danger" className="w-25 ms-auto">
              Cancel
            </Button>

            <Button type="submit" className="ms-2 w-25">
              Submit
            </Button>
          </div>
        </fieldset>
      </Form>
    </FormPage>
  );
};

export default New;

const FormPage = styled.div`
  max-width: 45rem;
  margin: 0 auto;
`;
