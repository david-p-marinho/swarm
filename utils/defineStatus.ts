const DefineStatus = (status: number) => {
    var result = ''

    switch(status){
        case 0:
            result = 'Em breve'
        break
        case 1:
            result = 'Em andamento'
        break
        case 2:
            result = 'Encerrado'
        break
        default:
            result = '???'
        break
    }

    return result
}
export default DefineStatus