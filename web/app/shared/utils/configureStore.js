/*
 * Universal Store Factory
 * appends store-middlewares
 */

import { createStore, applyMiddleware, compose }  from 'redux'

import multi  from 'redux-multi'
import thunk  from 'redux-thunk'
import string from 'redux-string'

const enhancer = [ applyMiddleware(multi, thunk, string) ]

if (__DEV__) {
	// enhancer.push(require('common/utils/DevTools').instrument())
}

const finalCreateStore = compose(...enhancer)(createStore)

export default function configureStore (reducers, initialState) {
	return finalCreateStore(reducers, initialState)
}
