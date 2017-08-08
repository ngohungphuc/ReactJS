import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseActions";
class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onclickSave = this.onclickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onclickSave() {
    this.props.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return (
      <div key={index}>
        {course.title}
      </div>
    );
  }
  render() {
    return (
      <div>
        <h1>Course</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add courses</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="Submit" onClick={this.onclickSave} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  //access state in redux store
  return {
    courses: state.courses
  };
}

//determine what action available in component
function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
