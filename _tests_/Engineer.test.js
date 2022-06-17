const Engineer = require('../lib/Engineer');

// creating engineer 
test('creates an Engineer object', () => {
    const engineer = new Engineer('Nicole', 90, 'nicole.elisaw@gmail', 'nicolewallace09');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// github
test('gets engineer github value', () => {
    const engineer = new Engineer('Nicole', 90, 'nicole.elisaw@gmail', 'nicolewallace09');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role  
test('gets role of employee', () => {
    const engineer = new Engineer('Nicole', 90, 'nicole.elisaw@gmail', 'nicolewallace09');

    expect(engineer.getRole()).toEqual("Engineer");
});