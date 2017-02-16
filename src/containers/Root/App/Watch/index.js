/**
 * Created by jyothi on 16/2/17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {  } from './actions';
import {Video, VideoMetrics} from './components';

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

class Overview extends Component {

    componentWillMount(){

    }

    componentWillUnmount(){
        this.props.resetData();
    }

    render() {
        const { appState, params, location } = this.props;
        const { v } = location.query;
        return (
            <section className="content">
                <div className="col-md-8">
                    <Video videoId="rEggfqcRsPw"/>
                </div>
                <div className="col-md-4">
                    <VideoMetrics data={{}}/>
                </div>
            </section>
        );
    }
}

Overview.propTypes = {

};

Overview.contextTypes = {
    router: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Overview);