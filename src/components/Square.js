import React from 'react';
import { connect } from 'react-redux';
import { generateSquares, clickSquare, addToPath, savePath, clearPath, saveShortestPath, removeGrid } from '../actions';


class Square extends React.Component{

    findShortestPath(pathArray){
        let shortest =  this.props.path.length;
        let shortestArray = pathArray;
        if(this.props.previousPaths.length >= 1){
            for(let i = 0; i < this.props.previousPaths.length; i++){
                let pathLength = this.props.previousPaths[i].length;
                if(shortest >= pathLength){
                    shortest = pathLength;
                    shortestArray = this.props.previousPaths[i];
                }
            }
            this.props.saveShortestPath({
                length:shortest,
                startIndex: this.props.startIndex,
                endIndex:this.props.endIndex,
                array: shortestArray
            });
        }
    }

    findPath(array){
        let newArray = []
        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < array.length; j++){
                let objectValues = []
                if(array[i].previousSiblings)
                    objectValues = Object.values(array[i].previousSiblings);
                if(objectValues.find(function(el){return el === array[j].current;})){
                    newArray.push(array[i]);
                    continue;
                }
            }
        }
        return Array.from(new Set(newArray));
    }

    clickDivFunction(id){
        let index = this.props.path.length;
        const { current }= this.props.path[index - 1];
        const prevElement = current
        this.props.addToPath({
            prev:prevElement,
            current:id,
            previousSiblings: {
                upperElement:id + this.props.columns,
                bottomElement: id - this.props.columns,
                leftElement:id - 1,
                rightElement:id + 1
            }
        });
        this.checkEnd(id);
    }

    removeDivFunction(id){
        this.props.removeGrid(id);
    }

    onClickDiv(event){
        const id = Number(event.target.id);
        if(event.target.classList.contains('filled')){
            this.clickDivFunction(id); 
        } else if(event.target.classList.contains('clear')){
            this.removeDivFunction(id);
        } 
        this.props.clickSquare(id)
    }

    checkEnd(id){
        if((id + this.props.columns === this.props.endIndex ||
            id + 1 === this.props.endIndex ||
            id - this.props.columns === this.props.endIndex)
            && this.props.path[0].current === this.props.startIndex){
                let index = this.props.path.length;
                const { current }= this.props.path[index - 1];
                const prevElement = current;
                const pathArray = this.findPath(this.props.path)
                pathArray.push({
                    prev:prevElement,
                    current:id
                })
                this.props.savePath(pathArray);
                this.props.clearPath({
                    prev:0, 
                    current:this.props.startIndex
                });
                this.findShortestPath(pathArray);
            }
    }

    render(){
        return(
            <div 
                className={`square ${this.props.square[this.props.squareId] === false ? 'filled' : 'clear'}`}
                id={this.props.squareId}
                onClick={(event) => {
                   this.onClickDiv(event)
                }}
            >
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        columns:state.grid.columns,
        rows: state.grid.rows,
        square: state.squares,
        startIndex: state.grid.startIndex,
        endIndex: state.grid.endIndex,
        path: state.grid.path,
        previousPaths: state.grid.previousPaths
    }
}

export default connect(
    mapStateToProps,{
    clickSquare,
    generateSquares,
    addToPath,
    savePath,
    clearPath,
    saveShortestPath,
    removeGrid
})(Square);