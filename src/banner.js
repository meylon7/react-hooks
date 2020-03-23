import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return {
        chatbanner: state.account.chatbanner
    }
}

// Higher Order Component
export default connect(mapStateToProps)(function Banner(props){
    const { chatbanner } = props;
    return (
        <div class="sectionHeader">
			<span class="banner ver2">
               <em>{chatbanner}</em>
			</span>
		</div>
        
    )
})