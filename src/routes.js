import React from 'react'
import {Route, IndexRedirect} from 'react-router';
import {END_POINTS} from './constants/EndPoints';
import Application from './containers/Root/App';
import WithSideNav from './containers/Root/App/WithSideNav';
import Watch from './containers/Root/App/WithSideNav/Watch';
import About from './containers/Root/App/StaticContent/About';
import Help from './containers/Root/App/StaticContent/Help';
import Terms from './containers/Root/App/StaticContent/Terms';
import Privacy from './containers/Root/App/StaticContent/Privacy';
import Download from './containers/Root/App/StaticContent/SEO/Download';
import Repeat from './containers/Root/App/StaticContent/SEO/Repeat';


const router =
    <Route path="/" component={Application}>
        <IndexRedirect to={END_POINTS.WATCH}/>
        <Route component={WithSideNav}>
            <Route path={END_POINTS.WATCH} component={Watch}/>
        </Route>
        <Route path={END_POINTS.WATCH} component={Watch} />
        <Route path={END_POINTS.ABOUT} component={About} />
        <Route path={END_POINTS.CONTACT} component={Watch} />
        <Route path={END_POINTS.HELP} component={Help} />
        <Route path={END_POINTS.TERMS} component={Terms} />
        <Route path={END_POINTS.PRIVACY} component={Privacy} />
        <Route path={END_POINTS.SEO_DOWNLOAD} component={Download} />
    </Route>;

export default router;