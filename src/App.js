import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      provider: false,
      seeker: false,
      name: '', 
      email: '',
      zipCode: '',
      peopleNum: '',
      allowPets: '',
      dayNum: '',
      successMessage: ''
    }

    this.setProvider = this.setProvider.bind(this);
    this.setSeeker = this.setSeeker.bind(this);
    this.sendProviderInfo = this.sendProviderInfo.bind(this);
    this.sendSeekerInfo = this.sendSeekerInfo.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  setProvider() {
    this.setState({
      provider: true
    });
    // console.log('set provider');
  }

  setSeeker() {
    this.setState({
      seeker: true
    });
    // console.log('set seeker');
  }

  onChange (e) {
    // console.log('e.target', e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  sendProviderInfo(e) {
    e.preventDefault();
    
    // console.log('this.state: ', this.state);
    var sentObj = {};
    sentObj['role'] = true;
    sentObj['name'] = this.state.name;
    sentObj['email'] = this.state.email;
    sentObj['zipCode'] = parseInt(this.state.zipCode);
    sentObj['peopleNum'] = parseInt(this.state.peopleNum);
    sentObj['allowPets'] = this.state.allowPets === '1' ? true : false;
    sentObj['dayNum'] = parseInt(this.state.dayNum);

    // console.log('sentObj ', sentObj);

    axios.post('http://18.216.91.40', sentObj)
      .then((res) => {
        console.log('successfully sent');
      })
      .catch((error) => {
        console.log('err', error);
      });

  }

  sendSeekerInfo(e) {
    e.preventDefault();    
    // console.log('this.state: ', this.state);

    var sentObj = {};
    sentObj['role'] = false;
    sentObj['name'] = this.state.name;
    sentObj['email'] = this.state.email;
    sentObj['zipCode'] = parseInt(this.state.zipCode);
    sentObj['peopleNum'] = parseInt(this.state.peopleNum);
    sentObj['allowPets'] = this.state.allowPets === '1' ? true : false;
    sentObj['dayNum'] = parseInt(this.state.dayNum);    

    console.log('sentObj ', sentObj);

    this.setState({
      successMessage: "Please contact weiyilee17@gmail.com for your room!"
    });

    // axios.get('http://18.216.91.40', {
    //   // "Access-Control-Allow-Origin": '*',
    //   "Access-Control-Allow-Origin": 'http://18.216.91.40',
    //   params: {
    //     sentString : JSON.stringify(sentObj)
    //   }
    // })
    //   .then((res) => {
        

    //   })
    //   .catch((error) => {

    //   });

  }

  render() {

    if (this.state.provider === false && this.state.seeker === false) {
      return (
        <div className="App">
          <p className="App-intro">
            Welcome to safety nest!
            Do you want to provide rooms or look for rooms?
          </p>
          <button className="provider" onClick={this.setProvider}>I want to provide rooms!</button>
          <button className="seeker" onClick={this.setSeeker}>I want to look for rooms!</button>
  
        </div>
      );

    } else if (this.state.provider) {
      return (
        <div>

          <div id="pricing" className="container-fluid">
            <div className="text-center">
              <h2>Provider</h2>
              <h4>Sign up here</h4>
            </div>
            <div className="row slideanim">
              <div className="col-sm-3 col-xs-12">
                <div className="panel panel-default text-center">
                  <div className="panel-heading">

                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="panel panel-default text-left">

                  <div className="panel-body">

                    <div>

                    <form>
                    <label>
                    Name :
                    <input type='text' name='name'
                    value={this.state.name} placeholder='Enter your name'onChange={this.onChange}></input>
                    </label>
                    <br />
                    <label>
                    Email :
                    <input type='text' placeholder='Enter your email' name='email'
                    value={this.state.email} onChange={this.onChange}></input>
                    </label>
                    <br />
                    <label>
                    Zip Code :
                    <input type='text' placeholder='Enter your zip code' name='zipCode'
                    value={this.state.zipCode} onChange={this.onChange}></input>
                    </label>
                    <br />
                    <label>
                    Days you are willing to provide : 
                    <input type='text' placeholder='Enter numbers' name='dayNum'
                    value={this.state.dayNum} onChange={this.onChange}></input>
                    </label>
                    <br />
                    <label>
                    Number of people :
                    <input type='text' placeholder='Enter numbers' name=
                    'peopleNum' value={this.state.peopleNum}
                    onChange={this.onChange}></input>
                    </label>
                    <br />
                    <label>
                    Do you have pets? Enter 1 for yes and 0 for no : 
                    <input type='text' placeholder='0 or 1' name='allowPets'
                    value={this.state.allowPets} onChange={this.onChange}></input>
                    </label>
                    <br />

                    </form>
                    </div>

                  </div>
                  <div className="panel-footer text-center">

                    <input type='submit' value='Sign up as a Seeker'
                    onClick={this.sendProviderInfo}></input>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-xs-12">
                <div className="panel panel-default text-center">
                  <div className="panel-heading">
                  </div>

                </div>
              </div>
            </div>
          </div>


          {/* <p>Selected provider</p>

          <form>
            <label>
              Name : 
              <input type='text' placeholder='Enter your name' name='name' value={this.state.name} onChange={this.onChange}></input>
            </label>
            <br />
            <label>
              Email : 
              <input type='text' placeholder='Enter your email' name='email' value={this.state.email} onChange={this.onChange}></input>
            </label>
            <br />            
            <label>
              Zip Code : 
              <input type='text' placeholder='Enter your zip code' name='zipCode' value={this.state.zipCode} onChange={this.onChange}></input>
            </label>
            <br />            
            <label>
              Days you are willing to provide : 
              <input type='text' placeholder='Enter number of days' name='dayNum' value={this.state.dayNum} onChange={this.onChange}></input>
            </label>
            <br />            
            <label>
              Number of people : 
              <input type='text' placeholder='Enter the number of people' name= 'peopleNum' value={this.state.peopleNum} onChange={this.onChange}></input>
            </label>
            <br />
            <label>
              Do you allow pets? Enter 1 for yes and 0 for no
              <input type='text' placeholder='0 or 1' name='allowPets' value={this.state.allowPets} onChange={this.onChange}></input>
            </label>
            <br />
            <input type='submit' value='Send privider information to server' onClick={this.sendProviderInfo}></input>
          </form>
          <p>{this.state.successMessage}</p> */}
          <p>{this.state.successMessage}</p>
        </div>
      );
    } else if (this.state.seeker) {
      return (
        <div>

          <div id="pricing" className="container-fluid">
            <div className="text-center">
              <h2>Seeker</h2>
              <h4>Sign up here</h4>
            </div>
            <div className="row slideanim">
              <div className="col-sm-3 col-xs-12">
                <div className="panel panel-default text-center">
                  <div className="panel-heading">

                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="panel panel-default text-left">

                  <div className="panel-body">

                    <div>

                    <form>
                    <label>
                    Name :
                    <input type='text' name='name'
                    value={this.state.name} placeholder='Enter your name'onChange={this.onChange}></input>
                    </label>
                    <br />
                    <label>
                    Email :
                    <input type='text' placeholder='Enter your email' name='email'
                    value={this.state.email} onChange={this.onChange}></input>
                    </label>
                    <br />
                    <label>
                    Zip Code :
                    <input type='text' placeholder='Enter your zip code' name='zipCode'
                    value={this.state.zipCode} onChange={this.onChange}></input>
                    </label>
                    <br />
                    <label>
                    Days you are going to stay : 
                    <input type='text' placeholder='Enter numbers' name='dayNum'
                    value={this.state.dayNum} onChange={this.onChange}></input>
                    </label>
                    <br />
                    <label>
                    Number of people :
                    <input type='text' placeholder='Enter numbers' name=
                    'peopleNum' value={this.state.peopleNum}
                    onChange={this.onChange}></input>
                    </label>
                    <br />
                    <label>
                    Do you allow pets? Enter 1 for yes and 0 for no : 
                    <input type='text' placeholder='0 or 1' name='allowPets'
                    value={this.state.allowPets} onChange={this.onChange}></input>
                    </label>
                    <br />

                    </form>
                    </div>

                  </div>
                  <div className="panel-footer text-center">

                    <input type='submit' value='Sign up as a Seeker'
                    onClick={this.sendSeekerInfo}></input>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-xs-12">
                <div className="panel panel-default text-center">
                  <div className="panel-heading">
                  </div>

                </div>
              </div>
            </div>
          </div>
          <h4>{this.state.successMessage}</h4>
          {/*
          <p>Selected seeker</p>

          <form>
            <label>
              Name : 
              <input type='text' placeholder='Enter your name' name='name' value={this.state.name} onChange={this.onChange}></input>
            </label>
            <br />
            <label>
              Email : 
              <input type='text' placeholder='Enter your email' name='email' value={this.state.email} onChange={this.onChange}></input>
            </label>
            <br />            
            <label>
              Zip Code : 
              <input type='text' placeholder='Enter your zip code' name='zipCode' value={this.state.zipCode} onChange={this.onChange}></input>
            </label>
            <br />
            <label>
              Days you are going to stay : 
              <input type='text' placeholder='Enter number of days' name='dayNum' value={this.state.dayNum} onChange={this.onChange}></input>
            </label>
            <br />            
            <label>
              Number of people : 
              <input type='text' placeholder='Enter the number of people' name= 'peopleNum' value={this.state.peopleNum} onChange={this.onChange}></input>
            </label>
            <br />
            <label>
              Do you allow pets? Enter 1 for yes and 0 for no
              <input type='text' placeholder='0 or 1' name='allowPets' value={this.state.allowPets} onChange={this.onChange}></input>
            </label>
            <br />
            <input type='submit' value='Send seeker information to server' onClick={this.sendSeekerInfo}></input>
          </form>
          <p>{this.state.successMessage}</p>

          */}
        </div>
      );
    }

  }
}

export default App;
