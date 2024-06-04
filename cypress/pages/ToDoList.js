

class ToDoList{

  /* Locators */

  getModal(){
    return cy.get('.panel-heading')
  }

  getNewToDoInputField(){
    return cy.get('#input-add');
  }

  getSearchField(){
    return cy.get('#search');
  }

  getADDButton(){
    return cy.get('#add-btn');
  }

  getNewToDoInpuSearchADDButton(){
    return cy.get('#input-add,#search,#add-btn')
  }
 
  getTaskList(){
    return cy.get('.panel-block > p').eq(1)
  }

  getFirstTaskInList(){
    return cy.get('.mr-auto > span').eq(1)
  }

  getTaskListLength(){
    return cy.get('#panel > .panel-block')
  }

   getMarkCompleted(){
    return cy.get('.has-text-success')
  }

  getRemoveCompletedTaskButton(){
    return cy.get('#clear')
  }

  getMessageNoTaskFound(){
    return cy.get('.todo-item > p')
  }

  getAllTasksList() {
    return cy.get('.mr-auto > .panel-icon').next()
  }

  getAllCheckMarks(){
    return cy.get('.mr-auto > .panel-icon')
  }  

  getMessageLengthMoreThan30() {
    return cy.get('.notification')
  }

  getMessageSameTaskExist() {
    return cy.get('.notification > button').next()
  }
  

    /* Methods */

    typeInNewToDoInputField(task){
      this.getNewToDoInputField().type(task);
      this.getADDButton().click()
    }

    markTaskAsCompleted(){
      return this.getFirstTaskInList().click()
    }

    clickOnRemoveCompletedTaskButton(){
      this.getRemoveCompletedTaskButton().click()
    }


    

}
export default ToDoList