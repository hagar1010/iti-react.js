import React from 'react'

export default class ClassCounter extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <section>
                <br/>
                <br/>
                <h1>CLASS COMPONANT</h1>
                <br />
                <div className="counter">
                    <button onClick={() => {
                        this.setState({ counter: this.state.counter + 1 })
                    }}>+</button>

                    <p>{this.state.counter}</p>

                    <button onClick={() => {
                        this.state.counter == 0 ? null :
                            this.setState({ counter: this.state.counter - 1 })
                    }}>-</button>
                </div>
            </section>
        )
    }
}
