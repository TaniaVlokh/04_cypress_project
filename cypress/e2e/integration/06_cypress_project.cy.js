/// <reference types="cypress" />

import ToDoList from "../../pages/ToDoList"

const toDoList = new ToDoList();
describe('Project 06', () => {


beforeEach(() => {
  cy.visit('https://techglobal-training.com/frontend/project-6')
})

it('Test Case 01 - Todo-App Modal Verification',() => {
  toDoList.getModal().should('have.text', 'My Tasks');
  toDoList.getNewToDoInpuSearchADDButton().each(($el) => {
    cy.wrap($el).should('be.enabled')
  })
  toDoList.getTaskList().should('have.text', 'No tasks found!').
  and('not.have.attr', 'class', '.panel-icon ')
})

it('Test Case 02 - Single Task Addition and Removal',() => {
  const task = "study"
  toDoList.typeInNewToDoInputField(task);
  toDoList.getFirstTaskInList().should('have.text', task)
  toDoList.getTaskListLength().should('have.length', 1)
  toDoList.markTaskAsCompleted()
  toDoList.getMarkCompleted().should('have.attr', 'class', 'panel-icon has-text-success')
  toDoList.clickOnRemoveCompletedTaskButton()
  toDoList.getTaskListLength().should('have.length', 0)
  toDoList.getMessageNoTaskFound().should('have.text', 'No tasks found!')
})

it('Test Case 03 - Multiple Task Operations',() => {
const tasks = ['study', 'practice', 'sleep', 'coding', 'eat']

for(const task of tasks){
  toDoList.getNewToDoInputField().type(task)
  toDoList.getADDButton().click()
  toDoList.getNewToDoInputField().clear()
}

toDoList.getAllTasksList().each(($el, index) => {
  cy.wrap($el).should('have.text', tasks[index])
})

toDoList.getAllCheckMarks().each(($el) => {
cy.wrap($el).click()
})

toDoList.getRemoveCompletedTaskButton().click()

toDoList.getMessageNoTaskFound().should('be.visible')
})

it('Test Case 04 - Search and Filter Functionality in todo App',() => {
  const tasks = ['study', 'practice', 'sleep', 'coding', 'eat']
  
  for(const task of tasks){
    toDoList.getNewToDoInputField().type(task)
    toDoList.getADDButton().click()
    toDoList.getNewToDoInputField().clear()
  }
  
  toDoList.getAllTasksList().each(($el, index) => {
    cy.wrap($el).should('have.text', tasks[index])
  })

  toDoList.getSearchField().type(tasks[4])
  toDoList.getFirstTaskInList().should('have.text', tasks[4])
  toDoList.getTaskListLength().should('have.length', 1)
  })

  it('Test Case 05 - Task Validation and Error Handling',() => {
   const emptyTask = '     '
    toDoList.getNewToDoInputField().type(emptyTask)
    toDoList.getADDButton().click()
    toDoList.getMessageNoTaskFound().should('be.visible')

    const taskLengthMore30 = 'qwertyuioplkjhgfdsazxcvbnmpoiuytrew'
    toDoList.getNewToDoInputField().clear().type(taskLengthMore30)
    toDoList.getADDButton().click()
    toDoList.getMessageLengthMoreThan30().should('have.text', 'Error: Todo cannot be more than 30 characters!')

    const realTask = 'practice'
    toDoList.getNewToDoInputField().clear().type(realTask)
    toDoList.getADDButton().click()
    toDoList.getAllCheckMarks().should('have.length', 1)
    .and('not.have.attr', '.has-text-success')

    toDoList.getNewToDoInputField().clear().type(realTask)
    toDoList.getADDButton().click()
    toDoList.getMessageSameTaskExist().should('include.text', `${realTask}`)


    })







})