import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

class VerseSelector extends Component {
  static propTypes = {
    count: PropTypes.number,
    selected: PropTypes.number,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    count: 0,
    selected: -1,
    onSelect: () => {}
  };
  render() {
    const { count, selected, onSelect } = this.props;

    return (
      <div>
        <div className="column chapterSelector client-height">
          <div className="title">
            <div className="left">
              <span style={{ paddingLeft: 5, fontWeight: "bold" }}>节</span>
            </div>
          </div>
          <div className="list-content">
            <ul className="grid">
              {[...Array(count)].map((_, index) => (
                <li
                  key={index}
                  className={cn({ highlighted: selected === index + 1 })}
                  role="button"
                  tabIndex={0}
                  type="default"
                  onClick={() => onSelect(index + 1)}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default VerseSelector;
