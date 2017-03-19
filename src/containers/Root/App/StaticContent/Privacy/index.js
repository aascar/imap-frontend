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

class Privacy extends Component {

    componentWillMount(){

    }

    componentWillUnmount(){

    }

    render() {
        const { appState, params, location } = this.props;
        return (
            <section className="content row">
                <div className="col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
                <div className="col-lg-8 col-md-8 col-sm-10 col-xs-10 site-text">
                    <div align="center" className="h2">Privacy Policy</div>

                    <p>This privacy policy has been compiled to better serve those who are concerned with how their
                        'Personally Identifiable Information' (PII) is being used online. PII, as described in US
                        privacy law and information security, is information that can be used on its own or with other
                        information to identify, contact, or locate a single person, or to identify an individual in
                        context. Please read our privacy policy carefully to get a clear understanding of how we
                        collect, use, protect or otherwise handle your Personally Identifiable Information in accordance
                        with our website.
                    </p>
                    <p><strong>What personal information do we collect from the people that visit our blog, website or app?</strong></p>
                    <p>When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address or other details to help you with your experience.</p>
                    <p><strong>When do we collect information?</strong></p>
                    <p>We collect information from you when you register on our site or enter information on our site.</p>
                    <p><strong>How do we use
                        your information?</strong>
                    </p>
                    <p>We may use the information we collect from you when you register, make a purchase, sign up for
                        our newsletter, respond to a survey or marketing communication, surf the website, or use certain
                        other site features in the following ways:
                        <ul>
                            <li>To personalize your experience and to allow us to deliver the type of content and
                                product offerings in which you are most interested.
                            </li>
                        </ul>
                    </p>
                    <p><strong>Do we use 'cookies'?</strong></p>
                    <p>We do not use cookies for tracking purposes</p>
                    <p>You
                        can choose to have your computer warn you each time a cookie is being sent, or you can choose to
                        turn off all cookies. You do this through your browser settings. Since browser is a little
                        different, look at your browser's Help Menu to learn the correct way to modify your cookies.
                    </p>
                    <p>
                        If you turn cookies off, some features will be disabled. that make your site experience more
                        efficient and may not function properly.
                    </p>
                    <p>However, you will still be able to place orders.</p>
                    <p><strong>Third-party disclosure</strong></p>
                    <p>We do not sell, trade, or otherwise transfer to
                        outside parties your Personally Identifiable Information.
                    </p>
                    <p><strong>Third-party links</strong>
                    </p>
                    <p>Occasionally, at our discretion, we may include or offer third-party products or services on our
                        website. These third-party sites have separate and independent privacy policies. We therefore have
                        no responsibility or liability for the content and activities of these linked sites. Nonetheless, we
                        seek to protect the integrity of our site and welcome any feedback about these sites.
                    </p>
                    <p><strong>Google</strong>
                    </p>
                    <p>Google's advertising requirements can be summed up by Google's Advertising Principles. They are
                        put in place to provide a positive experience for users.
                        https://support.google.com/adwordspolicy/answer/1316548?hl=en
                    </p>
                    <p>We use Google AdSense
                        Advertising on our website.
                    </p>
                    <p>Google, as a third-party vendor, uses cookies to serve ads on our
                        site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits
                        to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by
                        visiting the Google Ad and Content Network privacy policy.
                    </p>
                    <p><strong>We have implemented the
                        following:</strong>
                    </p>
                    <ul>
                        <li>Remarketing with Google AdSense</li>
                        <li>Google Display Network Impression Reporting</li>
                        <li>Demographics and Interests Reporting</li>
                        <li>DoubleClick Platform Integration</li>
                    </ul>
                    <p>We, along with third-party vendors such as Google use first-party cookies (such as the Google
                        Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party
                        identifiers together to compile data regarding user interactions with ad impressions and other
                        ad service functions as they relate to our website.
                    </p>
                    <p><strong>Opting out:</strong></p>
                    <p>
                        <strong>Users can set preferences for how Google advertises to you using the Google Ad Settings
                            page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page
                            or by using the Google Analytics Opt Out Browser add on.</strong>
                    </p>
                    <p><strong>COPPA (Children
                        Online Privacy Protection Act)</strong>
                    </p>
                    <p><strong>When it comes to the collection of personal
                        information from children under the age of 13 years old, the Children's Online Privacy Protection
                        Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer
                        protection agency, enforces the COPPA Rule, which spells out what operators of websites and online
                        services must do to protect children's privacy and safety online.</strong>
                    </p>
                    <p><strong>We do not
                        specifically market to children under the age of 13 years old.</strong>
                    </p>
                    <p><strong>Fair
                        Information Practices</strong>
                    </p>
                    <p><strong>The Fair Information Practices Principles form the
                        backbone of privacy law in the United States and the concepts they include have played a significant
                        role in the development of data protection laws around the globe. Understanding the Fair Information
                        Practice Principles and how they should be implemented is critical to comply with the various
                        privacy laws that protect personal information.</strong>
                    </p>
                    <p><strong>In order to be in line with
                        Fair Information Practices we will take the following responsive action, should a data breach
                        occur:</strong>
                    </p>
                    <p>
                        <strong>
                            We will notify you via email
                            <ul>
                                <li>Within 7 business days</li>
                            </ul>
                        </strong></p>
                    <p><strong>We also agree to the Individual Redress Principle which requires that individuals have
                        the right to legally pursue enforceable rights against data collectors and processors who fail
                        to adhere to the law. This principle requires not only that individuals have enforceable rights
                        against data users, but also that individuals have recourse to courts or government agencies to
                        investigate and/or prosecute non-compliance by data processors.</strong>
                    </p>
                    <p><strong>CAN SPAM
                        Act</strong>
                    </p>
                    <p><strong>The CAN-SPAM Act is a law that sets the rules for commercial email,
                        establishes requirements for commercial messages, gives recipients the right to have emails stopped
                        from being sent to them, and spells out tough penalties for violations.</strong>
                    </p>
                    <p>
                        <strong>
                            We collect your email address in order to:
                            <p>To be in accordance with CANSPAM, we agree
                                to the following:</p>
                            <ul>
                                <li>Not use false or misleading subjects or email addresses.</li>
                                <li>Identify the message as an advertisement in some reasonable way.</li>
                                <li>Include the physical address of our business or site headquarters.</li>
                                <li>Monitor third-party email marketing services for compliance, if one is used.</li>
                                <li>Honor opt-out/unsubscribe requests quickly.</li>
                                <li>Allow users to unsubscribe by using the link at the bottom of each email.</li>
                            </ul>
                        </strong></p>
                    <p>
                        <strong>
                            If at any time you would like to unsubscribe from receiving future emails, you can email
                            us at
                            <ul>
                                <li>Follow the instructions at the bottom of each email.</li>
                            </ul>
                        </strong></p>
                    <p><strong>and we will promptly remove you from ALL correspondence.</strong></p>
                    <h3><strong>Contacting
                        Us</strong>
                    </h3>
                    <p><strong>If there are any questions regarding this privacy policy, you may contact
                        us using the information below.</strong>
                    </p>
                    <p><strong className="media-heading">https://www.uryoutube.com</strong>
                    </p>
                    <p><strong><a href="mailto:admin@uryoutube.com"
                                  className="media-heading">admin@uryoutube.com</a></strong></p>
                    <h4 className="pull-right">
                        <strong>Last Edited on 2017-01-25</strong>
                    </h4>

                </div>
                <div className="col-lg-2 col-md-2">

                </div>
            </section>
        );
    }
}

Privacy.propTypes = {

};

Privacy.contextTypes = {
    router: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Privacy);