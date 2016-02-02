import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Containers
import Root from 'shared/containers/Root'
import Home from 'shared/containers/home/Home'
import { NotFound } from 'shared/containers/errors'

// Route table
export default (
    <Route path='/' component={ Root }>
        <IndexRoute component={ Home }/>
        <Route path='*' component={ NotFound }/>
    </Route>
)
