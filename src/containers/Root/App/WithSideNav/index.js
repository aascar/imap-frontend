/**
 * Created by jyothi on 19/3/17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
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

class SiteContent extends Component {

    componentWillMount(){

    }

    componentWillUnmount(){

    }

    render() {
        const { appState, params, location } = this.props;
        return (
            <section className="content row">
                <div className="col-lg-2 col-md-2 visible-lg visible-md">
                    <Navigation/>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    {this.props.children}
                </div>
            </section>
        );
    }
}

SiteContent.propTypes = {

};

SiteContent.contextTypes = {
    router: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SiteContent);