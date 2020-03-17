import React from "react";

class BadgeForm extends React.Component {
  state = {};
  //   handleChange = e => {
  //     // console.log({ value: e.target.value });
  //     this.setState({
  //       [e.target.name]: e.target.value
  //     });
  //   };

  handleClick = e => {
    console.log("click");
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log("submit");
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="">Nombre</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="nombre"
              className="form-control"
              value={this.props.formValues.nombre}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Apelllido</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="apellido"
              className="form-control"
              value={this.props.formValues.apellido}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Job title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="job"
              className="form-control"
              value={this.props.formValues.job}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Tuiter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="tuiter"
              className="form-control"
              value={this.props.formValues.tuiter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
