import React from 'react'
import {Route, IndexRedirect} from 'react-router';
import Application from './containers/Root/App'
import Watch from './containers/Root/App/Watch'

const router =
    <Route path="/" component={Application}>
        <IndexRedirect to="watch"/>
        <Route path="watch" component={Watch} />
    </Route>

export default router;