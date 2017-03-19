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

class Terms extends Component {

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

                    <h2 align="center">Terms and Conditions</h2>

                    <p>These terms and conditions shall govern your use of our website.</p>
                    <h3>Acceptance of Use</h3>
                    <p>By using our website, you accept these terms and conditions in full; accordingly, if you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.</p>
                    <p>UrYouTube and it's Services, including all content and products offered through the Website and Services (collectively, the<strong>&nbsp;"Content"</strong>) available for your use subject to the terms and conditions set forth in this document. By accessing and using the Website and Services you agree to be bound by and to accept these Terms of Service and all terms and conditions contained and/or referenced herein as well as any additional terms and conditions set forth on the Website.</p>
                    <p>The Terms and Conditions may vary accordingly and we'll intimate those changes either through Home page or anything else. It's your responsibility to check these every time you logged into Website</p>
                    <p>Please check these Terms of Service regularly to ensure that you are aware of all terms governing your use of the Website and Services. Specific terms and conditions may apply to non-user generated Content. Such specific terms may be in addition to these Terms of Service or, where inconsistent with these Terms of Service such specific terms will supersede these Terms of Service only to the extent that the content or intent of such specific terms is inconsistent with these Terms of Service.</p>
                    <h3>Services</h3>
                    <p>You can use our product and services to download youtube videos which are acceptable to download. We won't provide download for restricted videos. We won't encourage any video with constraints to download and watch.</p>
                    <h3>Termination</h3>
                    <p>We reserve the right to discontinue or alter any or all of our website services, and to stop publishing our website, at any time in our sole discretion without notice or explanation; and save to the extent expressly provided otherwise in these terms and conditions, you will not be entitled to any compensation or other payment upon the discontinuance or alteration of any website services, or if we stop publishing the website.</p>
                    <h3>Intellectual Property</h3>
                    <p>The static contents of the site like Logo, design and every materialistic things are our own and some of them are used under<strong>&nbsp;MIT&nbsp;</strong>license. We provide the document for all those software content we used to develop this Website</p>
                    <h3>Links to other Websites</h3>
                    <p>You may have some links to other Websites (mainly social websites) and other Third party products. UrYouTube is not responsible for your misuse of any of those third party products. UrYouTube won't endorse content, products and services of those third party websites.</p>
                    <h3>License</h3>
                    <p>THE URYOUTUBE.COM AND ITS SERVICES IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>

                </div>
                <div className="col-lg-2 col-md-2">

                </div>
            </section>
        );
    }
}

Terms.propTypes = {

};

Terms.contextTypes = {
    router: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Terms);