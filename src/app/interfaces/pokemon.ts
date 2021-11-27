export interface Pokemon {
    id: number;
    name: string;
    ability: string[];
    type: string[];
    weakness: string[];
    heigth: number;
    weigth: number;
    ps: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    description: string;
    image?: string;
}