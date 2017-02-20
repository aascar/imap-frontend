/**
 * Created by jyothi on 16/2/17.
 */
import React, {Component, PropTypes} from 'react';
import YouTube from 'react-youtube';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';
import PlaylistAdd from 'material-ui/svg-icons/av/playlist-add';
import RepeatIcon from 'material-ui/svg-icons/av/repeat';
import ShareIcon from 'material-ui/svg-icons/social/share';
import HeartedIcon from 'material-ui/svg-icons/action/favorite';
import HeartIcon from 'material-ui/svg-icons/action/favorite-border';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';

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
        )
    }

}

const metricIconStyles = {
    display: 'inline',
    float: 'left'
};

const metricStyles = {
    display: 'inline',
    float: 'right'
};

export class VideoMetrics extends Component {

    render(){
        const {likes, repeats, downloads} = this.props.data;
        return(
            <div className="container-fluid fluid">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <IconButton style={metricIconStyles} tooltip="Likes"><HeartedIcon /></IconButton>
                    <span style={metricStyles}>23 K</span>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <IconButton tooltip="Repeats"><RepeatIcon /></IconButton>
                    <span style={metricStyles}>56 K</span>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <IconButton tooltip="Downloads"><DownloadIcon /></IconButton>
                    <span style={metricStyles}>21 K</span>
                </div>
            </div>
        )
    }
}

export class Playlist extends Component{

    constructor(props){
        super(props);
        this.state = {

        };
    }

    handleClick(event, value){

    }

    render(){
        return(
            <IconMenu
                iconButtonElement={
                    <IconButton tooltip="Add to Playlist">
                        <PlaylistAdd/>
                    </IconButton>
                }
                onChange={this.handleClick.bind(this)}
            >
                <MenuItem value="1" primaryText="Inspirational" />
                <MenuItem value="2" primaryText="Romantic" />
                <Divider />
                <MenuItem value="3" primaryText="New Playlist" />
            </IconMenu>
        )
    }
}

const videoOptionsStyles = {
    margin: "5px auto auto"
};

export class VideoOptions extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    handleDownloadClick(event, value){

    }

    render(){
        const {likes, repeats, downloads} = this.props.data;
        return(
            <div className="container-fluid fluid text-center" style={videoOptionsStyles}>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">

                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <IconMenu
                        iconButtonElement={<IconButton tooltip="Download"><DownloadIcon /></IconButton>}
                        onChange={this.handleDownloadClick.bind(this)}>
                        <MenuItem value="1" primaryText="720p" />
                        <MenuItem value="2" primaryText="360p" />
                        <MenuItem value="3" primaryText="240p" />
                        <MenuItem value="4" primaryText="144p" />
                        <MenuItem value="5" primaryText="144Mp3" />
                    </IconMenu>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <Playlist/>
                </div>
            </div>
        )
    }
}

export class VideoData extends Component {

    render(){
        const {} = this.props;
        return(
            <div className="container-fluid fluid">
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <VideoMetrics data={{}}/>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <VideoOptions data={{}}/>
                </div>
            </div>
        )
    }
}

const videoContainerStyles = {
    padding: "10px"
};

export class VideoContainer extends Component {

    render(){
        const {} = this.props;
        return(
            <Paper zDepth={1}>
                <div style={videoContainerStyles}>
                    <Video videoId="rEggfqcRsPw"/>
                    <VideoData/>
                </div>
            </Paper>
        )
    }
}