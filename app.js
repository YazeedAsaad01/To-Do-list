const headline = document.getElementById('headline');
const updateBtn = document.querySelector('.update-btn');
const theInput = document.querySelector('.theInput');

updateBtn.addEventListener('click', () => {
  if(theInput.value !== '') {
    if(headline.textContent === 'Schedule') {
      headline.textContent = theInput.value.trim();
      updateBtn.textContent = 'Reset the header';
      theInput.value = '';
    }else if(updateBtn.textContent === 'Reset the header') {
      headline.textContent = 'Schedule';
      updateBtn.textContent = 'Update Header Name';
      theInput.value = '';
    }
  }
});

const addTask = document.querySelector('.add-btn');
const theUl = document.querySelector('.tryThis');

addTask.addEventListener('click', () => {
  const createLi = document.createElement('li');
  const createButton = document.createElement('button');

  createLi.textContent = theInput.value.trim();
  createButton.textContent = 'Delete';

  createButton.addEventListener('click', () => {
    createLi.remove();
  });
   
  createLi.addEventListener('click', () => {
    if(!createLi.textContent.includes('✔️')) {
      createLi.textContent = `${createLi.textContent.replace('Delete','')} ✔️`;
      createLi.appendChild(createButton);
    }
  });

  const prioritySelect = document.querySelector('#prioritySelect');
  const priorityValue = prioritySelect.value;

  if(priorityValue === 'medium') {
    createLi.style.backgroundColor = '#f93';
  }else if(priorityValue === 'high') {
    createLi.style.backgroundColor = '#f33';
  }

  if(theInput.value !== '') {
    theUl.appendChild(createLi);
    createLi.appendChild(createButton);
    theInput.value = '';
  }
});

const hideList = document.querySelector('.hide-list');
const ulDiv = document.querySelector('.li-div');

hideList.addEventListener('click', () => {
  if (ulDiv.style.display === 'none') {
    ulDiv.removeAttribute('style');
    hideList.textContent = 'Hide list';
  } else {
    ulDiv.style.display = 'none';
    hideList.textContent = 'Show list';
  }
});







/* 'THIS IS THE FIRST VERSION OF THE CODE ' */


/* const addBtn = document.querySelector('.add-btn'); // the add task button
const updateBtn = document.querySelector('.update-btn'); // the heading update button
const headline = document.getElementById('headline'); // The H1 id
const input = document.querySelector('.theInput'); // the input class
const hide = document.querySelector('.hide-list'); // the hide list button class
const liDiv = document.querySelector('.li-div'); // the div above the UL
const removeBtn = document.querySelector('.remove-btn'); // the task remove button
const liDivUl = document.querySelector('.li-div ul');
const list = liDivUl.children;

// function for adding a remove button to each li
function removeSelectedButton(li) {
  const remove = document.createElement('button');
  remove.textContent = '\xa0\xa0\xa0';
  remove.className = 'remove';
  li.appendChild(remove);
}

// loop to add remove buttons to existing li elements
for (let i = 0; i < list.length; i++) {
  removeSelectedButton(list[i]);
}

// active the remove button and the complete task ✔️ code
liDivUl.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    li.remove();
  } else if (event.target.tagName === 'LI') {
    event.target.textContent = event.target.textContent + '✔️';
    alert('Great job, it\'s time to complete other tasks');
  }
});

// add task button code
addBtn.addEventListener('click', () => {
  const ul = document.getElementsByTagName('ul')[0];
  const li = document.createElement('li');
  if (!input.value) {
    alert('You have to add a task');
  } else {
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';
    removeSelectedButton(li);
  }
});

// update/reset heading button code
updateBtn.addEventListener('click', () => {
  if (!input.value) {
    headline.textContent = 'Schedule';
    updateBtn.textContent = 'Update Heading';
  } else if (headline.textContent === 'Schedule') {
    headline.textContent = input.value;
    input.value = '';
    updateBtn.textContent = 'Reset Heading';
  } else {
    headline.textContent = 'Schedule';
    updateBtn.textContent = 'Update Heading';
    input.value = '';
  }
});

// the show/hide button code
hide.addEventListener('click', () => {
  if (liDiv.style.display === 'none') {
    liDiv.removeAttribute('style');
    hide.textContent = 'Hide list';
  } else {
    liDiv.style.display = 'none';
    hide.textContent = 'Show list';
  }
});
 */