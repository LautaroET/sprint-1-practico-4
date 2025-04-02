import SuperheroesRepository from '../respository/superheroesRepository.mjs';

const respository = new SuperheroesRepository();


export function obtenerSuperheroePorId(id){
    const superheroes = respository.obtenerTodos();
    return superheroes.find(hero=>hero.id==id);
}

export function buscarSuperheroesPorAtributo(atributo,valor){
    const superheroes = respository.obtenerTodos();
    return superheroes.filter(hero=>
        String(hero[atributo]).toLowerCase().includes(valor.toLowerCase)
    );
}

export function obtenerSuperheroesMayoresDe30(){
    const superheroes = respository.obtenerTodos();
    return superheroes.filter(hero=>hero.edad>30 && hero.planetaOrigen === 'Tierra' && hero.poder.length >=2)
};