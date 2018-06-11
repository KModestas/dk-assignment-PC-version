import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class SubForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    userInput: {
      firstName: '',
      lastName: '',
      email: '',
      checked: false
    },
    errors: {
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      checkedError: '',
      categoryError: ''
    }
  }
    this.handleCheckBox = this.handleCheckBox.bind(this);
}


  handleCheckBox() {
    this.setState({
      userInput: {
        ...this.state.userInput, checked: !this.state.userInput.checked}
    })
  }

  handleChange = e => {
    this.setState({
      userInput: {
        ...this.state.userInput, [e.target.name]: e.target.value}
    })

    console.log(this.state)
  }

  validate = () => {
    let isError = false;
    const errors = {
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      checkedError: '',
      categoryError: ''
    }

    if(!this.state.userInput.firstName) {
      isError = true;
      errors.firstNameError = 'Please enter your first name'
    }

    if(!this.state.userInput.lastName) {
      isError = true;
      errors.lastNameError = 'Please enter your last name'
    }

    if(!this.state.userInput.email) {
      isError = true;
      errors.emailError = 'Please enter your email address'
    } else if (this.state.userInput.email.indexOf('@') === -1) {
      isError = true;
      errors.emailError = 'Email Address must contain an "@" symbol'
    }

    if(!this.state.userInput.checked) {
      isError = true;
      errors.checkedError = 'Please agree to the privacy policy and minimum age'
    }

    if(!this.props.categoryValid) {
      isError = true;
      errors.categoryError = 'Please select at least one category above'
    }

    if (isError) {
      this.setState({
        errors: {
          ...errors
        }
      });
    }

    return isError;
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);

    const err = this.validate();
      if (!err) {
      this.setState({
        userInput: {
          firstName: '',
          lastName: '',
          email: '',
          checked: false
        },
        errors: {
          firstNameError: '',
          lastNameError: '',
          emailError: '',
          checkedError: '',
          categoryError: ''
        }
      })
      this.props.history.push('/success');
    }
  }

  render() {
    return(
      <div>
      <form className="subform-container">

        {<p>{ this.state.errors.categoryError }</p>}

        <div className="Join-our-newsletter"></div>

        <div className="subform-inputs">
          <div className="fname-input">
            <input
              type="text"
              placeholder=" First Name*"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.userInput.firstName}
              />
              <p>{ this.state.errors.firstNameError }</p>
            </div>

            <div className="lname-input">
              <input
                type="text"
                placeholder=" Last Name *"
                name="lastName"
                onChange={this.handleChange}
                value={this.state.userInput.lastName}
              />
              <p>{ this.state.errors.lastNameError }</p>
            </div>

            <div className="email-input">
              <input
                type="text"
                placeholder=" Your email address *"
                name="email"
                onChange={this.handleChange}
                value={this.state.userInput.email}
              />
              <p>{ this.state.errors.emailError }</p>
            </div>

        <button onClick={this.onSubmit}>
          <img
            src={require('../assets/subscribe.png')}
            alt=""
            className="subscribe"
          />
        </button>

          <div className="termsAndConditions">
            <input
              type="checkbox"
              checked={this.state.userInput.checked}
              onClick={this.handleCheckBox}
            />

          <div className="iAgree"></div>

          </div>
            <p>{ this.state.errors.checkedError }</p>
        </div>
      </form>
    </div>
    );
  }
}



export default withRouter(SubForm);
