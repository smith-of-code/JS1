var questions = [
    {
        level: 1,
        item: 'Как заканчивается присказка: "Мы и сами с..."?',
        answers: ['с волосами', 'с часами', 'с долгами', 'с усами'],
        correct: 'с усами',
        reward: 100
    },
    {
        level: 1,
        item: 'Как называют человека, находящегося под чьим-либо покровительством?',
        answers: ['драже', 'протеже', 'бланманже', 'неглиже'],
        correct: 'протеже',
        reward: 100
    },
    {
        level: 2,
        item: 'Как в СССР называли людей, регулярно привозивших товары для сбыта мелким оптом и в розницу?',
        answers: ['веретенники', 'шпульники', 'катушечники', 'челноки'],
        correct: 'челноки',
        reward: 500
    },
    {
        level: 2,
        item: ' Как часто называют текст, написанный в социальной сети?',
        answers: ['караул', 'пост', 'наряд', 'вахта'],
        correct: 'пост',
        reward: 500
    },
    {
        level: 3,
        item: 'Что говорят о быстро убежавшем человеке?',
        answers: ['наточил ножи', 'наколол дров', 'умыл руки', 'навострил лыжи'],
        correct: 'навострил лыжи',
        reward: 1000
    },
    {
        level: 3,
        item: 'Памятником какому поэту в фильме "Джентльмены удачи" оказался "мужик в пиджаке"?',
        answers: ['Лермонтову', 'Маяковскому', 'Пушкину', 'Грибоедову'],
        correct: 'Лермонтову',
        reward: 1000
    }

];



var game = {
    name: 'Петр',
    money: 0,
    getQuestion: function (level) {
        for (let i = 0;i<questions.length;i++){
            if (questions[i].level !== level){
                continue
            }
            let gamer = +prompt(`
        ${questions[i].item}
        1 - ${questions[i].answers[0]}
        2 - ${questions[i].answers[1]}
        3 - ${questions[i].answers[2]}
        4 - ${questions[i].answers[3]} 
        `) - 1;
            if (questions[i].correct.indexOf(questions[i].answers[gamer]) === -1){
                alert(`Ответ неверный! Верный ответ ${questions[i].correct}`);
                return false

            }else {
                alert(`
             И это правильный ответ!!!!
             Вы стали богаче на ${questions[i].reward} бубликов!!!
            `);
                this.money += questions[i].reward;
            }
        }
        return true
    },
    startGame: function () {
       var solution = +prompt(`
       Хочешь сыграть в "Кто хочет стать миллионером?"
       1 - да 
       0 - нет
       `);
       var level;
        if (solution){
            alert(`Уровень 1 : цена за правильный ответ = 100 бубликов`);
            solution = this.getQuestion(1);
        }else {
            alert(`Вы проиграли`);
        }
        if (solution){
            alert(`Уровень 2 : цена за правильный ответ = 500 бубликов`);
            solution = this.getQuestion(2);
        }else {
            alert(`Вы проиграли`);
            return
        }
        if (solution){
            alert(`Уровень 1 : цена за правильный ответ = 1000 бубликов`);
            solution = this.getQuestion(3);
        }else {
            alert(`Вы проиграли`);

        }

    }
};

game.startGame();