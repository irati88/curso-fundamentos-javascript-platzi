// -- FUNCIÓN TRADICIONAL -- //

function breakfast (proteína, verdura) {
    return `${proteína} ${verdura}`
};

breakfast("🥩, 🥦");

// -- ARROW FUNCTIONS -- //

const lunch = (proteína, verdura) => {
    return `${proteína} ${verdura}`
};

lunch("🥩, 🥦");

// --------------------------------------------------------- //

const greeting = function (name) {
    return `Hola, ${name}`
};

// Arrow function - explicit return (cuando utilizamos la palabra "return")

const newGreeting = (name) => {
    return `Hola, ${name}` // explicit return
};

// Arrow function - implicit return (cuando eliminamos la palabra "return" y las llaves tras la flecha)

const newGreetingImplicit = (name) => `Hola, ${name}` // implicit return

// También podríamos quitarle los paréntesis porque sólo hay 1 parámetro

const withoutParenthesis = name => `Hola, ${name}`

// Aquí al haber 2 parámetros, debe llevar paréntesis

const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hola, yo soy ${name} ${lastName}`

// Lexical Binding -- Enlace léxico

const fictionalCharacter = { // - Creamos el objeto - fictionalCharacter
    name: "Uncle Ben", // Añadimos una propiedad - name
    messageWithTraditionalFunction: function (message) { // Y el método messageWithTraditionalFunction que será el mensaje
        console.log(`${this.name} says: ${message} `)
    },
    messageWithArrowFunction: (message) => { // Y el método messageWithTraditionalFunction que será el mensaje
        console.log(`${fictionalCharacter.name} says: ${message} `) // No entiende el "this" por lo que habría que llamar al objeto para imprimir el name
    }
}

fictionalCharacter.messageWithTraditionalFunction("With great power comes great responsibility");
fictionalCharacter.messageWithArrowFunction("Beware of the Doctor Octopus");

