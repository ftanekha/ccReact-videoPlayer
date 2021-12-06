import React, {Component} from 'react'

class Video extends Component {
    render() {
        return (
            <div className='mx-auto shadow'>
                <video controls={true} autostart={false} autoPlay={false} muted={true} />
            </div>
        )
    }
}
export default Video