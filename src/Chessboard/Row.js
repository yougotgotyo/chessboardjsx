import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { COLUMNS } from './helpers';

class Row extends Component {
  static propTypes = {};

  state = {
    square: '',
    col: 0,
    row: 0
  };
  render() {
    let alpha = COLUMNS;
    let row = 8;
    let squareColor = 'white';
    return (
      <div style={{ ...boardStyles(context.width), ...context.boardStyle }}>
        {[...Array(8)].map((_, r) => {
          row = context.orientation === 'black' ? row + 1 : row - 1;

          return (
            <div key={r.toString()} style={rowStyles}>
              {[...Array(8)].map((_, col) => {
                let square =
                  context.orientation === 'black'
                    ? alpha[7 - col] + (row - 1)
                    : alpha[col] + (row + 1);

                if (col !== 0)
                  squareColor = squareColor === 'black' ? 'white' : 'black';
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Row;

const boardStyles = width => ({
  width: width,
  height: width,
  cursor: 'default'
});

const rowStyles = {
  display: 'flex',
  flexWrap: 'nowrap',
  width: '100%'
};
