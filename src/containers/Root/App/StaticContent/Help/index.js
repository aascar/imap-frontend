/**
 * Created by jyothi on 16/2/17.
 */
import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        session: state.session,
        router: state.routing,
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class Help extends Component {

    componentWillMount(){

    }

    componentWillUnmount(){

    }

    render() {
        const { appState, params, location } = this.props;
        return (
            <section className="content row">
                <div className="col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
                <div className="col-lg-8 col-md-8 col-sm-10 col-xs-10">
                    <h1 className="text-center media-heading">
                        <Link href="/contact">We're here to help you :) ..!</Link>
                    </h1>
                    <div className="text-center">
                        <h4>Easiest way to get your favorite video into this site.</h4>
                        <br />
                    </div>
                    <div className="make-center">
                        <img src="/images/usage.gif" className="img-responsive" />
                    </div>
                </div>
                <div className="col-lg-2 col-md-2">

                </div>
            </section>
        );
    }
}

Help.propTypes = {

};

Help.contextTypes = {
    router: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Help);