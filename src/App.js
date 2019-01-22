import React, { Component } from "react";
import "./App.css";
import WebRTCPeerConnectionWithServer from "./WebRTCPeerConnectionWithServer";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <WebRTCPeerConnection /> */}
                <WebRTCPeerConnectionWithServer />
                {/* <WebRTCDataChannel /> */}
            </div>
        );
    }
}

export default App;
