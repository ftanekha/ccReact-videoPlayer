import React, {Component} from 'react'

class Video extends Component {
    render() {
        return (
        <div>
            <video controls autostart autoPlay muted />
        </div>
        );
    }
}
export default Video