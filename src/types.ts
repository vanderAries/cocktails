export interface Ingredient {
    name: string;
    quantity: number;
    color: string;
}

export interface Cocktail {
    id: number;
    name: string;
    ingredients: Ingredient[];
}

export interface Category {
    id: number;
    name: string;
    coctails: number[];
}
