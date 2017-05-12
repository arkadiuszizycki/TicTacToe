import React from 'react';
import Square from './Square.jsx';
import NextRoundBtn from './NextRoundBtn.jsx';
import NewGameBtn from './NewGameBtn.jsx';
import Info from '../components/Info.jsx';
export default class GameBoard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      boardPattern:[
        ' ',' ',' ',
        ' ',' ',' ',
        ' ',' ',' '
      ],
      turn: "./images/angular.ico",
      winner: null,
      pointsAngular:0,
      pointsReact:0,
      squareStripe:null
    }
  }

  nextRound=()=>{
  this.setState({
    boardPattern:[
      ' ',' ',' ',
      ' ',' ',' ',
      ' ',' ',' '
    ],
    turn: "./images/angular.ico",
    winner: null,
    }
  )
}
newGame=()=>{
this.setState({
  boardPattern:[
    ' ',' ',' ',
    ' ',' ',' ',
    ' ',' ',' '
  ],
  turn: "./images/angular.ico",
  winner: null,
  pointsAngular: 0,
  pointsReact: 0
  }
)
}
  handleTurnChange(location){
    //checking if winner exist and block next move
    if (this.state.winner!==null){
      return;
    }
    //blocking changing icon in div
    if(this.state.boardPattern[location]=='./images/angular.ico' || this.state.boardPattern[location]=='./images/react.ico'){
      return;
    }
    let updatedBoard=this.state.boardPattern.slice();
    updatedBoard[location]=this.state.turn;
    this.setState({boardPattern:updatedBoard})
    if (this.state.turn=='./images/angular.ico'){
      this.setState({turn:'./images/react.ico'})
    }
    else if(this.state.turn=='./images/react.ico'){
      this.setState({turn:'./images/angular.ico'})
    }
    //ANGULAR
    //check win rows
    let topRowAng=updatedBoard[0]+updatedBoard[1]+updatedBoard[2];
    if (topRowAng.match('./images/angular.ico./images/angular.ico./images/angular.ico')){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    let midRowAng=updatedBoard[3]+updatedBoard[4]+updatedBoard[5];
    if (midRowAng.match('./images/angular.ico./images/angular.ico./images/angular.ico')){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    let bottomRowAng=updatedBoard[6]+updatedBoard[7]+updatedBoard[8];
    if (bottomRowAng.match('./images/angular.ico./images/angular.ico./images/angular.ico')){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    //check win cols
    let leftColAng=updatedBoard[0]+updatedBoard[3]+updatedBoard[6];
    if (leftColAng.match('./images/angular.ico./images/angular.ico./images/angular.ico')){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    let midColAng=updatedBoard[1]+updatedBoard[4]+updatedBoard[7];
    if (midColAng.match('./images/angular.ico./images/angular.ico./images/angular.ico')){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    let rightColAng=updatedBoard[2]+updatedBoard[5]+updatedBoard[8];
    if (rightColAng.match('./images/angular.ico./images/angular.ico./images/angular.ico')){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    //check win crosses
    let rightCrossAng=updatedBoard[0]+updatedBoard[4]+updatedBoard[8];
    if (rightCrossAng.match('./images/angular.ico./images/angular.ico./images/angular.ico')){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    let leftCrossAng=updatedBoard[2]+updatedBoard[4]+updatedBoard[6];
    if (leftCrossAng.match('./images/angular.ico./images/angular.ico./images/angular.ico')){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    //REACT
    //check win rows
    let topRowReact=updatedBoard[0]+updatedBoard[1]+updatedBoard[2];
    if (topRowReact.match('./images/react.ico./images/react.ico./images/react.ico')){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    let midRowReact=updatedBoard[3]+updatedBoard[4]+updatedBoard[5];
    if (midRowReact.match('./images/react.ico./images/react.ico./images/react.ico')){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    let bottomRowReact=updatedBoard[6]+updatedBoard[7]+updatedBoard[8];
    if (bottomRowAng.match('./images/react.ico./images/react.ico./images/react.ico')){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    //check win cols
    let leftColReact=updatedBoard[0]+updatedBoard[3]+updatedBoard[6];
    if (leftColReact.match('./images/react.ico./images/react.ico./images/react.ico')){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    let midColReact=updatedBoard[1]+updatedBoard[4]+updatedBoard[7];
    if (midColReact.match('./images/react.ico./images/react.ico./images/react.ico')){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    let rightColReact=updatedBoard[2]+updatedBoard[5]+updatedBoard[8];
    if (rightColReact.match('./images/react.ico./images/react.ico./images/react.ico')){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    //check win crosses
    let rightCrossReact=updatedBoard[0]+updatedBoard[4]+updatedBoard[8];
    if (rightCrossReact.match('./images/react.ico./images/react.ico./images/react.ico')){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    let leftCrossReact=updatedBoard[2]+updatedBoard[4]+updatedBoard[6];
    if (leftCrossReact.match('./images/react.ico./images/react.ico./images/react.ico')){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    //check if draw
    if(updatedBoard.indexOf(' ')==-1){
      this.setState({winner:'Draw :('})
    }
  }
  render() {
    let angularPointsInfo;
    if (this.state.pointsAngular>this.state.pointsReact){
      angularPointsInfo=<p className='angularWinning angularPoints letter-changer'>Angular: {this.state.pointsAngular}</p>
    } else {
      angularPointsInfo=<p className="angularPoints letter-changer">Angular: {this.state.pointsAngular}</p>
    }
    let reactPointsInfo;
    if (this.state.pointsReact>this.state.pointsAngular){
      reactPointsInfo=<p className='reactWinning'>React: {this.state.pointsReact}</p>
    } else {
      reactPointsInfo=<p>React: {this.state.pointsReact}</p>
    }
    return (
      <div className="Game">
        <div className="allInfo">
          <div className="buttons">
            <NewGameBtn new={this.newGame}/>
            <br/>
            <NextRoundBtn nextRound={this.nextRound}/>
          </div>
          <Info winner={this.state.winner}/>
        <div className="scoreBoard">
          {reactPointsInfo}
          {angularPointsInfo}
        </div>
      </div>
        <div className="gameBoard">
          {this.state.boardPattern.map(function(value, i){
            return <Square key={i} turn={this.state.boardPattern[i]} onTurnChange={()=>this.handleTurnChange(i)} location={i} value={value}/>
          }.bind(this))}
      </div>
      </div>
      )
    }
  }
