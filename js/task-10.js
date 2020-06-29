// Получить массив всех умений всех пользователей (поле skills), 
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

import users from './users.js'

const getSortedUniqueSkills = users => {
    return  users.reduce((acc, user) => {
        acc.push(...user.skills)
        return acc;
     },[]).filter((el, ind, arr) => arr.indexOf(el) === ind).sort()
 }



console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]