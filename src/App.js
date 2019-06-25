import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    const out =
      counters[index].value === 50 ? "display:block;" : counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleAdd = () => {
    const nextId = this.state.counters.length + 1;
    const counter =
      nextId > 10
        ? ""
        : this.setState({
            counters: [...this.state.counters, { id: nextId, value: 0 }]
          });

    return counter;
  };

  render() {
    console.log("App - Rendered");

    const scope = {
      styleAlert: {
        display: this.state.counters.length + 1 > 10 ? "block" : "none"
      }
    };

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onAdd={this.handleAdd}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
          <h5 style={scope.styleAlert}>Max counter is 10</h5>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
