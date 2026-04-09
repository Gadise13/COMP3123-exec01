export interface Wand {
    wood: string;
    core:string;
    length: number;
}

export interface CharacterModel {
    id: string;
    name: string;
    species: string;
    house: string;
    wizard: boolean;
    ancestry: string;
    actor: string;
    image: string;
    wand: Wand;
}