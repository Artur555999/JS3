var a = +prompt('Введите свой возрост')
if (a <= 18) {
    alert('Вы ещё молоды,Вам нужно учится')
}else if (a == 19 || a<= 50) {
    alert('Вам нужно работать')
}else if (a == 50 || a <= 59) {
    alert('Вам скоро на пенсию')
}else if (a == 59 || a <= 100) {
    alert('Вы пенсионер')
}else{
    alert('Что то пошло не так')
}