import * as todoPage from '../page-objects/todo-page'

describe('Visual validation', () => {
    before(() =>  todoPage.navigate())
    beforeEach(() =>
        cy.eyesOpen({
            appName: 'TAU TodoMVC',
            batchName: 'TAU TodoMVC',
            browser: [
                {name: 'chrome', width: 1024, height: 768},
                {name: 'chrome', width: 800, height: 600},
                {name: 'firefox', width: 1024, height: 768},
                {deviceName: 'iPhone X'},
            ]
        })
  )

    afterEach(() => cy.eyesClose())

    it('Should look good', () => {
        cy.eyesCheckWindow('empty todo list')

        todoPage.addTodo('Clear room')
        todoPage.addTodo('Learn Cypress')
        todoPage.addTodo('Learn JavaScript')

        cy.eyesCheckWindow('Tree todos')

        todoPage.toggleTodo(0)

        cy.eyesCheckWindow('mark as completed')
    })
})