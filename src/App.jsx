import React, { Component } from 'react'
import "./App.css"

class Wine extends Component {
    state = {
        lastKey: 1,
        color: "qirmizi",
        className: "app-mavi"
    }

    onKeypress = (event) => {
        if (event.key == 1) {
            this.setState({ lastKey: 2 });
            this.setState({ color: "mavi" });
            this.setState({ className: "app-qirmizi" })
        } else {
            this.setState({ lastKey: 1 });
            this.setState({ color: "qirmizi" });
            this.setState({ className: "app-mavi" })
        }

    }
    componentDidMount = () => {
        window.addEventListener("keypress", this.onKeypress);
    }
    render() {

        return (
            <>
                <div className={this.state.className}>
                    <p>
                        {this.state.color} reng uchun {this.state.lastKey} klavisine basin
                    </p>

                </div>

            </>

        )
    }
}

export default Wine