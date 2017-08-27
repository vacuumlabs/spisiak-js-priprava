import React, { Component } from 'react';

class SmartMap extends Component {
    constructor(props) {
        super(props);
        this.storage = [];
    }

    set(coordinates, value) {

        if (this.storage[coordinates[0]] === undefined)
            this.storage[coordinates[0]] = [];

        this.storage[coordinates[0]][coordinates[1]] = value;
        return true;
    }

    get(coordinates) {
        if (this.storage[coordinates[0]] !== undefined)
            return this.storage[coordinates[0]][coordinates[1]];
        
        return undefined;
    }

    run() {
        let sm = new SmartMap();
        sm.set([1, 2], 'foo')
        sm.set([2, 3], 'bar')
        console.log(sm.get([1, 2])) // returns 'foo'<br />
        console.log(sm.get([2, 1])) // returns undefined or throws 'key error'
    }
    
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Smart Map</h1>
                </div>
                <p className="App-intro">
                    This code is executed. Check console log.
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

export default SmartMap;
