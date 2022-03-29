const gather = require('./src/gather');
const generate = require('./src/generateHTML');

async function init() {
    const manager = await gather.gatherManager();
    const engineers = await gather.gatherEngineers();
    const interns = await gather.gatherInterns();

    console.log([manager, ...engineers, ...interns]);
    
    generate.generateCards([manager, ...engineers, ...interns])
    
    generate.writeHTML([manager, ...engineers, ...interns])
}

init();