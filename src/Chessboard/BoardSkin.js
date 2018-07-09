import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Piece from './Piece';
import SquareSkin from './SquareSkin';
import Notation from './Notation';
// import PhantomPiece from './PhantomPiece';
import Row from './Row';

class BoardSkin extends PureComponent {
  static propTypes = {
    width: PropTypes.number,
    orientation: PropTypes.string,
    boardStyle: PropTypes.object,
    children: PropTypes.func,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    screenWidth: PropTypes.number,
    screenHeight: PropTypes.number,
    lightSquareStyle: PropTypes.object,
    darkSquareStyle: PropTypes.object,
    roughSquare: PropTypes.func,
    showNotation: PropTypes.bool,
    setSquareCoordinates: PropTypes.func
  };

  showPhantom = ({ square, targetSquare, phantomPiece }) => {
    const isActivePiece = (square, targetSquare) =>
      targetSquare && targetSquare === square;

    return (
      phantomPiece &&
      phantomPiece[targetSquare] &&
      isActivePiece(square, targetSquare)
    );
  };

  hasPiece = (currentPosition, square) =>
    currentPosition &&
    Object.keys(currentPosition) &&
    Object.keys(currentPosition).includes(square);

  render() {
    console.log('width', this.props.width);
    return (
      <Row
        width={this.props.width}
        boardStyle={this.props.boardStyle}
        orientation={this.props.orientation}
        // lightSquareStyle={this.props.lightSquareStyle}
        // darkSquareStyle={this.props.darkSquareStyle}
        // roughSquare={this.props.roughSquare}
        // setSquareCoordinates={this.setSquareCoordinates}
        // id={this.props.id}
        // screenWidth={this.props.screenWidth}
        // screenHeight={this.props.screenHeight}
      >
        {props => {
          return (
            // <Fragment key={`${props.col}${props.row}`}>
            <SquareSkin
              key={`${props.col}${props.row}`}
              width={this.props.width}
              square={props.square}
              squareColor={props.squareColor}
              setSquareCoordinates={this.props.setSquareCoordinates}
              lightSquareStyle={this.props.lightSquareStyle}
              darkSquareStyle={this.props.darkSquareStyle}
              roughSquare={this.props.roughSquare}
              // selectedSquares={context.selectedSquares}
              // onMouseOverSquare={context.onMouseOverSquare}
              // onMouseOutSquare={context.onMouseOutSquare}
              // onHoverSquareStyle={context.onHoverSquareStyle}
              // selectedSquareStyle={context.selectedSquareStyle}
              id={this.props.id}
              screenWidth={this.props.screenWidth}
              screenHeight={this.props.screenHeight}
            >
              {/* {this.hasPiece(context.currentPosition, square) ? (
                        <Piece
                          pieces={context.pieces}
                          currentSquare={square}
                          piece={context.currentPosition[square]}
                          width={context.width}
                          setPosition={context.setPosition}
                          dropOffBoard={context.dropOffBoard}
                          getSquareCoordinates={this.getSquareCoordinates}
                          draggable={context.draggable}
                          onDrop={context.onDrop}
                          sourceSquare={context.sourceSquare}
                          targetSquare={context.targetSquare}
                          waitForTransition={context.waitForTransition}
                          transitionDuration={context.transitionDuration}
                          orientation={context.orientation}
                          id={context.id}
                          setTouchState={context.setTouchState}
                          renderPieces={context.renderPieces}
                          wasManuallyDropped={context.wasManuallyDropped}
                        />
                      ) : null} */}

              {/* {this.showPhantom({
                        square,
                        targetSquare: context.targetSquare,
                        phantomPiece: context.phantomPiece
                      }) && (
                        <PhantomPiece
                          width={context.width}
                          phantomPieceValue={
                            context.phantomPiece[context.targetSquare]
                          }
                          pieces={context.pieces}
                          showNotation={context.showNotation}
                        />
                      )} */}

              {this.props.showNotation && (
                <Notation
                  row={props.row}
                  col={props.col}
                  alpha={props.alpha}
                  orientation={this.props.orientation}
                  width={this.props.width}
                  lightSquareStyle={this.props.lightSquareStyle}
                  darkSquareStyle={this.props.darkSquareStyle}
                />
              )}
            </SquareSkin>
            // </Fragment>
          );
        }}
      </Row>
    );
  }
}

export default BoardSkin;
