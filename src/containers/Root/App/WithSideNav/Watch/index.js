/**
 * Created by jyothi on 16/2/17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {  } from './actions';
import {VideoContainer} from './components';
import Navigation from '../../../../../components/Navigation';
import MediumVideoList from '../../../../../components/LargeVideoList';
import RightBar from '../../../../../components/RightBar';

function mapStateToProps(state) {
    return {
        session: state.session,
        router: state.routing,
        overview: state.overview
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class Watch extends Component {

    componentWillMount(){

    }

    componentWillUnmount(){

    }

    render() {
        const { appState, params, location } = this.props;
        const { v } = location.query;
        return (
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-7">
                    <VideoContainer/>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5">
                    <RightBar>

                    </RightBar>
                </div>
            </div>
        );
    }
}

Watch.propTypes = {

};

Watch.contextTypes = {
    router: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Watch);