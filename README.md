# React Pendings App

React Challenge to create a application to manage pendings.

:rocket: **Github Page:** https://sharatgm.github.io/react-pendings-app/

<!--Requirements:

1. Grid layout with a starting cell to add new pendings. The cell must have a cross mark in it.
2. When clicking on the cross mark element user should be prompted with a form to fill the following fields: description, status (active, done, deleted), priorities (high, medium, low)
**Note:** Not adding 'deleted' as a status in the form as it doesn't make sense to create a new pending with deleted status, but it is handled in the app
3. Ability to delete and mark as done the pendings
4. The Dashboard should not display 'Done' and 'Deleted' pendings
5. The Dashboard should include a counter for 'Active' and 'Done' pendings
6. Only Front-End technologies
7. Usage of ReactJS Framework
8. Usage of color  #43ED3F.

Extras:

1. Add a Due Date field for pendings
2. Sort by Due Date and fill the color of the pending with #FFD6D6 if it should be completed within thee current and next day. Otherwise use #FFFFFF
3. Add validations
4. The application should not allow duplicated descriptions
5. Publish content in GH Pages -->

## Key features of the application

- Create new pendings
- Mark pendings as 'Done'
- Delete pendings
- Visualize 'Active' pendings
- Visualize counter for 'Active' and 'Done' pendings
- Pendings sorted by Due Date
- Pendings colored depending on its urgency (Urgent: it should be completeed within the next 48 hrs)
- Form validation

## Components Structure

The application is built with these components:

- **App**: Root application where it's built the top level structure of the application: Header, Dashboard and Provider
- **Dashboard**: Grid that renders the pendings and displays a form to add new pendings
- **Pending**: Individual pending component, which renders the pending data and allows the following actions: Delete pending, mark pending as done.
- **NewPendingForm**: Form rendered by the dashboard to add new pendings. This component includes a form with the fields: Description, status, priority and dueDate; includes form validation and allows the creation of new pending

And the following `React Context` provider:

- PendingsProvider

## Technologies used

:atom: ReactJS Framework. Specifically the following tools, features or libraries:

### State Management

Used `React Context` for state management of the application. As pendings need to be available in almost every components and they can be updated from different components as well, React Contexts allows us to define those values and functions and make them available to all the application.

This way I can update a pending from the Dashboard, NewPendingForm and Pending.

In addition to React context, I'm managing the internal state of the component with `useState`, supporting it with `useEffect` hook to execute state updates at specific moments of the component's rendering.

### Styled Components

Library that allows the usage of _CSS-in-JS_, a technique of component styling that solves the majority of the problems faced when working with pure CSS, for example:

- Style collision
- Unused code
- Difficult to maintain

Styled Components also allows us to have more organized css definitions, dynamic styling, each component having it's style definition which makes it more easy to maintain and to delete unused code, creates unique classes for each component which prevents style collision, and allows us to reuse the styled components we define.

## Improvements

These are some of the improvements that I detect in the application or would like to add:

1. Drag and Drop functionality: implement a DnD functionality using React Context to manage the order of the pendings array, keep track of a dragged item position and the reorganization of the array when dropped.
2. Eition of the description of a pending
3. Different sort values: priority, dueDate, creationDate, deleted, etc.
4. Confirmation before deleting a pending
