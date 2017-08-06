import React, { PropType } from "react";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: null }
    };
  }

  render() {
    return (
      <div>
        <h1>Course</h1>
        <h2>Add courses</h2>
        <input
          type="text"
          onChange="{this.onTitleChange}"
          value="{this.state.course.title}"
        />

        <input type="submit" value="Submit" onClick="{this.onClickSave}" />
      </div>
    );
  }
}

export default CoursesPage;