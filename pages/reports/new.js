import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

const New = () => {
  return (
    <div className="container">
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
                <Form.Control as="textarea" rows={3} />
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
    </div>
  );
};

export default New;
