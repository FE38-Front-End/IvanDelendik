let data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, 
    {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, 
    {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
]; 

const inputLastName = prompt('Please enter your last name');

let dateSearch = '';

for ( i=0; i < data.length; i++) {
    if (`${inputLastName}` === data[i].lastName) {
        dateSearch = data[i];
    }    
}

if (`${dateSearch.lastName}` === `${inputLastName}`) {
    
    alert(` user name: ${dateSearch.firstName} ${dateSearch.lastName}. \n user age: ${dateSearch.age}. `);
}
    else { 
        alert('No results found for your request')
    }

