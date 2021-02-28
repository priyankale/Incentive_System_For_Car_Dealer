import React, { Component } from "react";
import axios from "axios";
class UpdateCarDetailsComponent extends Component {
  state = {
    id: "",
    bName: "",
    mName: "",
    color: "",
    price: "",
    bookingDate: "",


  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8686/api/getCar/${this.props.match.params.id}`
      )
      .then((result) => {
        this.setState({
          id: result.data.id,
          bName: result.data.bName,
          mName: result.data.mName,
          color: result.data.color,
          price: result.data.price,
          bookingDate: result.data.bookingDate,


        });
      });


  }
  handleSubmit = async (event) => {
    event.preventDefault();

    let car = { bName: this.state.bName, bookingDate: this.state.bookingDate, color: this.state.color, mName: this.state.mName, price: this.state.price };
    console.log(car)
    await axios.put(`http://localhost:8686/api/updateCarDetails/${this.state.id}`, car);
    this.props.history.push("/cars");
  };
  render() {
    return (
      <div className="customBackground">
        <div className="Login">
          <form onSubmit={this.handleSubmit} className="form-style">
            <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Update Car</h4>
            <div className="form-group mr2">
              <input
                type="text"
                className="form-control"
                id="id"
                placeholder="Enter Car Id"
                value={this.state.id}
                readOnly
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="bName"
                placeholder="Enter Brand Name"
                value={this.state.bName}
                onChange={(event) =>
                  this.setState({ bName: event.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="bookingDate"
                placeholder="Enter Booking Date"
                value={this.state.bookingDate}
                onChange={(event) =>
                  this.setState({ bookingDate: event.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="color"
                placeholder="Enter color"
                value={this.state.color}
                onChange={(event) =>
                  this.setState({ color: event.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="mName"
                placeholder="Enter model Name"
                value={this.state.mName}
                onChange={(event) =>
                  this.setState({ mName: event.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Enter Price"
                value={this.state.price}
                onChange={(event) =>
                  this.setState({ price: event.target.value })
                }
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update Car
        </button>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateCarDetailsComponent;