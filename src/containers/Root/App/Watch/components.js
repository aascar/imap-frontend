/**
 * Created by jyothi on 16/2/17.
 */
import React, {Component, PropTypes} from 'react';
import YouTube from 'react-youtube';

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