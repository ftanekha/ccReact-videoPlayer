import React, {Component} from 'react'

class Menu extends Component {
    render() {
        return (
            <form className='mx-auto shadow text-center text-secondary fw-bolder my-3'>
                <input type='radio' name='src' value='fast' /> fast
                <input type='radio' name='src' value='slow' /> slow
                <input type='radio' name='src' value='cute' /> cute
                <input type='radio' name='src' value='eek' /> eek
            </form>
        );
    }
}
export default Menu