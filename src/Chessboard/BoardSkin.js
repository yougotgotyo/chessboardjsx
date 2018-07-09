import React, { PureComponent, Fragment } from 'react';

import Piece from './Piece';
import SquareSkin from './SquareSkin';
import Notation from './Notation';
import Chessboard from './index';
// import PhantomPiece from './PhantomPiece';
import Row from './Row';

class BoardSkin extends PureComponent {
  setSquareCoordinates = (x, y, square) =>
    this.setState({ [square]: { x, y } });

  getSquareCoordinates = (sourceSquare, targetSquare) => ({
    sourceSquare: this.state[sourceSquare],
    targetSquare: this.state[targetSquare]
  });

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
    return (
      <Chessboard.Consumer>
        {context => {
          return (
            <Row
              width={context.width}
              boardStyle={context.boardStyle}
              orientation={context.orientation}
              squareColor={context.squareColor}
              lightSquareStyle={context.lightSquareStyle}
              darkSquareStyle={context.darkSquareStyle}
              roughSquare={context.roughSquare}
              setSquareCoordinates={this.setSquareCoordinates}
              id={context.id}
              screenWidth={context.screenWidth}
              screenHeight={context.screenHeight}
            >
              {props => {
                return (
                  <Fragment key={`${props.col}${props.row}`}>
                    <SquareSkin
                      key={props.col.toString()}
                      width={props.width}
                      square={props.square}
                      squareColor={props.squareColor}
                      setSquareCoordinates={props.setSquareCoordinates}
                      lightSquareStyle={props.lightSquareStyle}
                      darkSquareStyle={props.darkSquareStyle}
                      roughSquare={props.roughSquare}
                      // selectedSquares={context.selectedSquares}
                      // onMouseOverSquare={context.onMouseOverSquare}
                      // onMouseOutSquare={context.onMouseOutSquare}
                      // onHoverSquareStyle={context.onHoverSquareStyle}
                      // selectedSquareStyle={context.selectedSquareStyle}
                      id={props.id}
                      screenWidth={props.screenWidth}
                      screenHeight={props.screenHeight}
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

                      {context.showNotation && (
                        <Notation
                          row={props.row}
                          col={props.col}
                          alpha={props.alpha}
                          orientation={props.orientation}
                          width={props.width}
                          lightSquareStyle={props.lightSquareStyle}
                          darkSquareStyle={props.darkSquareStyle}
                        />
                      )}
                    </SquareSkin>
                  </Fragment>
                );
              }}
            </Row>
          );
        }}
      </Chessboard.Consumer>
    );
  }
}

export default BoardSkin;
