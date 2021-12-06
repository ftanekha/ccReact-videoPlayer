import React, {Component} from 'react'
import Video from './Video'
import Menu from './Menu'

const VIDEOS = {
    fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
    slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
    cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
    eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
}

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { src: VIDEOS.fast }
    }

    render() {
        return (
            <div className='card bg-dark mx-auto my-3 py-3'>
                <h1 className='text-center text-secondary fw-bolder'>Video Player byFT</h1>
                <Menu />
                <Video />
            </div>
        )
    }
}

export default App