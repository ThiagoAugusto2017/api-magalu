const user = require('../model/user')

async function onSaveDb(from, dados) {

    await user.update(
        dados, {
            where: {
                from: from
            }
        });



}
module.exports = onSaveDb