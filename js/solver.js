function currDateTime() {
  var d = new Date();
  var listOfDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var day = d.getDay();
  // var weekDay = 'Today is ' + ':' + ' ' + ' ' + listOfDays[day];

  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();

  var prefix = hour >= 12 ? ' PM' : 'AM';
  hour = hour >= 12 ? hour - 12 : hour;

  if (hour === 0 && prefix === 'PM') {
    if (min === 0 && sec === 0) {
      hour = 12;
      prefix = ' Noon';
    } else {
      hour = 12;
      prefix = ' PM';
    }
  }

  if (hour === 0 && prefix === 'AM') {
    if (min === 0 && sec === 0) {
      hour = 12;
      prefix = ' Midnight';
    } else {
      hour = 12;
      prefix = ' AM';
    }
  }
  document.querySelector('.task__currdatetime').innerHTML =
    'Today is ' +
    ':' +
    ' ' +
    ' ' +
    listOfDays[day] +
    '<br>' +
    'Current time is : ' +
    hour +
    prefix +
    ' : ' +
    min +
    ' : ' +
    sec;
}

function reverseNum() {
  var str = prompt('enter num');
  let reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  document.querySelector('.task__reversenum').innerHTML = reversed;
}

function factorialNum() {
  let input = parseInt(prompt('Enter the number to get factorial of: '));
  let res = input;
  for (let i = 1; i < input; i++) {
    res = i * res;
  }
  document.querySelector('.task__factorialnum').innerHTML = res;
}

function largerNumFinder() {
  let a = parseInt(prompt('Enter the first num to find the larger'));
  let b = parseInt(prompt('Enter the second num to find the larger'));
  if (a > b) {
    document.querySelector('.task__largerfinder').innerHTML = a;
  }
  document.querySelector('.task__largerfinder').innerHTML = b;
}

function arrayJoiner() {
  myColor = ['Red', 'Green', 'White', 'Black'];
  document.querySelector('.task__arrayjoiner').innerHTML =
    myColor.join() + '<br>' + myColor.join('+');
}

let month_name = function monthFinder(date) {
  let monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthList[date.getMonth()];
};
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));
document.querySelector('.task__monthfinder').innerHTML =
  month_name(new Date('10/11/2009')) +
  '<br>' +
  month_name(new Date('11/13/2014'));

function upperCaseTester(str) {
  regexp = /^[A-Z]/;
  var str = prompt('Input a string');
  if (regexp.test(str)) {
    document.querySelector('.task__uppercasetester').innerHTML =
      "String's first char is uppercase";
  } else {
    document.querySelector('.task__uppercasetester').innerHTML =
      "String's first char is not uppercase";
  }
}

function smileDrawer() {
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext) {
    var smile = canvas.getContext('2d');
    smile.beginPath();
    smile.arc(200, 200, 100, 0, Math.PI * 2, true); 
    smile.moveTo(275, 200);
    smile.arc(200, 200, 75, 0, Math.PI, false);
    smile.moveTo(150, 150);
    smile.arc(170, 150, 20, 0, Math.PI * 2, true); 
    smile.arc(230, 150, 20, 0, Math.PI * 2, true); 
    smile.stroke();
  }
}
document.querySelector('.task__smiledrawer').innerHTML = smileDrawer();

function divContentPrinter() {
  console.log(
    document.getElementById('string-3').textContent +
      '\n' +
      document.getElementById('string-5').textContent +
      '\n' +
      document.getElementById('string-2').textContent +
      '\n' +
      document.getElementById('string-6').textContent +
      '\n' +
      document.getElementById('string-4').textContent +
      '\n' +
      document.getElementById('string-1').textContent +
      '\n'
  );
}

function colorDiv() {
  let divElements = document.getElementsByClassName('element');
  for (let i = 0; i < divElements.length; i++) {
    if (i < 3) {
      divElements[i].style.color = 'red';
    } else {
      divElements[i].style.color = 'green';
    }
  }
}

function todoListAdder() {
  let listGetter = document.getElementById('todo-list');

  let tasks = [
    'Buy lemonade',
    'Make toasts',
    'Repair car',
    'Play games',
    'Pet a cat',
  ];

  for (let i = 0; i < tasks.length; i++) {
    listGetter.innerHTML += `<li class="task">${tasks[i]}</li>`;
  }
}

function hrTagAdder() {
  let text = document.getElementsByTagName('p');

  for (let i = 0; i < text.length; i++) {
    text[i].innerHTML += '<hr>';
  }
}

function contentChanger() {
  let cartItems = document.getElementById('cart-items');
  let items = document.getElementsByClassName('item');
  let divCreator = document.createElement('div');
  cartItems.children[1].remove();
  divCreator.innerHTML = 'Canned Fish<span class="qty"> x 4</span>';
  for (let i = 0; i < items.length; i++) {
    if (items[i].textContent.indexOf('Chocolate bar' >= 0)) {
      cartItems = cartItems.replaceChild(divCreator, items[i]);
    }
  }
}

function tasksCreator() {
  let el = document.querySelector('.task__taskscreator');
  let task;
  do{
    task = prompt('Add new task: ', '');
      if (task) {
          let ulCreator = document.createElement('ul');
          let liCreator = document.createElement('li');
          liCreator.textContent = task;
          ulCreator.appendChild(liCreator);
          el.append(ulCreator);
      }
  } while(task)
}
