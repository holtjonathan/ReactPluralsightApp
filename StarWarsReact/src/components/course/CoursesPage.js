import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

//CONTAINER COMPONENT
class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        //removes the need to say 'this.props.courses' down below...makes it easier to read
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>
            </div>
        );
    }
}

CoursesPage.propTypes = { 
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        //access course by saying this.props.courses up in the component
        courses: state.courses
    };
}

//which actions do you want to expose to your compoent?
function mapDispatchToProps(dispatch) {
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))

        //Maps all of the actions that sit in courseActions
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);