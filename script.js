const fs = require('fs');

function convertCompanyLogoToLower(jsonArray) {
    return jsonArray.map(item => {
        if (item.hasOwnProperty('companyLogo')) {
            item.companyLogo = item.companyLogo.toLowerCase();
        }
        return item;
    });
}

// Read the JSON file
fs.readFile('data2.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Convert companyLogo values to lowercase
        const convertedData = convertCompanyLogoToLower(jsonData);

        // Write the modified JSON back to the file
        fs.writeFile('data2_modified.json', JSON.stringify(convertedData, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error writing the modified data to file:', err);
            } else {
                console.log('Conversion successful! Check data2_modified.json');
            }
        });
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});
