import teamReducer from './team.js'
import practicReducer from './practic.js'
import serviceReducer from './service.js'
import newsReducer from './news.js'
import {configureStore} from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    teams: teamReducer,
    practic: practicReducer,
    service: serviceReducer,
    news: newsReducer
  },
})