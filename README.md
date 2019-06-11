# Jobtraxer application

http://jobtraxer.herokuapp.com/

## Description
Jobtraxer is a full-stack application where user can add and track the progress of their job search.

## Technologies used
1. React - Front end
2. Ruby/Rails - Back end
3. Postgres SQL - Database
4. Heroku - Deployment

## Development Approach
### Components
1. App - App has all the main functions and is responsible for maintaining state.
2. Header - Header is responsible for displaying number of jobs in each category and toggle between the job views
3. Form - Form is responsible for creating a new job in the database based on user input.
4. JobList - JobList is responsible for displaying all the jobs for each selected job category

### User Stories
1. User should be able to add a new job
2. User should be able to view the jobs list
3. User should be able to access the job link
4. User should be able to update the job status from new to applied / follow up or interviewed
5. User should be able to switch between the job list views (New/Applied /Follow Up/ Interviewed)

## Possible Enhancements
1. Adding more details about the job and adding more input fields to the form
2. Display additional information about selected job in a modal
3. Manage some notes for each job
4. Ability for user to create and manage their own accounts
