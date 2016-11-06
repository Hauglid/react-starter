import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
        this.increaseCounter = this.increaseCounter.bind(this);
    }

    increaseCounter() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>

                <button onClick={this.increaseCounter}>
                    Counter: {this.state.count}
                </button>
            </div>
        );
    }
}
export default Counter;