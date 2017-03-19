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
import VideoMetrics, {MediumVideoMetrics} from '../../../../../components/VideoMetrics';

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

export class Download extends Component{

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
                iconButtonElement={<IconButton tooltip="Download"><DownloadIcon /></IconButton>}
                onChange={this.handleClick.bind(this)}>
                <MenuItem value="1" primaryText="720p" />
                <MenuItem value="2" primaryText="360p" />
                <MenuItem value="3" primaryText="240p" />
                <MenuItem value="4" primaryText="144p" />
                <MenuItem value="5" primaryText="144Mp3" />
            </IconMenu>
        )
    }
}

export class Share extends Component{

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
                iconButtonElement={<IconButton tooltip="Share"><ShareIcon/></IconButton>}
                onChange={this.handleClick.bind(this)}>
                <MenuItem value="1" primaryText="Facebook" />
                <MenuItem value="2" primaryText="Twitter" />
                <MenuItem value="3" primaryText="Google+" />
            </IconMenu>
        )
    }
}

const videoOptionsStyles = {
    margin: "0px auto auto"
};

export class VideoOptions extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        const {likes, repeats, downloads} = this.props.data;
        return(
            <div className="row text-center" style={videoOptionsStyles}>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">

                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                    <IconButton tooltip="Select Repeat Range"><HeartIcon /></IconButton>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                    <IconButton tooltip="Mark as Favorite"><HeartIcon /></IconButton>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                    <Download/>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                    <Playlist/>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                    <Share/>
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
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div style={{paddingTop: '1.5rem'}}>
                        <MediumVideoMetrics data={{}}/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <VideoOptions data={{}}/>
                </div>
            </div>
        )
    }
}

const videoContainerStyles = {
    padding: "5px"
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