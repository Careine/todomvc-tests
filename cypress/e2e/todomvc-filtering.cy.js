/// <reference types="cypress" />
import {
    navigate,
    addTodo,
    toggleTodo,
    showOnlyActiveTodos,
    showOnlyCompletedTodos,
    showAllTodos,
    validateNumberOfTodosShown,
  } from '../page-objects/todo-page'
  
  describe('filtering', function() {
    beforeEach(() => {
      navigate()
  
      addTodo('Clean room')
      addTodo('Learn JavaScript')
      addTodo('Use Cypress')
  
      toggleTodo(1)
    })
  
    it('should filter "Active" correctly', () => {
      showOnlyActiveTodos()
  
      validateNumberOfTodosShown(2)
    })
  
    it('should filter "Completed" correctly', () => {
      showOnlyCompletedTodos()
  
      validateNumberOfTodosShown(1)
    })
  
    it('should filter "All" correctly', () => {
      showAllTodos()
  
      validateNumberOfTodosShown(3)
    })
  })







/*describe('Filtering', () => {
    beforeEach('TodoMVC app', () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')

        cy.get('.new-todo').type('Learn Cypress{enter}')
        cy.get('.new-todo').type('Learn Javascript{enter}')
        cy.get('.new-todo').type('Learn Cucumber{enter}')

        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

    it('Should filter "Active" todos', () =>{
        cy.contains('Active').click()

        cy.get('.todo-list li').should('have.length',2)
    })

})*/