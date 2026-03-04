const hero = {
    name: "Luna the Brave",
    class: "Mage",
    level: 12,
    health: 85,
    mana: 120,
    isAlive: true,
};

// There are two types to access values inside a objects :-
// 1. hero. or hero[dot] (just for understanding) to access any properties, when you know 100% that this is the only values is not coming from a API or dynamically then use hero[dot] when you hardcode the values
// 2. hero[] :- its coming from response, accumulator or you're processing from the data then use hero[]