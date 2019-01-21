import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';

//Since ManageCoursePage has two forms of exports (connected/nonConnected) lint throws an errors...this ignores it as we need the two exports
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={ManageCoursePage} />
        <Route path="course/:id" component={ManageCoursePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);