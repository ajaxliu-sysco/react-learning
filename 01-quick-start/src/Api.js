import React, { Component } from 'react'

class App extends Component {
    state = {
        data: {},
    }
    componentDidMount() {
        const url =
            'http://127.0.0.1:8080/v1/hello'
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    data: result,
                })
            })
    }

    render() {
        const { data } = this.state
        var str = JSON.stringify(data)
        return <p>{str}</p>
    }
}

export default App