import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
// import Clarifai from 'clarifai';
const initialState=
{
    input: "",
    imageurl: "",
    box: {},
    route: "SignIn",
    isSignedIn: false,
    user: {
      id: "",
      name: "",
      email: "",
      enteries: "",
      joined: "",
    },

}
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    console.log("kavya");

    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        enteries: data.enteries,
        joined: data.joined,
      },
    });
    console.log("helooo");
  };

  calcFaceLocation = (data) => {
    const clarifaiFace =
      data["outputs"][0]["data"]["regions"][0]["region_info"]["bounding_box"];
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      left_col: clarifaiFace["left_col"] * width,
      top_row: clarifaiFace["top_row"] * height,
      right_col: width - clarifaiFace["right_col"] * width,
      bottom_row: height - clarifaiFace["bottom_row"] * height,
    };
  };
  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onButtonSubmit = () => {
    this.setState({ imageurl: this.state.input });
    console.log("clicked");

    const raw = JSON.stringify({
      user_app_id: {
        user_id: "kavya_01",
        app_id: "8191032524",
      },
      inputs: [
        {
          data: {
            image: {
              url: this.state.input,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key f6fcb574847e43e79aecd2a5cb709049",
      },
      body: raw,
    };

    fetch(
      "https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs",
      requestOptions
    )
      .then((response) =>{ 
        console.log(response)
        response.json()})
      .then((Response) => {
        if (Response) {
          fetch("http://localhost:3000/image", {
            method: "put",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify({ id: this.state.user.id }),
          });
        }
      })
      .then((result) => this.displayFaceBox(this.calcFaceLocation(result)))
      .catch((error) => console.log("error", error));
  }
      onRoutChange = (route) =>
        {
        console.log("i am here ")
        if (route === 'SignIn')
        {
          // this.setState({ isSignedIn: false, route: route });
          this.setState(initialState);
        }
        else if (route === 'home')
        {
          // this.setState({ isSignedIn: true, route: route });
          console.log('1')
          this.setState({ isSignedIn: true});
          console.log('2')
        }
        this.setState({ route: route});
      }
  render() {
    const { imageurl, box, route, isSignedIn } = this.state;

    console.log({ route, isSignedIn });
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRoutChange={this.onRoutChange} />
        {/* <SignIn loadUser={this.loadUser} onRoutChange={this.onRoutChange} /> */}
        {route === "home" ?
         
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              enteries={this.state.user.enteries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageurl={imageurl} />
          </div>
         :(
           route === "SignIn"
           ? <SignIn loadUser={this.loadUser} onRoutChange={this.onRoutChange} />
           : <Register loadUser={this.loadUser} onRoutChange={this.onRoutChange} />
        )}
      </div>
    );
  }
}
export default App;
