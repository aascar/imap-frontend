/**
 * Created by jyothi on 19/3/17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

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

class Repeat extends Component {

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
                    {/*TODO:*/}
                </div>
                <div className="col-lg-2 col-md-2">

                </div>
            </section>
        );
    }
}

Repeat.propTypes = {

};

Repeat.contextTypes = {
    router: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Repeat);