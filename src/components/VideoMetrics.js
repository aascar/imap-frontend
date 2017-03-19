/**
 * Created by jyothi on 21/2/17.
 */
import React, {Component, PropTypes} from 'react';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';
import RepeatIcon from 'material-ui/svg-icons/av/repeat';
import HeartedIcon from 'material-ui/svg-icons/action/favorite';

const defaultMetricStyles = {
    display: 'inline',
    float: 'right',
    fontSize: '15px',
    fontWeight: '500',
    lineHeight: '1em'
};

const iconHeartStyles = {
    color: "red"
};

const iconRepeatStyles = {
    color: "blue"
};

const iconDownloadStyles = {
    color: "green"
};

const defaultIconStyles = {
    width: '17px',
    height: '17px'
};

/**
 * @deprecated
 */
export default class VideoMetrics extends Component {

    render(){
        const {likes, repeats, downloads} = this.props.data;
        const iconStyles = this.props.iconStyles || defaultIconStyles;
        const metricStyles = this.props.metricStyles || defaultMetricStyles;

        return(
            <div className="container-fluid fluid">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <HeartedIcon style={{...iconHeartStyles, ...iconStyles}}/> <span style={metricStyles}>23K</span>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <RepeatIcon style={{...iconRepeatStyles, ...iconStyles}}/> <span style={metricStyles}>56K</span>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <DownloadIcon style={{...iconDownloadStyles, ...iconStyles}}/> <span style={metricStyles}>21K</span>
                </div>
            </div>
        )
    }
}

export const SmallVideoAttributes = (props) => (
    <ul className="nav video-attributes">
        <li role="presentation">
            <h6 className="media-heading">
                <span title="Likes">{props.likes || 0}</span> <i className="fa fa-heart-o text-danger"></i>
            </h6>
        </li>
        <li role="presentation">
            <h6 className="media-heading">
                <span title="Repeats">{props.repeats || 0}</span> <i className="fa fa-repeat text-success"></i>
            </h6>
        </li>
        <li role="presentation">
            <h6 className="media-heading">
                <span title="Downloads">{props.downloads || 0}</span> <i className="fa fa-download text-info"></i>
            </h6>
        </li>
    </ul>
);

export const MediumVideoMetrics = (props) => (
    <ul className="nav video-attributes">
        <li role="presentation">
            <h4 className="media-heading">
                <span title="Likes">{props.likes || 0}</span> <i className="fa fa-heart-o text-danger"></i>
            </h4>
        </li>
        <li role="presentation">
            <h4 className="media-heading">
                <span title="Repeats">{props.repeats || 0}</span> <i className="fa fa-repeat text-success"></i>
            </h4>
        </li>
        <li role="presentation">
            <h4 className="media-heading">
                <span title="Downloads">{props.downloads || 0}</span> <i className="fa fa-download text-info"></i>
            </h4>
        </li>
    </ul>
);