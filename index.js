const gather = require('./src/gather');
const generate = require('./src/generateHTML');
const inquirer = require('inquirer')

async function init() {
    const manager = await gather.gatherManager();
    let engineers = []
    let interns = []
    
    while (true) {
        let response = await inquirer.prompt({
            type: 'list',
            name: 'addWhat',
            message: 'Please select one of the following options',
            choices: 
            [
                'Add Engineers',
                'Add Interns',
                'Done adding members'
            ]
        })

        if (response.addWhat === 'Add Engineers') {
            engineers = engineers.concat(await gather.gatherEngineers())
        } else if (response.addWhat === 'Add Interns') {
            interns = interns.concat(await gather.gatherInterns())
        } else if (response.addWhat === 'Done adding members') {
            generate.generateCards([manager, ...engineers, ...interns])
            generate.writeHTML([manager, ...engineers, ...interns])
            break;
        }
    }
}
init();