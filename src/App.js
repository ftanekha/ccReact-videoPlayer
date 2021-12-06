import React, {Component} from 'react'
import Video from './Video'
import Menu from './Menu'

const 
menu = ['fast', 'slow', 'cute', 'eek'],
VIDEOS = {}

menu.forEach(option => VIDEOS[option] = `https://content.codecademy.com/courses/React/react_video-${option}.mp4`)
class App extends Component {
    constructor(props) {
        super(props)
        this.state = { src: null }
        this.chooseVideo = this.chooseVideo.bind(this)
    }

    chooseVideo(newVid){
        this.setState({src: VIDEOS[newVid]})
    }

    render() {
        return (
            <div className='card col-sm-6 bg-dark mx-auto my-5 py-5 border border-bottom border-5 border-danger'>
                <h1 className='text-center text-secondary fw-bolder'>Video Player by<code>FT</code></h1>
                <Menu chooseVideo={this.chooseVideo}/>
                <Video src={this.state.src}/>
            </div>
        )
    }
}
export default App