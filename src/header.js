import React from 'react';
import { connect } from 'react-redux';
import { setUsername } from './redux/actions';

function mapStateToProps(state){
    return {
        username: state.account.username
    }
}

// Higher Order Component
export default connect(mapStateToProps)(function Header(props){
    const { username, dispatch } = props;

    function handleChangeUser(e){
        dispatch(setUsername(e.target.value));
    }

    return (
        <div className="header">
         <ul>
           <li><a href="#">Twitter</a></li>
           <li><a href="#">Codepen</a></li>
           <li><a href="#">Email</a></li>
           <li><a href="#">Dribbble</a></li>
           <li><a href="#">Github</a></li>
           <li>
            <p className="para-anim">Hello - {username} 👋</p>
          </li>
        </ul>
       </div>
    )
})