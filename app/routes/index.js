import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
import Home from './Pages/Home';
import StudentServices from './Pages/StudentServices';
import LoanSupport from './Pages/LoanSupport';
import ExamPrep from './Pages/ExamPrep';
import UserProfile from './Pages/UserProfile';
import Notifications from './Pages/Notifications';
import Settings from './Pages/Settings';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Error404 from './Pages/Error404';
import ComingSoon from './Pages/ComingSoon';

// ----------- Layout Imports ---------------
import { DefaultNavbar } from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';

//------ Route Definitions --------
export const RoutedContent = () => {
    return (
        <Switch>
            {/* Default redirect to Home */}
            <Redirect from="/" to="/home" exact />
            
            {/* VidyaAssist Specific Pages */}
            <Route path="/home" exact component={Home} />
            <Route path="/student-services" exact component={StudentServices} />
            <Route path="/loan-support" exact component={LoanSupport} />
            <Route path="/exam-prep" exact component={ExamPrep} />
            <Route path="/profile" exact component={UserProfile} />
            <Route path="/notifications" exact component={Notifications} />
            <Route path="/settings" exact component={Settings} />
            
            {/* Auth Pages */}
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />

            {/* Coming Soon */}
            <Route path="/coming-soon" exact component={ComingSoon} />

            {/* 404 Page */}
            <Route component={Error404} path="/pages/error-404" />

            {/* 404 Fallback */}
            <Redirect to="/pages/error-404" />
        </Switch>
    );
};

//------ Custom Layout Parts --------
export const RoutedNavbars  = () => (
    <Switch>
        <Route component={DefaultNavbar} />
    </Switch>
);

export const RoutedSidebars = () => (
    <Switch>
        <Route component={DefaultSidebar} />
    </Switch>
);
