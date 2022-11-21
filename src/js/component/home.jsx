import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue ] = useState("");
	const [todos, setTodos ] = useState([]);
	return ( 
		<div className="container"> 
		<h1>My Todos {inputValue}</h1>
			<ul>
			<li> 
				<input type="text"
				onChange={(e) => setInputValue(e.target.value)}
				value = {inputValue}
				onKeyPress= {(e) => {
					if (e.key === "Enter") {
						setTodos(todos.concat(inputValue));
						setInputValue("");
					}
				}
				
				}
				 placeholder="Tus tareas" />
			</li>
			{todos.map((item, index) => (
				<li> {item} <i class="fas fa-trash-alt" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i> </li>
			))}
			</ul>
			<div> {todos.length} tareas</div>

		</div>
	);
};
export default Home;
