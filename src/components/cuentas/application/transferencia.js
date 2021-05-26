module.exports = ({ CuentaRepository }) => {
    return async ({ idorigen, iddestino, dinero }) => { 
        
        if (!idorigen) throw new Error('Cuenta no existe')
        const cuentadestino = await CuentaRepository.getById(iddestino)//objeto
        const dinerocuentadestino = parseInt(cuentadestino.dinero)//campo

        if (!iddestino) throw new Error('Account does not exist')
        const cuentaorigen = await CuentaRepository.getById(idorigen)//objeto
        const dinerocuentaorigen = parseInt(cuentaorigen.dinero)//valor del campo

        if(dinero <= dinerocuentaorigen){
            const dinerocuentaactualizada = dinero + dinerocuentadestino
            const nuevacuentadestino = {
                dinero: dinerocuentaactualizada
            }

            const dinerocuentaorigenactualiza = dinerocuentaorigen - dinero
            const nuevacuentaorigen = {
                dinero: dinerocuentaorigenactualiza

            }
            CuentaRepository.update(idorigen, nuevacuentaorigen)
            return CuentaRepository.update(iddestino, nuevacuentadestino)
        }else{
            throw new Error('TNo plata')
        }
    }
}