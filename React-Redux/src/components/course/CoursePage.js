import React, { PropType } from "react";

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
    alert(`Saving ${this.state.course.title}`);
    debugger;
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

export default CoursesPage;
