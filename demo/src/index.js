import React, { Component } from "react";
import { render } from "react-dom";
import { debounce } from "throttle-debounce";

import FusePicker, { FuseBox } from "../../src";

class Demo extends Component {
  constructor(props) {
    super(props);
    this._updateItems = debounce(500, this._updateItems);
  }

  state = {
    items: JSON.stringify(
      [
        {
          title: "Old Man's War",
          author: {
            firstName: "John",
            lastName: "Scalzi"
          }
        },
        {
          title: "The Lock Artist",
          author: {
            firstName: "Steve",
            lastName: "Hamilton"
          }
        },
        {
          title: "HTML5",
          author: {
            firstName: "Remy",
            lastName: "Sharp"
          }
        },
        {
          title: "Right Ho Jeeves",
          author: {
            firstName: "P.D",
            lastName: "Woodhouse"
          }
        },
        {
          title: "The Code of the Wooster",
          author: {
            firstName: "P.D",
            lastName: "Woodhouse"
          }
        },
        {
          title: "Thank You Jeeves",
          author: {
            firstName: "P.D",
            lastName: "Woodhouse"
          }
        },
        {
          title: "The DaVinci Code",
          author: {
            firstName: "Dan",
            lastName: "Brown"
          }
        },
        {
          title: "Angels & Demons",
          author: {
            firstName: "Dan",
            lastName: "Brown"
          }
        },
        {
          title: "The Silmarillion",
          author: {
            firstName: "J.R.R",
            lastName: "Tolkien"
          }
        },
        {
          title: "Syrup",
          author: {
            firstName: "Max",
            lastName: "Barry"
          }
        },
        {
          title: "The Lost Symbol",
          author: {
            firstName: "Dan",
            lastName: "Brown"
          }
        },
        {
          title: "The Book of Lies",
          author: {
            firstName: "Brad",
            lastName: "Meltzer"
          }
        },
        {
          title: "Lamb",
          author: {
            firstName: "Christopher",
            lastName: "Moore"
          }
        },
        {
          title: "Fool",
          author: {
            firstName: "Christopher",
            lastName: "Moore"
          }
        },
        {
          title: "Incompetence",
          author: {
            firstName: "Rob",
            lastName: "Grant"
          }
        },
        {
          title: "Fat",
          author: {
            firstName: "Rob",
            lastName: "Grant"
          }
        },
        {
          title: "Colony",
          author: {
            firstName: "Rob",
            lastName: "Grant"
          }
        },
        {
          title: "Backwards, Red Dwarf",
          author: {
            firstName: "Rob",
            lastName: "Grant"
          }
        },
        {
          title: "The Grand Design",
          author: {
            firstName: "Stephen",
            lastName: "Hawking"
          }
        },
        {
          title: "The Book of Samson",
          author: {
            firstName: "David",
            lastName: "Maine"
          }
        },
        {
          title: "The Preservationist",
          author: {
            firstName: "David",
            lastName: "Maine"
          }
        },
        {
          title: "Fallen",
          author: {
            firstName: "David",
            lastName: "Maine"
          }
        },
        {
          title: "Monster 1959",
          author: {
            firstName: "David",
            lastName: "Maine"
          }
        }
      ],
      undefined,
      4
    ),
    fuseOptions: {
      caseSensitive: false,
      includeScore: false,
      includeMatches: false,
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["title", "author.firstName", "author.lastName"]
    }
  };

  _updateItems(items) {
    this.setState({ items });
  }

  render() {
    return (
      <div className="row">
        <div className="col-3">
          <textarea
            style={{ minWidth: "100%", minHeight: 500 }}
            defaultValue={this.state.items}
            onKeyUp={event => this._updateItems(event.target.value)}
          />
        </div>
        <div className="col-4">
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input mr-1"
                  type="checkbox"
                  value={this.state.fuseOptions.caseSensitive}
                  onChange={event =>
                    this.setState({
                      fuseOptions: {
                        ...this.state.fuseOptions,
                        caseSensitive: event.target.checked
                      }
                    })}
                />
                {`Case sensitive`}
              </label>
            </div>
            <span className="form-text text-muted">
              {`Indicates whether comparisons should be case sensitive.`}
            </span>
          </div>
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input mr-1"
                  type="checkbox"
                  value={this.state.fuseOptions.includeScore}
                  onChange={event =>
                    this.setState({
                      fuseOptions: {
                        ...this.state.fuseOptions,
                        includeScore: event.target.checked
                      }
                    })}
                />
                {`Include score`}
              </label>
            </div>
            <span className="form-text text-muted">
              Whether the score should be included in the result set. A score of{" "}
              <code>0</code> indicates a perfect match, while a score of{" "}
              <code>1</code> indicates a complete mismatch.
            </span>
          </div>
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input mr-1"
                  type="checkbox"
                  value={this.state.fuseOptions.includeMatches}
                  onChange={event =>
                    this.setState({
                      fuseOptions: {
                        ...this.state.fuseOptions,
                        includeMatches: event.target.checked
                      }
                    })}
                />
                {`Include matches`}
              </label>
            </div>
            <span className="form-text text-muted">
              Whether the matches should be included in the result set. When{" "}
              <code>true</code>, each record in the result set will include the
              indices of the matched characters:{" "}
              <code>indices: [start, end]</code>. These can consequently be used
              for highlighting purposes.
            </span>
          </div>
        </div>
        <div className="col-5">
          <h2>Fixed Input Picker</h2>
          <FusePicker
            isOpen={true}
            items={JSON.parse(this.state.items)}
            renderItem={item => item.title}
            onChange={item => alert(`Chose: ${item.title}`)}
            fuseOptions={this.state.fuseOptions}
          />
          <hr />
          <h2>
            Callable Picker - Try with <kbd>ctrl</kbd> + <kbd>s</kbd>
          </h2>
          <FuseBox
            isKeyPressed={() => event.keyCode === 83 && event.ctrlKey}
            popup={(isOpen, onClose) => (
              <FusePicker
                isOpen={isOpen}
                onClose={onClose}
                renderItem={item => item.title}
                onChange={item => alert(`Chose: ${item.title}`)}
                items={JSON.parse(this.state.items)}
                fuseOptions={this.state.fuseOptions}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
