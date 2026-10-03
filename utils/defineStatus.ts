const DefineStatus = (status: number) => {
    var result = ''

    switch(status){
        case 0:
            result = 'agendado'
        break
        case 1:
            result = 'em andamento'
        break
        case 2:
            result = 'encerrado'
        break
        default:
            result = '???'
        break
    }

    return result
}
export default DefineStatus