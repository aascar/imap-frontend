/**
 * Created by jyothi on 16/2/17.
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

class About extends Component {

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
                    <div className="site-text">
                        <p>I'm a Computer Science Enthusiast 👦, developed this site initially for
                        myself while learning some technologies like NodeJs, MongoDB. Sorry being a Programmer I gave
                        technologies rather than about the people of this site.</p>
                        <p>I love 💘 listening songs 🎼 while in work 💻.
                            And we all have the habit of listening our favorite songs in loop.
                            This made me to share this video repeating site which eventually had the feature of downloading 💾 songs (All the offices may not have proper bandwidth to listen them online. 😃).
                            So given way for offline loop also 😉.
                        </p>
                        <p>And the concept of Custom YouTube is yet to come. i.e site with personalized content which needs your credentials etc.</p>
                        <br />
                        <p>Hope this is helpful for all. Happy 😂 downloading 💾 and listening 🎶 in loop 🔁.</p>
                        <p>PS:📌 UrYouTube will exists as long as our YouTube gives us it's APIs 💽</p>
                        <p>You can reach us at</p>
                        <ul>
                            <li><Link href="/contact" class="media-heading"> UrYouTube</Link></li>
                            <li><a href="https://www.facebook.com/uryoutube/" class="media-heading"> Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2"></div>
            </section>
        );
    }
}

About.contextTypes = {
    router: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About);