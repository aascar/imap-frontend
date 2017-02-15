/**
 * Created by jyothi on 15/2/17.
 */
import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

export default class Footer extends Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="About"
                        icon={<IconLocationOn/>}
                        onTouchTap={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Help"
                        icon={<IconLocationOn/>}
                        onTouchTap={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="Contact"
                        icon={<IconLocationOn/>}
                        onTouchTap={() => this.select(2)}
                    />
                    <BottomNavigationItem
                        label="Terms"
                        icon={<IconLocationOn/>}
                        onTouchTap={() => this.select(3)}
                    />
                    <BottomNavigationItem
                        label="Privacy"
                        icon={<IconLocationOn/>}
                        onTouchTap={() => this.select(4)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}