import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseForm from './CourseForm';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
    constructor (props, context) {
        super (props, context);

        this.state={
            course: Object.assign({}, props.course),
            errors: {}
        };
    }

    render() {
        return (
            <CourseForm 
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    let course =  {
        id: "",
        title: "",
        watchHref: "",
        authorId: "",
        length: "",
        category: ""
      };
    
      //Transform state from AuthorApi data layout to what the SELECT needs
      const authorsFormattedForDropdown = state.authors.map(author => {
          return {
            value:author.id,
            text: author.firstName + ' ' + author.lastName
          };
      });

    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

//Will make all actions defined in CourseActions available to this container component
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);