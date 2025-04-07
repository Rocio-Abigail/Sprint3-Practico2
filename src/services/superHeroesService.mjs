import superHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorId(id) {
    return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos();    
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await superHeroRepository.buscarPorAtributo(atributo, valor);
}
export async function obtenerSuperheroesMayoresDe30() {
    return await superHeroRepository.obtenerMayoresDe30();
}
export async function crearSuperHeroe(datosHeroe) {
    return await superHeroRepository.crearSuperHeroe(datosHeroe);
}
export async function actualizarSuperHeroe(id, datosActualizados) {
    return await superHeroRepository.actualizarSuperHeroe(id, datosActualizados);
}
export async function eliminarSuperHeroePorId(id) {
    return await superHeroRepository.eliminarSuperHeroePorId(id);
}
export async function eliminarSuperHeroePorNombre(nombre){
    return await superHeroRepository.eliminarSuperHeroePorNombre(nombre)
}