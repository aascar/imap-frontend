import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Login, Logged} from './components';

function mapStateToProps(state) {
    return {
        router: state.routing
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //logout: () => dispatch(logoutUser()),
    };
}

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            //TODO:
        }
    }

    componentWillMount(){
        injectTapEventPlugin();
    }

    render() {
        const {children, auth, app} = this.props;

        /*const token = auth.token;
        const user = auth.user;
        const isLoggedIn = token && token !== null && typeof token !== 'undefined';
        const showSideBar = !!(app && app != null);*/

        return (
            <MuiThemeProvider muiTheme={/*getMuiTheme(darkBaseTheme)*/ null}>
                <AppBar
                    title="UrYouTube"
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    iconElementRight={!this.state.logged ? <Logged /> : <Login />}
                />
            </MuiThemeProvider>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
