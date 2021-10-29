let userName = 'Игорь',
    age = '29',
    userProfession = 'электромонтажник',
    num = 7;

alert(`Привет, ${userName}`);
alert(`Ваш возраст ${age} лет`);
alert(`Через 7 лет  Вам исполнится ${+age + 7} лет`);
alert(`Ваша профессия ${userProfession}`);
alert(`Четное ли Вам число лет ${!Boolean(age % 2)}`);
