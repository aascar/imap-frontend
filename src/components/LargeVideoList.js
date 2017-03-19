/**
 * Created by jyothi on 17/3/17.
 */
import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {MediumVideoMetrics} from './VideoMetrics';

export class LargeVideoList extends Component {

    render(){
        const { data } = this.props;
        return(
            <div className="media-listd">
                { data && Array.isArray(data) && data.map(video => <LargeVideoItem {...video}/>) }
            </div>
        )

    }

}

export const LargeVideoItem = (props) => (
    <li className="media media-item">
        <a href={`/watch?v=${props._id}`}>
            <div className="media-left">
                <img src={props.img} alt={props.title} className="media-object media-image" />
            </div>
            <div className="media-body">
                <h4 className="media-heading">{props.title}</h4>
                { props.noAttributes && <strong className="text-success channel-name">{props.channel}</strong> }
                { props.noAttributes && <p className="text-success channel-name">{props.description}</p> }
                { !props.noAttributes && <MediumVideoMetrics {...props}/> }
            </div>
        </a>
    </li>
);