/**
 * Created by jyothi on 16/2/17.
 */
import React, {Component, PropTypes} from 'react';
import YouTube from 'react-youtube';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const videoContainerStyles = {
    padding: "10px"
};

export class Video extends Component{

    constructor(props){
        super(props);
        const { height, width } = this.props;
        this.state = {
            /*height: height || '480',
            width: width || '100%',*/
            playerVars: {
                autoplay: 1
            }
        }
    }

    render(){
        const { videoId } = this.props;
        return(
            <Paper zDepth={1}>
                <div style={videoContainerStyles}>
                    <div className="video-container">
                        <YouTube
                            videoId={videoId}
                            id={"video-id"}
                            className={"some-class"}
                            opts={this.state}
                            onReady={() => {

                            }}
                            onPlay={() => {

                            }}
                            onPause={() => {

                            }}
                            onEnd={() => {

                            }}
                            onError={() => {

                            }}
                            onStateChange={() => {

                            }}
                            onPlaybackRateChange={() => {

                            }}
                            onPlaybackQualityChange={() => {

                            }}
                        />
                    </div>
                </div>
            </Paper>
        )
    }

}

export class VideoMetrics extends Component {

    render(){
        const {likes, repeats, downloads} = this.props.data;
        return(
            <Paper zDepth={1}>
                <BottomNavigation>
                    <BottomNavigationItem
                        label="Likes"
                        icon={<IconLocationOn/>}
                    />
                    <BottomNavigationItem
                        label="Repeats"
                        icon={<IconLocationOn/>}
                    />
                    <BottomNavigationItem
                        label="Downloads"
                        icon={<IconLocationOn/>}
                    />
                </BottomNavigation>
            </Paper>
        )
    }
}