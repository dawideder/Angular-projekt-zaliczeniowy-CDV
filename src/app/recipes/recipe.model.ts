import { Ingredient } from "../.shared/ingredients.model";

export class Recipe {
	constructor(public name: string,
							public description: string,
							public imagePath: string,
							public ingredients: Ingredient[]) { }
}

// can use the below approach (how you would do with vanila JS), but typscript takes care of all of the
// below with the above

// export class Recipe {
//     public name: string;
//     public description: string;
//     public imagePath: string;
//     public ingredients: Ingredient[];

//     constructor (name: string, description: string, imagePath: string, ingredients: Ingredient[]) { 
//         this.name = name;
//         this.description = description;
//         this.imagePath = imagePath;
//         this.ingredients = ingredients;
//     }
// }