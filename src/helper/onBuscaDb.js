const magalu = require('../model/magalu')

async function onBuscaDb(id) {

    const  [userInicial, created] = await magalu.findOrCreate({
        raw: true,
        where: {
            id: id
        }
        //   },
        //   attributes: ['name', 'email', 'endereco', 'numero', 'bairro', 'emailChecked', 'cashforceAdm']
    })
    return userInicial
}
module.exports = onBuscaDb