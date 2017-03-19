/**
 * Created by jyothi on 19/3/17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import {SmallVideoAttributes} from './VideoMetrics';

export class MediumVideoList extends Component {

    render(){
        const { data } = this.props;
        return(
            <div className="trending-list-inline">
                { data && Array.isArray(data) && data.map(video => <VideoItem {...video}/>) }
            </div>
        )

    }

}

export const VideoItem = (props) => (
    <li className="trending-item">
        <Link to={`/watch?v=${props._id}`}>
            <img src={props.img} alt={props.title} className="media-object trending-image"/>
            <h6 className="trending-title">{props.title}</h6>
            { props.noAttributes && <h6 className="text-success channel-name">{props.channel}</h6> }
            { !props.noAttributes && <SmallVideoAttributes {...props}/> }
        </Link>
    </li>
);