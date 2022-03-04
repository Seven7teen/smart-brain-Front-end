import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';


import Particles from "react-tsparticles";
import Clarifai from 'clarifai';

// const app = new Clarifai.App({
//   apiKey: "15ab0d611be645b988167234275d33b5",
// });

const particlesOptions = {
  fpsLimit: 30,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
}

const initialState = {
  input: '',
  imageUrl: '',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      entries: data.entries,
      joined: data.joined
    }})
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});

    fetch('http://localhost:3000/image', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.state.user.id
      })
    })
    .then(response => response.json())
    .then(count => {
      this.setState(Object.assign(this.state.user, {entries: count}))
    })
    .catch(err => {
      console.log(err)
    })

    // app.models.predict(Clarifai.COLOR_MODEL, this.state.input).then(
    //   function (response) {
    //     console.log('hi', response);
    //   },
    //   function (err) {
    //   }
    // );
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      // this.setState({isSignedIn: false});
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route, imageUrl } = this.state;
    return (
      <div className="App">
      <Particles id="tsparticles" className = 'particles'
      options={particlesOptions}
        />
        <Navigation isSignedIn = { isSignedIn } onRouteChange = { this.onRouteChange }/>
        { route === 'home' ? 
            <div>
              <Logo />
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm onInputChange = { this.onInputChange } onButtonSubmit = { this.onButtonSubmit }/>
              <FaceRecognition imageUrl = { imageUrl }/>
            </div> :
            ( route === 'register' ?
             <Register loadUser = {this.loadUser} onRouteChange = { this.onRouteChange }/> :
             <SignIn loadUser = {this.loadUser} onRouteChange = { this.onRouteChange }/> )
        }
      </div>
    );
  }
}

export default App;
