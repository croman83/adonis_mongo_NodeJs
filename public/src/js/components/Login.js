import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

let passwordErrorText, emailErrorText;

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      passError: false,
      emailError: false,
    };
  }

  render() {
    let EmailError = this.state.emailError ? (<span className="error">{emailErrorText}</span>) : '';
    let PasError = this.state.passError ? (<span className="error">{passwordErrorText}</span>) : '';

    return (
      <div className="in">
        <div className="in-form">
          <h2 className="in-form_title">Login</h2>
          <div className="in-form_input">
            <label className="label">Email</label>
            <input type="text" className="input" id="loginEmail"/>
            {EmailError}
          </div>
          <div className="in-form_input">
            <label className="label">Password</label>
            <input type="text" className="input" id="loginPas"/>
            {PasError}
          </div>
          <div className="in-form_input">
            <button className="submit" onClick={()=>{this.sendData()}}>Login</button>
          </div>
        </div>
      </div>
    )
  }

  sendData() {
    this.setState({emailError:false});
    this.setState({passError:false});
    let errors = false;
    let data = {};
    data.email = document.getElementById('loginEmail').value;
    data.password = document.getElementById('loginPas').value;

    if(data.email.length === 0){
      emailErrorText = 'Fill email';
      errors = true;
      this.setState({emailError:true});
    } else if(!validateEmail(data.email)){
      emailErrorText = 'Uncorrect email';
      errors = true;
      this.setState({emailError:true});
    }
    if(data.password.length === 0){
      passwordErrorText = 'Fill password';
      errors = true;
      this.setState({passError:true});
    }
    if(!errors){
      axios.get('api/auth/me').then((response)=>{
        console.log(response)
      })
    }
  }

  componentDidMount() {
    showBody()
  }
}

function showBody() {
  let body = document.getElementsByTagName('body')[0];
  body.classList.remove('loading')
}

function validateEmail(email){
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default Login