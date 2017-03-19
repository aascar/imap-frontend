/**
 * Created by jyothi on 19/3/17.
 */
import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';

const rightBarStyles = {
    width: '100%'
};

export default class RightBar extends Component {

    render(){

        return(
            <Paper zDepth={1}>
                <div className="" style={ rightBarStyles }>
                    {this.props.children}
                </div>
            </Paper>
        )

    }

}