const questions = [
    {
        question: 'Which superhero has an assistant called Robin?',
        optionA: 'Superman',
        optionB: 'Aquaman',
        optionC: 'Batman',
        optionD: 'Wonder Woman',
        correctOption: 'Batman', 
    },

    {
        question: 'What does water turn into when it freezes?',
        optionA: 'Ice',
        optionB: 'Steam',
        optionC: 'Coke',
        optionD: 'Fanta',
        correctOption: 'Ice',
    },

    {
        question: 'Which sport involves two small bats, a ball and a table?',
        optionA: 'Table tennis',
        optionB: 'Snooker',
        optionC: 'Darts',
        optionD: 'Golf',
        correctOption: 'Table tennis',
    },

    {
        question: 'What country, beginning with the letter R, is the biggest country in the world',
        optionA: 'Rome',
        optionB: 'Riga',
        optionC: 'Romania',
        optionD: 'Russia',
        correctOption: 'Russia',
    },

    {
        question: 'How many zeros are there in one hundred thousand?',
        optionA: 'One',
        optionB: 'Three',
        optionC: 'Four',
        optionD: 'Five',
        correctOption: 'Five'
    },

    {
        question: 'Stockholm is the capital city of which country?',
        optionA: 'Ireland',
        optionB: 'Sweeden',
        optionC: 'Norway',
        optionD: 'Spain',
        correctOption: 'Sweden',
    },

    {
        question: 'Can you unscramble the following word to reveal a number between one and ten: VNSEE',
        optionA: 'Six',
        optionB: 'One',
        optionC: 'Three',
        optionD: 'Seven',
        correctOption: 'Seven',
    },

    {
        question: 'What is the definition of a habitat?',
        optionA: 'A hotel',
        optionB: 'A car',
        optionC: 'The natural home of an animal',
        optionD: 'Spain',
        correctOption: 'The natural home of an animal',
    },

    {
        question: 'Which country used picture writing many years ago called hieroglyphics?',
        optionA: 'Italy',
        optionB: 'USA',
        optionC: 'England',
        optionD: 'Egypt',
        correctOption: 'Egypt', 
    },

    {
        question: 'Who released a song in 2019 called "Hold Me While You Wait"?',
        optionA: 'Spice Girls',
        optionB: 'Lewis Calpaldi',
        optionC: 'Westlife',
        optionD: 'Jedward',
        correctOption: 'Lewis Calpaldi'
    },

    {
        question: 'How many colours are mentioned in the Rainbow Song?',
        optionA: 'Three',
        optionB: 'Five',
        optionC: 'Six',
        optionD: 'Seven',
        correctOption: 'Seven',
    },

    {
        question: 'What is half of 66?',
        optionA: '11',
        optionB: '22',
        optionC: '9',
        optionD: '33',
        correctOption: '33',
    },

    {
        question: 'Which continent does Great Britain belong to?',
        optionA: 'Europe',
        optionB: 'Africa',
        optionC: 'Asia',
        optionD: 'USA',
        correctOption: 'Europe',
    },

    {
        question: 'How many points does a snowflake have?',
        optionA: '4',
        optionB: '3',
        optionC: '6',
        optionD: '9',
        correctOption: '6',
    },

    {
        question: 'What is the name of the largest desert in Asia?',
        optionA: 'Sahara',
        optionB: 'Wexford',
        optionC: 'Gobi',
        optionD: 'Dublin',
        correctOption: 'Gobi',
    },

    {
        question: 'What type of food do penguins eat?',
        optionA: 'Chocolate',
        optionB: 'Fish',
        optionC: 'Toast',
        optionD: 'Pancakes',
        correctOption: 'Fish', 
    },

    {
        question: 'As well as cheese, ham and tomato, what other topping is usually on a Hawaiian Pizza?',
        optionA: 'Pineapple',
        optionB: 'Cabbage',
        optionC: 'Apples',
        optionD: 'Oranges',
        correctOption: 'Pineapple',
    },

    {
        question: 'Who was the winner of The X Factor in 2015?',
        optionA: 'Olly Murs',
        optionB: 'Leona Lewis',
        optionC: 'Louise Johnson',
        optionD: 'Oasis',
        correctOption: 'Louisa Johnson',
    },

    {
        question: 'What is 11 + 111?',
        optionA: '4',
        optionB: '1000',
        optionC: '122',
        optionD: '222',
        correctOption: '122',
    },

    {
        question: 'What flavour crisps are in a blue packet of Walkers?',
        optionA: 'Chocolate',
        optionB: 'Orange',
        optionC: 'Ice',
        optionD: 'Cheese and Onion',
        correctOption: 'Cheese and Onion',
    },

    {
        question: 'How many days are there in January?',
        optionA: '4',
        optionB: '30',
        optionC: '31',
        optionD: '28',
        correctOption: '31', 
    },

    {
        question: 'What year did the Second World War end?',
        optionA: '1916',
        optionB: '2000',
        optionC: '1945',
        optionD: '1066',
        correctOption: '1945',
    },

    {
        question: 'What are incisors, canines, molars and premolars all types of?',
        optionA: 'Teeth',
        optionB: 'Shoes',
        optionC: 'Sweets',
        optionD: 'Cereal',
        correctOption: 'Teeth',
    },

    {
        question: 'What sugary fluid do bees remove from flowers to help them make honey?',
        optionA: 'Water',
        optionB: 'Coke',
        optionC: 'Fanta',
        optionD: 'Nectar',
        correctOption: 'Nectar',
    },

    {
        question: 'Which male Disney character is able to fly and refuses to grow up?',
        optionA: 'Dumbo',
        optionB: 'Elsa',
        optionC: 'Peter Pan',
        optionD: 'Santa',
        correctOption: 'Peter Pan',
    },

    {
        question: 'How many months of the year end with the letter Y?',
        optionA: '12',
        optionB: '1',
        optionC: '4',
        optionD: '26',
        correctOption: '4',
    },

    {
        question: 'How many years are there in one century?',
        optionA: '1',
        optionB: '10',
        optionC: '25',
        optionD: '100',
        correctOption: '100',
    }

]