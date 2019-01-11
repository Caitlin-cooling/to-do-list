var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      list: [],
      title: "",
      date: ""
    };
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleTitleChange = _this.handleTitleChange.bind(_this);
    _this.handleDateChange = _this.handleDateChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "handleClick",
    value: function handleClick(e) {
      console.log(this.state.date);
      e.preventDefault();

      var newList = this.state.list.slice();
      newList.push(this.state.title);
      this.setState({ list: newList });
    }
  }, {
    key: "handleTitleChange",
    value: function handleTitleChange(e) {
      this.setState({ title: event.target.value });
    }
  }, {
    key: "handleDateChange",
    value: function handleDateChange(e) {
      this.setState({ date: event.target.value });
    }
  }, {
    key: "render",
    value: function render() {
      var form = void 0;
      var todos = void 0;
      var element = void 0;
      var listItems = void 0;

      listItems = this.state.list.map(function (todo, i) {
        return React.createElement(
          "li",
          { key: 'todo-' + i },
          todo
        );
      });
      todos = React.createElement(
        "ul",
        null,
        listItems
      );

      form = React.createElement(
        "form",
        null,
        React.createElement(Label, null),
        React.createElement(Information, {
          title: this.state.title,
          handleTitleChange: this.handleTitleChange,
          date: this.state.date,
          handleDateChange: this.handleDateChange
        }),
        React.createElement("input", { type: "submit", value: "Create", onClick: this.handleClick })
      );
      element = React.createElement(
        "div",
        null,
        todos,
        form
      );
      return React.createElement(
        "div",
        null,
        element
      );
    }
  }]);

  return App;
}(React.Component);

var Label = function Label() {
  return React.createElement(
    "label",
    null,
    "Add a new to do:"
  );
};

var Information = function Information(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(Title, { title: props.title, handleTitleChange: props.handleTitleChange }),
    React.createElement(DueTime, { time: props.time, handleDateChange: props.handleDateChange })
  );
};

var Title = function Title(props) {
  return React.createElement(
    "p",
    null,
    React.createElement("input", {
      type: "text",
      placeholder: "Title",
      value: props.title,
      onChange: props.handleTitleChange })
  );
};

var DueTime = function DueTime(props) {
  return React.createElement(
    "p",
    null,
    React.createElement("input", {
      type: "text",
      placeholder: "Time Due",
      value: props.date,
      onChange: props.handleDateChange
    })
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));