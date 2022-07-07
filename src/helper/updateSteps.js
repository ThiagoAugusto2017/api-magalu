const user = require('../model/user')

async function updateSteps(from, campanha, stage) {

    await user.update({
        stage: stage,
        campanha: campanha
    }, {
        where: {
            from: from
        }
    });


}

module.exports = updateSteps