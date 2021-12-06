import React, {Component} from 'react'
class Video extends Component {
    render() {
        return (
            <div className='card mx-auto my-3 ps-3 bg-danger shadow'>
                <video src={this.props.src} controls={true} autostart={String(true)} autoPlay={false} muted={true} />
            </div>
        )
    }
}
export default Video