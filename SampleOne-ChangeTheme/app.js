'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className= document.body.className;
    if(className=="light-theme"){
        this.textContent="Dark"
    }
    else{
        this.textContent="Light"
    }

    console.log('current class name: ' + className);
});



const logs = [
    { 'user': '1', 'page': 'A'},
    { 'user': '2', 'page': 'B'},
    { 'user': '1', 'page': 'B'},
    { 'user': '1', 'page': 'D'},
    { 'user': '2', 'page': 'A'},
    { 'user': '3', 'page': 'B'},
    { 'user': '3', 'page': 'D'},
    { 'user': '1', 'page': 'C'},
    { 'user': '3', 'page': 'C'},
    { 'user': '1', 'page': 'C'},
    { 'user': '2', 'page': 'C'},
    { 'user': '3', 'page': 'B'},
    { 'user': '1', 'page': 'A'},
    { 'user': '3', 'page': 'C'},
]

function getHistoryByUser(logs) {
    const h = {}
    for (let l of logs) {
        if (h[l.user]) {
            h[l.user].push(l.page)
        } else {
            h[l.user] = [l.page]
        }
    }
    return h
}

function getHistoryCombinations(history) {
    return Object.keys(history).reduce((acc, user) => {
        if (history[user].length < 3) return acc
        
        for(let i = 0; i < history[user].length - 3; i++) {
            const combination = history[user].slice(i, i+3).join('')
            
            acc[combination] = (acc[combination] || 0) + 1
            
            if (acc[combination] > acc.maxValue) {
                acc.max = combination
                acc.maxValue = acc[combination]
            }
        }
        
        return acc
    }, { max: "", maxValue: 0 })
}

function getMaxCombination(historyCombinations) {
    return historyCombinations.max
}

const mostPopularSequence = [getHistoryByUser, getHistoryCombinations, getMaxCombination].reduce((res, fn) => fn(res), logs)
console.log(mostPopularSequence);