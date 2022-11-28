import { React, useState } from 'react';
import coffe from './coffe.json';
import './style.css';
function App() {

	/*Declaring static variables*/
	const list_coffe = coffe;
	const list_ingredients = ["Coffee", "1oz Espresso", "Foamed milk", "Ice cream", "Cream", "Espresso", "2oz Espresso", "Traditional", "Sweet", "Panela", "Steamed Milk", "Long pulled espresso", "Chocolate", "Sugar", "Hot Water", "1oz Steamed Milk", "Short pulled espresso", "Whiskey", "Foam"]


	/*Declaration of hooks*/
	const [url, setUrl] = useState('https://crosti.ru/patterns/00/03/4d/46_picture_c045620d.jpg')
	const [title, setTitle] = useState('Такого кофе нет')
	const [description, setDescription] = useState('Попробуйте другие ингредиенты')
	var [list_picked_ingredient, setIngredient] = useState([])


	/*Declaration of an arrow function that is hung on an event in the <input> element.
	The algorithm of the function:
	The input parameter of the function is the <input> parameters from the returned document.
	If the "check" parameter is True, it is added to the array that stores the selected ingredients, if "check" is False, it is removed from this array.
	Next, a search is performed among the entire list of input data (json file) by the selected parameters, and in accordance with one of the variations outputs it. 
	Otherwise, it transmits information that there are no suitable options.
	*/
	const onchange = (e) => {
		let k = 0;
		if (e.target.checked) {
			var c = list_picked_ingredient
			c.push(e.target.value)
			setIngredient(c)
		}
		else {
			c = list_picked_ingredient
			c.splice(c.indexOf(e.target.value), 1)
			setIngredient(c)

		}
		var f = list_picked_ingredient.sort();
		list_picked_ingredient = f;
		console.log(list_picked_ingredient)
		for (var i = 0; i < list_coffe.length; i++) {
			if (JSON.stringify(c) === JSON.stringify(list_coffe[i].ingredients.sort())) {
				setUrl(list_coffe[i].image)
				setTitle(list_coffe[i].title)
				setDescription(list_coffe[i].description)
				k = k + 1
				break
			}
		}
		if (k === 0) {
			setUrl('https://crosti.ru/patterns/00/03/4d/46_picture_c045620d.jpg')
			setTitle('Такого кофе нет')
			setDescription('Попробуйте другие ингредиенты')
		}
	}
	/*Returned Html data*/
	return (

		<div className="App">
			<div class="text-content">
            <p class="title">What's the coffee?</p>
            <p class="subtitle">We mix the ingredients and get a drink</p>
        </div>

			<table className="table">
				<tbody class = "table table-borderless">
					{[...Array(5)].map((x, i) =>
						<tr>
							{[...Array(parseInt(list_ingredients.length / 4))].map((y, j) =>
								<td className='ben'>
									<input type="checkbox" value={list_ingredients[i + 5 * j]} onChange={onchange} style={{ margin: "20px"}}></input>
									<span>{list_ingredients[i + 5 * j]}</span>
								</td>
							)}
						</tr>
					)}
				</tbody>
			</table>
			<center>
				<div>

					<div class="cofdiv">
						<img class="image" id="coffimg" src={url}/>
						<p class="p-title">{title}</p>
						<p class="p-desc">{description}</p>
					</div>
				</div>
			</center>
		</div>
	);
}

export default App;
