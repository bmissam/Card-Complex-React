import React from 'react'

class Holder extends React.Component {
    render () {
        return (
            <div>
             <span id="holder">{this.props.holder}</span>
            </div>
        )
    }
}
export default Holder