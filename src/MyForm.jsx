import { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }

  // Handle form input changes
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted to deez nutz:', this.state);
  }

  render() {
    return (
      <div>
        <h1><b>submit your details</b></h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;