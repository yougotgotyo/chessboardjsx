import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { COLUMNS } from './helpers';

class Row extends PureComponent {
  static propTypes = {
    width: PropTypes.number,
    orientation: PropTypes.string,
    boardStyle: PropTypes.object,
    children: PropTypes.func
    // id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // screenWidth: PropTypes.number,
    // screenHeight: PropTypes.number,
    // lightSquareStyle: PropTypes.object,
    // darkSquareStyle: PropTypes.object,
    // roughSquare: PropTypes.func,
    // setSquareCoordinates: PropTypes.func
  };

  render() {
    const { width, boardStyle, orientation, children } = this.props;
    console.log('render');
    let alpha = COLUMNS;
    let row = 8;
    let squareColor = 'white';

    if (orientation === 'black') row = 1;

    return (
      <div style={{ ...boardStyles(width), ...boardStyle }}>
        {[...Array(8)].map((_, r) => {
          row = orientation === 'black' ? row + 1 : row - 1;

          return (
            <div key={r.toString()} style={rowStyles}>
              {[...Array(8)].map((_, col) => {
                console.log('here');
                let square =
                  orientation === 'black'
                    ? alpha[7 - col] + (row - 1)
                    : alpha[col] + (row + 1);

                if (col !== 0) {
                  squareColor = squareColor === 'black' ? 'white' : 'black';
                }
                return children({
                  square,
                  squareColor,
                  col,
                  row,
                  alpha
                });
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
