// import { Component } from 'react';


// class QuizForm extends Component {
//     state = {

//     }

//     handleChange = (evt) => {

//     };

//     handleSubmit = async (evt) => {

//     };

//     render() {
//         return(
//             <div className="form-container" >
//                 Form Content
//             </div>
//         )
//     }
// }

// export default QuizForm


// ---------------------------------- old code below 

// import React, { Component } from "react";

// class QuizForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       sun: "",
//       price: "",
//       water: "",
//     };
//     this.onValueChange = this.onValueChange.bind(this);
//     this.formSubmit = this.formSubmit.bind(this);
//   }

//   onValueChange(event) {
//     this.setState({
//       selectedOption: event.target.value,
//       selectedOption2: event.target.value
//     });
//   }

//   formSubmit(event) {
//     event.preventDefault();
//     console.log(this.state.selectedOption)
//   }

//   render() {
//     return (
//       <form onSubmit={this.formSubmit}>
//       <span>How much sun exposure can you give your plant?</span>
//         <div className="radio">
//           <label>
//             <input name="sun"
//               type="radio"
//               value="Shade"
//               checked={this.state.selectedOption === "Shade"}
//               onChange={this.onValueChange}
//             />
//             Shade
//           </label>
//         </div>
//         <div className="radio">
//           <label>
//             <input name="sun"
//               type="radio"
//               value="Partial Sun"
//               checked={this.state.selectedOption === "Partial Sun"}
//               onChange={this.onValueChange}
//             />
//             Partial Sun
//           </label>
//         </div>

//         <div className="radio">
//         <label>
//             <input name="sun"
//               type="radio"
//               value="Full Sun"
//               checked={this.state.selectedOption === "Full Sun"}
//               onChange={this.onValueChange}
//             />
//             Full Sun
//           </label>
//         </div>
//         <span>What is the price range for your plant?</span>
//         <div className="radio">
//           <label>
//             <input name="price"
//               type="radio"
//               value="$0-20"
//               checked={this.state.selectedOption2 === "0-20"}
//               onChange={this.onValueChange}
//             />
//             $0 - $20
//           </label>
//         </div>
//         <div className="radio">
//           <label>
//             <input name="price"
//               type="radio"
//               value="$20-40"
//               checked={this.state.selectedOption2 === "$21-40"}
//               onChange={this.onValueChange}
//             />
//             $20 - $40
//           </label>
//         </div>

//         <div className="radio">
//         <label>
//             <input name="price"
//               type="radio"
//               value="$40 and above"
//               checked={this.state.selectedOption2 === "$40 and above"}
//               onChange={this.onValueChange}
//             />
//             $40 and above
//           </label>
//         </div>

//         <span>What watering frequency can you manage for your plant?</span>
//         <div className="radio">
//           <label>
//             <input name="water"
//               type="radio"
//               value="Low"
//               checked={this.state.selectedOption2 === "Low"}
//               onChange={this.onValueChange}
//             />
//             Low
//           </label>
//         </div>
//         <div className="radio">
//           <label>
//             <input name="water"
//               type="radio"
//               value="Medium"
//               checked={this.state.selectedOption2 === "Medium"}
//               onChange={this.onValueChange}
//             />
//             Medium
//           </label>
//         </div>

//         <div className="radio">
//         <label>
//             <input name="water"
//               type="radio"
//               value="High"
//               checked={this.state.selectedOption2 === "High"}
//               onChange={this.onValueChange}
//             />
//             High
//           </label>
//         </div>

//         <div>
//           Selected sun option is : {this.state.selectedOption}
//           <br />
//           Selected Price Option is :  {this.state.selectedOption2}
//         </div>
//         <button className="btn btn-default" type="submit">
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

// export default QuizForm;




// ---------------------------------- new code 

import React, { Component } from "react";

function QuizForm(){

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
        <span>What is the price range for your plant?</span>
        {/* <div className="radio">
          <label>
            <input name="price"
              type="radio"
              value="$0-20"
              checked={state.price === "$0-20"}
              onChange={handleChange}
            />
            $0 - $20
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="price"
              type="radio"
              value="$21-40"
              checked={state.price === "$21-40"}
              onChange={handleChange}
            />
            $20 - $40
          </label>
        </div>

        <div className="radio">
        <label>
            <input name="price"
              type="radio"
              value="$40 and above"
              checked={state.price === "$40 and above"}
              onChange={handleChange}
            />
            $40 and above
          </label>
        </div> */}
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

        <span>Do you want a pet friendly plant?</span>
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

        <div>
          Selected sun option is : {state.sun}
          <br />
          Selected Price Option is :  {state.price}
          <br />
          Selected Water Option is :  {state.water}
          <br />
          Selected Pet Option is :  {state.pet}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>   
      </form>
    );
  }


export default QuizForm;



