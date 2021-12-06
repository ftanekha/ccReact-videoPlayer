import React, {Component} from 'react'
class Menu extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick({target}){
        this.props.chooseVideo(target.value)
    }
    render() {
        return (
            <form className='mx-auto text-center text-secondary fw-bolder my-3' onClick={this.handleClick}>
                <input type='radio' name='src' value='fast' /> fast
                <input type='radio' name='src' value='slow' /> slow
                <input type='radio' name='src' value='cute' /> cute
                <input type='radio' name='src' value='eek' /> eek
            </form>
        );
    }
}
export default Menu