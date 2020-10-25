import React from "react";
import { useForm, useFieldArray} from 'react-hook-form';
import {Emailing} from "./Emailing.js"

function PeopleForm(){
	var filledPeople = [];
	var finalPeople = [];
	
	const { register, control, handleSubmit } = useForm({
		defaultValues: {
			people: [
			{ name: "", email: "", wishlist:"" },
			{ name: "", email: "", wishlist:"" },
			{ name: "", email: "", wishlist:"" },
			{ name: "", email: "", wishlist:"" },
			{ name: "", email: "", wishlist:"" }]
		  }
	});

	const { fields, append, remove } = useFieldArray({
		control, 
		name: "people"
	});

	const onSubmit = values => {
		// reset();
		for(var i = 0; i < values.people.length; i++ ){
			if (values.people[i].name !== "" && values.people[i].email !== ""){
				filledPeople.push(values.people[i]);
			}
		}
			
		if(filledPeople.length === 0){
			alert("No proper names and emails were entered!");
		} else if (filledPeople.length === 1 || filledPeople.length === 2){
			alert("Entered names and emails are not enough to be randomly paired!");
		} else{
			var start = filledPeople[filledPeople.length-1];

			while(filledPeople.length > 3){
				var recieve = [];
				recieve[0] = filledPeople[filledPeople.length-1];
				filledPeople.pop();
				var num = Math.floor(Math.random() * Math.floor(filledPeople.length));
				recieve[1] = filledPeople[num];
				finalPeople.push(recieve);
				var temp = filledPeople[num];
				filledPeople[num] = filledPeople[filledPeople.length-1];
				filledPeople[filledPeople.length-1] = temp;
			}
			var recieve1 = [];
			recieve1[0] = filledPeople[2];
			recieve1[1] = filledPeople[0];
			finalPeople.push(recieve1);
			
			var recieve2 = [];
			recieve2[0] = filledPeople[0];
			recieve2[1] = filledPeople[1];
			finalPeople.push(recieve2);
				
			var recieve3 = [];
			recieve3[0] = filledPeople[1];
			recieve3[1] = start;
			finalPeople.push(recieve3);

			Emailing(finalPeople);
		}	
	}

	return(
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="Group">
				{fields.map(({ id, name, email, wishlist}, index)=>{
					return (
						<li key={id} className="AddPerson">
							<input
								ref={register()}
								name={`people[${index}].name`}
								defaultValue={name}
								className="name" 
								placeholder="Name"
							/> 
							<input
								ref={register()}
								name={`people[${index}].email`}
								defaultValue={email}
								className="email" 
								placeholder="Email"
							/> 
							<input
								ref={register()}
								name={`people[${index}].wishlist`}
								defaultValue={wishlist}
								className="wishlist" 
								placeholder="Wishlist"
							/> 
							<button type="button" onClick={() => remove(index)} className="remove">
								<span>-</span>
							</button>
						</li>
					)
				})}
			</div>

			<button type="button" onClick={() => append({})} className="addButton">
				<span>Add more people!</span>
			</button>                      
			<input type="submit" className="submitButton"/>
		</form>
	);
}

export default PeopleForm;