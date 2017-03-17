/**
 * Created by jyothi on 17/3/17.
 */
import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import LargeVideoItem  from './LargeVideoItem';
import Paper from 'material-ui/Paper';

export default class MediumVideoList extends Component {

    render(){

        return(
            <Paper zDepth={1}>
                <ul className="media-list">
                    <LargeVideoItem/>
                </ul>
            </Paper>
        )

    }

}

//rightIcon={<CommunicationChatBubble />}