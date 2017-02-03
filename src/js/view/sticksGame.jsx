import React from 'react';
import Timer from './timer.jsx';
import PauseScreen from './pauseScreen.jsx';
import Buttons from './buttons.jsx';
import LevelControl from './levelControl.jsx';

export default class SticksGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameLevel: 1,
            timer: new Timer()
        };
    }

    render() {
        return (
            <div className="wholeContainer">
                <div className="leftSide">
                    {/*<GameScreen />*/}
                    <PauseScreen />
                </div>
                <div className="rightSide">
                    <div className="innerRightContainer">
                        <div className="innerRightSubContainer">
                            <span className="title">Pick Up Sticks!</span>
                        </div>
                             <div className="innerRightSubContainer">
                                <LevelControl />
                            </div>div>
                        <div className="innerRightSubContainer">
                            <Buttons />
                        </div>
                        <div className="innerRightSubContainer">
                            <Timer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
