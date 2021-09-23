import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import {Col, Container, Row} from 'react-bootstrap';
import './QuizForm.css';
import {
    Link
  } from "react-router-dom";

 
function QuizForm(props){

    const [state, setState] = React.useState({
        sun: "",
        price: "",
        water: "",
        pet: "",
      })

      function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }

  
    return (
      
      <Container>
      <Row>
      <Col lg={8} md={8} sm={12}>
      
      <form>
      <span>How much sun exposure can you give your plant?</span>
        <div className="radio">
          <label>
            <input 
              name="sun"
              type="radio"
              value="Shade"
              checked={state.sun === "Shade"}
              onChange={handleChange}
            />
            Shade
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="sun"
              type="radio"
              value="Partial Sun"
              checked={state.sun === "Partial Sun"}
              onChange={handleChange}
            />
            Partial Sun
          </label>
        </div>

        <div className="radio">
        <label>
            <input name="sun"
              type="radio"
              value="Full Sun"
              checked={state.sun === "Full Sun"}
              onChange={handleChange}
            />
            Full Sun
          </label>
        </div>
        <span>What is the maximum price you would pay for a plant?</span>
       
        <div className="radio">
          <label>
            <input
              name="price"     
              type="text"
              value={state.price}
              onChange={handleChange}
            />
          </label>
        </div>


        <span>What watering frequency can you manage for your plant?</span>
        <div className="radio">
          <label>
            <input name="water"
              type="radio"
              value="Low"
              checked={state.water === "Low"}
              onChange={handleChange}
            />
            Low
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="water"
              type="radio"
              value="Medium"
              checked={state.water === "Medium"}
              onChange={handleChange}
            />
            Medium
          </label>
        </div>

        <div className="radio">
        <label>
            <input name="water"
              type="radio"
              value="High"
              checked={state.water === "High"}
              onChange={handleChange}
            />
            High
          </label>
        </div>

        <span>Do you need a pet friendly plant?</span>
        <div className="radio">
          <label>
            <input name="pet"
              type="radio"
              value="true"
              checked={state.pet === "true"}
              onChange={handleChange}
            />
            Yes
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="pet"
              type="radio"
              value="false"
              checked={state.pet === "false"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <Link className="linkBtn" to={{
            pathname: '/recommendations/show',
            search: '',
            state: state
          }}><Button>Submit</Button></Link>
      </form>
      
        </Col>
       
      </Row>
      </Container>
      
    );
  }


export default QuizForm;



