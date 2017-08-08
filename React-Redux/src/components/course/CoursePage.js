import React, { PropType } from "react";
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
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }
  render() {
    return (
      <div>
        <h1>Course</h1>
        <h2>Add courses</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="Submit" onClick={this.onClickSave} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //access state in redux store
  return {
    courses: state.courses
  };
};
export default connect(mapStateToProps)(CoursesPage);
