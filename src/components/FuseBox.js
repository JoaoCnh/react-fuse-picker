import React from "react";

export default class FuseBox extends React.Component {
  constructor(props) {
    super(props);
    this.keyEvent = event => {
      if (!this.props.isKeyPressed(event)) {
        return;
      }

      event.preventDefault();
      this.setState({ isOpen: !this.state.isOpen });
    };
  }

  state = {
    isOpen: false,
  };

  componentDidMount() {
    document.body.addEventListener("keydown", this.keyEvent);
  }

  componentWillUnmount() {
    document.body.removeEventListener("keydown", this.keyEvent);
  }

  _onClose() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div className="FuseBackground">
        {this.props.popup(this.state.isOpen, this.onClose.bind(this))}
      </div>
    );
  }
}

FuseBox.defaultProps = {
  isKeyPressed: () => false,
  popup: () => null
};
