import React, { Component } from "react";
import { render } from "react-dom";

import FusePicker, { FuseBox } from "../../src";

class Demo extends Component {
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
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["title", "author.firstName"]
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <textarea
            style={{ minWidth: "100%", minHeight: 500 }}
            value={this.state.items}
          />
        </div>
        <div className="col-4" />
        <div className="col-4">
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
