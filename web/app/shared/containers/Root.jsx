import React from 'react'

export default React.createClass({
    displayName: 'IndexContainer',
    render () {
        return (
            <div className='page-shell'>
                { this.props.children }
            </div>
        )
    }
})
