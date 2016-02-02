import React from 'react'

import 'styles/index.styl'

const { string } = React.PropTypes

const RootComponent = React.createClass({

    propTypes: {
        message: string.isRequired
    },

    getDefaultProps () {
        return {
            message: "The default message"
        }
    },

    render () {
        const { message } = this.props

        return (
            <div>
                <h1>Welcome to React-Redux</h1>
                <p>{ message }</p>
                <a className="button" href="/">&#9664; Back to Static Page</a>&nbsp;
                <a className="button" href="view-source:localhost:4000/app">Show me Server-Rendered Code</a>
            </div>
        )
    }
})

export default RootComponent
