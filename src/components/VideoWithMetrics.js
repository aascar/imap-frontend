/**
 * Created by jyothi on 21/2/17.
 */
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import VideoMetrics from './VideoMetrics';

const style = {
    height: '150px',
    maxWidth: '100%',
    margin: 10,
    textAlign: 'center',
};

const imageStyles = {

};

const textStyles = {

};

export default class VideoWithMetrics extends Component{
    render(){
        const {} = this.props.data;
        return(
            <Paper style={style} zDepth={2} rounded={false}>
                <img />
                <VideoMetrics data={{}}/>
            </Paper>
        )
    }
}