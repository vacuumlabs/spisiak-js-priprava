import React, { Component } from 'react';

class SmartMap2 extends Component {
    constructor(props) {
        super(props);
        this.storage = new Map();
    }

    set(coordinates, value) {
        this.storage.set(coordinates.toString(), value);
        return true;
    }

    get(coordinates) {
        if (this.storage.has(coordinates.toString())) {
            return this.storage.get(coordinates.toString());
        }
        else
            return undefined;
    }

    run() {
        let sm = new SmartMap2();
        sm.set([1, 2], 'foo')
        sm.set([2, 3], 'bar')
        console.log(sm.get([1, 2])) // returns 'foo'
        console.log(sm.get([2, 1])) // returns undefined or throws 'key error'
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1> Smart Map with Map()</h1>
                </div>
                <p className="App-intro">
                    Click this button to get this code is executed. Check console log.
                <br />
                    <button onClick={this.run}>
                        Run code
                </button>
                </p>
                <pre>
                    sm = new SmartMap2(); <br />
                    sm.set([1, 2], 'foo') <br />
                    sm.set([2, 3], 'bar')<br />
                    console.log(sm.get([1, 2])) // returns 'foo'<br />
                    console.log(sm.get([2, 1])) // returns undefined or throws 'key error'
                </pre>
            </div>
        );
    }
}


export default SmartMap2;
