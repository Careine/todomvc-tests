/// <reference types="cypress" />
import {
    navigate,
    addTodo,
    validateTodoText,
    toggleTodo,
    clearCompleted,
    validateTodoCompletedState,
    validateToggleState,
    validateNumberOfTodosShown,
  } from '../page-objects/todo-page'
  
  describe('todo actions', () => {
    beforeEach(() => {/// <reference types="cypress" />

        import {TodoPage, TodoPage} from "../page-objects/todo-page";
        
        describe('TodoMVC actions', () => {
        
            const todoPage = new TodoPage()
        
            beforeEach('Navigate to the TodoMVC App', () => {
              todoPage.navigate()
            })
          
            it('Should be able to add a new todo to the list', () => {
              todoPage.addTodo('Cypress tutorial')
              cy.get('.toggle').click()
              cy.contains('Clear completed').click()
            })
          
            it('Suite for should be able to add a new todo to the list ', () => {
              cy.get('.new-todo').type('Learn Cypress{enter}')
              todoPage.validationTodoTxt(0, 'Learn Cypress')
              cy.get('.toggle').should('not.be.checked')
              cy.get('.toggle').click()
              cy.contains('Clear').click()
              cy.get('.todo-list').should('not.have.descendants', 'li')
          
            })
          })
      navigate()
  
      addTodo('Clean room')
    })
  
    it('should add a new todo to the list', () => {
      validateTodoText(0, 'Clean room')
  
      validateToggleState(0, false)
    })
  
    describe('toggling todos', () => {
      it('should toggle test correctly', () => {
        toggleTodo(0)
        validateTodoCompletedState(0, true)
      })
  
      it('should clear completed', () => {
        toggleTodo(0)
  
        clearCompleted()
  
        validateNumberOfTodosShown(0)
      })
    })
  })