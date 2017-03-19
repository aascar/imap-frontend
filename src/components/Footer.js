/**
 * Created by jyothi on 15/2/17.
 */
import React, {Component} from 'react';
import {END_POINTS} from '../constants/EndPoints';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import FaceIcon from 'material-ui/svg-icons/action/face';
import HelpIcon from 'material-ui/svg-icons/action/help';
import LockIcon from 'material-ui/svg-icons/action/lock';
import ContactMailIcon from 'material-ui/svg-icons/communication/contact-mail';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';

const footerStyles = {
    //position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    //padding: '1rem',
    width: '100%'
};

export default class Footer extends Component {
    state = {
        selectedIndex: 10,
    };

    //select = (index) => this.setState({selectedIndex: index});
    handleClick = (endPoint) => this.props.router.push(`/${endPoint}`);

    render() {
        return (
            <div style={footerStyles}>
                <Paper zDepth={1}>
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>
                        <BottomNavigationItem
                            label="About"
                            icon={<FaceIcon />}
                            onClick={() => this.handleClick(END_POINTS.ABOUT)}
                        />
                        <BottomNavigationItem
                            label="Help"
                            icon={<HelpIcon />}
                            onClick={() => this.handleClick(END_POINTS.HELP)}
                        />
                        <BottomNavigationItem
                            label="Contact"
                            icon={<ContactMailIcon />}
                            onClick={() => this.handleClick(END_POINTS.CONTACT)}
                        />
                        <BottomNavigationItem
                            label="Terms"
                            icon={<AssignmentIcon />}
                            onClick={() => this.handleClick(END_POINTS.TERMS)}
                        />
                        <BottomNavigationItem
                            label="Privacy"
                            icon={<LockIcon />}
                            onClick={() => this.handleClick(END_POINTS.PRIVACY)}
                        />
                    </BottomNavigation>
                </Paper>
            </div>
        );
    }
}