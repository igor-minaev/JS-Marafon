#14 Функции

Шутки в сторону! Мы подошли к функциям и это еще одна фундаментальная часть программирования без которой сложно представить движение вперед

Функции выполняю 2 очень важные задачи:
 1. Позволяют использовать один и тот же код в разных местах и с разными параметрами
 2. Скрывают реализацию. То есть, позволяют использовать какой-то функционал не вдаваясь в подробности о том как он устроен

Вы уже использовали встроенные функции alert() и console.log()
Пришло время научиться писать свои собственные

Потратьте достаточно времени на понимание этой сущности, уже на этой неделе у вас будет хорошая практическая задача

https://learn.javascript.ru/function-basics

#14.1 Немного практики

Создайте простой калькулятор Calc, который будет принимать значение a и значение b, а так же идентификатор нужного действия.

Пример вызова такой функции 

Calc(‘sum’, 1, 2) - возвращает 3
Calc(‘multi’, 1, 2) - возвращает 2

И так далее, со всеми математическими действиями, которые вы изучили в задаче #7

Но и это еще не все. 

Ваш калькулятор должен возвращать сообщение “Error” в том случае если вы не указали все 3 параметра или если вычисляемые значения оказались не числами. 

В случае с неверным “идентификатором нужного действия” возвращайте “unknown operation”