import React, {Component} from 'react'

class Menu extends Component {
    render() {
        return (
            <form>
                <input type='radio' name='src' value='fast' /> fast
                <input type='radio' name='src' value='slow' /> slow
                <input type='radio' name='src' value='cute' /> cute
                <input type='radio' name='src' value='eek' /> eek
            </form>
        );
    }
}
export default Menu