class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    var newList = this.state.list.slice();
    newList.push("hello");
    this.setState({list:newList})
  }

  render() {
    let form;
    let todos;
    let element;
    let listItems;

    listItems = this.state.list.map((todo, i) => <li key={'todo-' + i}>{todo}</li>)
    todos = <ul>{listItems}</ul>

    form = <form>
            <Label/>
            <Information/>
            <input type="submit" value="Create" onClick={this.handleClick}/>
          </form>

    element = <div>{todos}{form}</div>
    return (<div>{element}</div>);
  }
}

var Label = function() {
  return <label>Add a new to do:</label>
}

var Information = function() {
  return <div>
      <Title/>
      <DueTime/>
    </div>
}

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({title:event.target.value})
  }

  render() {
    return (
      <p><input
        type="text"
        placeholder="Title"
        value={this.state.value}
        onChange={this.handleTitleChange}
        /></p>
    )
  }
}

var DueTime = function () {
  return <p><input type="text" placeholder="Time Due"/></p>
}

ReactDOM.render(
<App/>,
document.getElementById('app'))
