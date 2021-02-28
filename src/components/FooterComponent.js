import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer" align="center">
                    <span className="text-muted">All Rights Reserved 2021 @Priyanka </span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent