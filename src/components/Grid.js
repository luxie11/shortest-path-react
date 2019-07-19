import React from 'react';
import { connect } from 'react-redux';
import Square from './Square';
import { generateSquares, clearSquaresArray, createStartIndex, createEndIndex, addToPath } from '../actions/';

class Grid extends React.Component {

    generateStartPoint(){
        const randomStartPointIndex = Math.round(Math.random() * this.props.rows);
        const startIndex = randomStartPointIndex === this.props.rows 
                         ? (randomStartPointIndex - 1) * this.props.columns 
                         : randomStartPointIndex * this.props.columns;
        this.props.createStartIndex(startIndex);
        return startIndex;
    }

    generateEndPoint(){
        const randomEndPoint = Math.round(Math.random() * this.props.rows);
        const endPoint = Math.round(Math.random() * this.props.rows) === 0 ? 0 : randomEndPoint;
        let endIndex = 0;
        if(endPoint === 0){
            endIndex+= this.props.columns - 1;
        } else {
            endIndex = (endPoint * this.props.columns) - 1;
        }
        this.props.createEndIndex(endIndex);
        return endIndex;
    }

    renderGrid(){
        this.props.clearSquaresArray();
        const squaresAmount = this.props.rows * this.props.columns;
        const squares = [];
        for(let i = 0; i < squaresAmount; i++){
            squares.push(i)
        }
        let startIndex = 0;
        let endIndex = 0;
        let shortestPath = [];
        if(this.props.shortestPath){
            startIndex = this.props.shortestPath.startIndex;      
            endIndex = this.props.shortestPath.endIndex;
            shortestPath = this.props.shortestPath.array.map((el)=>{
                if(el.current !== this.props.shortestPath.startIndex)
                    return el.current
                return null
            })
            shortestPath.sort(function(a,b){return a - b});
        } else{
            startIndex = this.generateStartPoint();      
            endIndex = this.generateEndPoint();
        }
        this.props.addToPath({
            prev:0,
            current:startIndex
        });
        let shortestIndex = 0;
        const squaresArray = squares.map((index)=>{
            this.props.generateSquares(index);
            if(shortestPath[shortestIndex] === index){
                shortestIndex++;
                return(
                    <div 
                        key={index + 1}
                        className={`square-${( index + 1 )} shortest-path`}
                        id={( index )}
                    ></div>
                )
            }
            if(index === startIndex){
                return(
                    <div 
                        key={index + 1}
                        className={`square-${( index + 1 )} start-point`}
                        id={( index )}
                    ></div>
                )
            }
            if(index === endIndex){
                return(
                    <div 
                        key={index + 1}
                        className={`square-${( index + 1 )} end-point`}
                        id={( index )}
                    ></div>
                )
            }
            return(
                <Square 
                    key={index + 1}                   
                    index={index + 1}
                    className={`square-${( index + 1 )}`}
                    squareId={( index )}
                    color="filled"
                />
            )
        })
        return squaresArray;
    }

    render(){
        const style = {
            grid:{
                width: '100%',
                display:'grid',
                gridTemplateColumns: `repeat(${this.props.columns}, 50px)`,
                gridTemplateRows: `repeat(${this.props.rows}, 50px)`,
                marginBottom: '20px'
            }
        }
        return(
            <div style={style.grid}>
               {this.renderGrid()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return {
        rows: state.grid.rows,
        columns: state.grid.columns,
        squares: state.grid.squares,
        shortestPath: state.grid.shortestPath
    }
}

export default connect(
    mapStateToProps,
    {
        generateSquares,
        clearSquaresArray,
        createStartIndex,
        createEndIndex,
        addToPath
    }
)(Grid);