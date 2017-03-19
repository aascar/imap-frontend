/**
 * Created by jyothi on 16/2/17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {  } from './actions';
import {VideoContainer} from './components';
import Navigation from '../../../../components/Navigation';
import MediumVideoList from '../../../../components/LargeVideoList';
import RightBar from '../../../../components/RightBar';

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
        this.props.resetData();
    }

    render() {
        const { appState, params, location } = this.props;
        const { v } = location.query;
        return (
            <section className="content row">
                <div className="col-lg-2 col-md-2 visible-lg visible-md">
                    <Navigation/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-7">
                    <VideoContainer/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-5">
                    <RightBar>

                    </RightBar>
                </div>
            </section>
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