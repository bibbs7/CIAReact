import React from 'react'

import logo from '../SplitLogo.png';
class User extends React.Component {
    render() {
        const { params } = this.props.match
        return (
            <div>
                
                <h1>User</h1>
                <p>{params.id}</p>
            </div>
        )
    }
}
export default User