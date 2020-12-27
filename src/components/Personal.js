import React, { Component } from 'react';
import data from '../data';
import PersonalEdit from './PersonalEdit';

export class Personal extends Component {
	state = {
		editMode: false,
	};

	toggleEdit = () => {
		this.setState({
			editMode: !this.state.editMode,
		});
	};

	render() {
		// personalDisplay
		const personalDisplay = (
			<div>
				<h1>{`${data.firstName} ${data.lastName}`}</h1>
				<p>{data.phoneNumber}</p>
				<p>{data.email}</p>
				<button onClick={this.toggleEdit}>Edit</button>
			</div>
		);
		// if edit mode: false
		const section = !this.state.editMode ? (
			personalDisplay
		) : (
			<PersonalEdit toggleEdit={this.toggleEdit} />
		);

		return <div>{section}</div>;
	}
}

export default Personal;
