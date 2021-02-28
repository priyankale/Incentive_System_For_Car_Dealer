import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div>Incentive System For Car Dealer</div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent