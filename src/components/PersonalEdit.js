import React, { Component } from 'react';
import data from '../data';

export class PersonalEdit extends Component {
	state = {
		firstName: data.firstName,
		lastName: data.lastName,
		phoneNumber: data.phoneNumber,
		email: data.email,
	};
	render() {
		return (
			<form>
				<input type="text" placeholder="Full Name" />
				<input type="text" placeholder="Phone Number" />
				<input type="text" placeholder="Email" />
				<button type="reset" onClick={this.props.toggleEdit}>
					Cancel
				</button>
				<button type="submit">Save</button>
			</form>
		);
	}
}

export default PersonalEdit;
