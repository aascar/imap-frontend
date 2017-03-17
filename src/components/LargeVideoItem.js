/**
 * Created by jyothi on 17/3/17.
 */
import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';

const imgStyles = {
    maxWidth: '120px'
};

export default class LargeVideoItem extends Component {

    render(){

        return(
            <li className="media media-item">
                <a href="/watch?v=VFbzChm00No">
                    <div className="media-left">
                        <img style={imgStyles} src="https://i.ytimg.com/vi/VFbzChm00No/hqdefault.jpg" alt="Sairat Full Movie In Hd1080p hindi dub  With English Subtitles" className="media-object media-image" />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading text-wrap">Sairat Full Movie In Hd1080p hindi dub  With English Subtitles</h4>
                    </div>
                </a>
            </li>
        )

    }

}