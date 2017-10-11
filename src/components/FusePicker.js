import React from "react";
import Fuse from "fuse.js";

import FuseInfo from "./FuseInfo";

export default class FusePicker extends React.Component {
  constructor(props) {
    super(props);

    this.fuse = new Fuse(props.items, props.fuseOptions);
  }

  state = {
    selectedIndex: 0,
    items: []
  };

  _selectIndex(selectedIndex) {
    this.props.onChangeHighlighted(this.state.items[selectedIndex]);
    this.setState({ selectedIndex });
  }

  _moveUp() {
    if (this.state.selectedIndex > 0) {
      this._selectIndex(--this.state.selectedIndex);
      return;
    }

    if (!this.props.cycleToTop) {
      return;
    }

    this._selectIndex(this.state.items.length - 1);
  }

  _moveDown() {
    const itemsLength = this.state.items.length - 1;

    if (this.state.selectedIndex < itemsLength) {
      this._selectIndex(++this.state.selectedIndex);
      return;
    }

    if (!this.props.cycleToTop) {
      return;
    }

    this.selectedIndex(0);
  }

  _onKeyDown(event) {
    switch (event.key) {
      case "ArrowUp":
        this._moveUp();
        event.preventDefault();
        break;

      case "ArrowDown":
        this._moveDown();
        event.preventDefault();
        break;

      case "Tab":
        if (event.shiftKey) {
          this._moveUp();
        } else {
          this._moveDown();
        }
        event.preventDefault();
        break;

      case "Enter":
        const item = this.state.items[this.state.selectedIndex];
        if (!item) {
          return;
        }
        this.setState({ items: [] });
        this.props.onChange(item);
        break;

      case "Escape":
        this.setState({ items: [] });
        this.props.onClose();
    }
  }

  _onInputChange(event) {
    const value = event.target.value;

    if (value.length) {
      const items = this.fuse.search(value);
      this.setState({
        items: items.slice(0, this.props.maxDisplay),
        selectedIndex: 0
      });
      return;
    }

    this.setState({ items: [], selectedIndex: 0 });
  }

  componentWillReceiveProps(nextProps) {
    this.fuse = new Fuse(nextProps.items, nextProps.fuseOptions);
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    return (
      <div className="FusePicker">
        {this.props.renderInfo()}
        <input
          type="text"
          className="FuseInput"
          autoFocus
          onKeyDown={this._onKeyDown.bind(this)}
          onChange={this._onInputChange.bind(this)}
        />
        <ul className="FuseResults">
          {this.state.items.map((item, index) => {
            return (
              <li
                key={index}
                className={`FuseResult ${index === this.state.selectedIndex &&
                  "selected"}`}
                onMouseOver={this._selectIndex.bind(this, index)}
                onClick={this.props.onChange.bind(
                  this,
                  this.state.items[index]
                )}
              >
                {this.props.renderItem(item)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

FusePicker.defaultProps = {
  maxDisplay: 5,
  cycleToTop: true,
  fuseOptions: {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["title"]
  },
  onChangeHighlighted(item) {},
  onChange(item) {},
  onClose() {},
  renderItem(item) {
    return item;
  },
  renderInfo() {
    return <FuseInfo />;
  },
  itemValue(item) {
    return item;
  }
};
