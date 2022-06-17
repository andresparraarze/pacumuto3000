const Intern = require('../lib/Intern');

// creating intern  
test('creates an Intern object', () => {
    const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail', 'SFSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// School
test('gets employee school', () => {
    const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail', 'SFSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role
test('gets role of employee', () => {
    const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail.com', 'SFSU');

    expect(intern.getRole()).toEqual("Intern");
}); 