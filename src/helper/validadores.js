module.exports = class validadores {

    static async nomeSobrenome(msg, returnMsg) {

        const nome = msg.split(" ")
        console.log(nome.length)
        if (nome.length == 1) {
            console.log("entrou")
            return [`${returnMsg}`]
        }

    }






}