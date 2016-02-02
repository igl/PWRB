'use strict'

import { combineReducers } from 'redux'

import data from './data'
import chat from './chat'

export default combineReducers({
  data,
  chat
})
