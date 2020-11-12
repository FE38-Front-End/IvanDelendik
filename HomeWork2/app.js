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

let dateSearch = null;

for ( i=0; i < data.length; i++) {
    if (`${inputLastName}`.toLowerCase() === data[i].lastName.toLowerCase()) {
        dateSearch = data[i];
        break;
    }    
}

if (dateSearch) {
    
    alert(` user name: ${dateSearch.firstName} ${dateSearch.lastName}. \n user age: ${dateSearch.age}. `);
}
    else { 
        alert('No results found for your request')
    }

