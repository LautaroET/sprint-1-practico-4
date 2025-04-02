export default class SuperHeroesDataSouser{
    //Metodo abstrato  para obtener todos los super heroes
    obtenerTodos(){
        throw new Error('Este metodo debe ser implementado por la sub clase');
    }
}