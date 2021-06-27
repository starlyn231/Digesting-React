import React, { Component } from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export class MasterForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
        currentStep: 1,
        email: '',
        username: '',
        password: '',
        }


      }

      //Handle function:
handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
    [name]: value
    });
    };

    handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n
    Email: ${email} \n
    Username: ${username} \n
    Password: ${password}`);
    };


      
      next = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
        currentStep: currentStep
        });
        };

        prev = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
        currentStep: currentStep
        });
        };

        
   //the functions for our button

previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep > 1) {
    return (
    <button
    className="btn btn-secondary"
    type="button"
    onClick={this.prev}
    >
    Previous
    </button>
    );
    }
    return null;
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 3) {
        return (<button
className="btn btn-primary float-right"
type="button"
onClick={this.next}
>
Next
</button>
);
}
return null;
}


    render() {
 
        return (
         <div className="wizard">
<h1>React Wizard Form</h1>
<p>Step {this.state.currentStep} </p>

<form onSubmit={this.handleSubmit}>

<Step1 currentStep={this.state.currentStep} 
handleChange={this.handleChange}
email={this.state.email} />

<Step2 currentStep={this.state.currentStep}
handleChange={this.handleChange}
username={this.state.username}
/>

<Step3 currentStep={this.state.currentStep}
handleChange={this.handleChange}
password={this.state.password}
/>
{this.previousButton()}
{this.nextButton()}
</form>
</div>
           
        )
    }
}

export default MasterForm
