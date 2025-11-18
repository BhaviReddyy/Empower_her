function processPeople(peopleArray) {
    return peopleArray.map((

        {
            name,
            address: {
                city,
                street: {
                    name: streetName
                }
            }
        }
    ) => {

        return `${name} lives in ${city} on ${streetName}`;
    });
}

// Example Input Data
const people = [{
        name: "Alice",
        address: {
            city: "New York",
            street: {
                name: "Broadway",
                number: 123
            }
        }
    },
    {
        name: "Bob",
        address: {
            city: "Los Angeles",
            street: {
                name: "Sunset Boulevard",
                number: 456
            }
        }
    },
    {
        name: "Charlie",
        address: {
            city: "Chicago",
            street: {
                name: "Michigan Avenue",
                number: 789
            }
        }
    }
];


const result = processPeople(people);

console.log("Original Data:");
console.log(people);

console.log("\nFormatted Output using Multi-Level Destructuring:");
console.log(result);