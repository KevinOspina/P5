const path = require('path');
const fs = require('fs');

var configUtil = {
    getConfigDB: () => {
        const config_json = path.join(__dirname, './configDB.json');
        return JSON.parse(fs.readFileSync(config_json, 'utf8'));
    }
}

module.exports = configUtil;

