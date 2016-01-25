import React from 'react'

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
                <h1>PWRB</h1>
                <p>{ message }</p>
            </div>
        )
    }
})

export default RootComponent
