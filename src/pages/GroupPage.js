import React from 'react';
import PeopleForm from './PeopleForm.js';
import './GroupPage.css';

function GroupPage() {
	return(
		<div className = "gpage">
			<h3 className = "gTitle">Enter your group info: </h3>
			<p>
				* Name and email for each person is required!
				<br></br>
				* If no alerts pop up after submittion, the emails have been sent successfully! 
			</p>
			<ul className = "GroupList">
				<PeopleForm />
			</ul>
		</div>
	);
}

export default GroupPage;