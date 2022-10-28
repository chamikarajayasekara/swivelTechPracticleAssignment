
## Getting Started

Hello Team, Here I developed the client side of the Swivel Tech practical assignment.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

#### Hope you cloned the repository at the moment, **If not** kindly follow the following directory

`swivelTechPracticleAssignment/README.md`

### Installation
1. Open the terminal or cmd using the following path
    `swivelTechPracticleAssignment/practicle-assignment`

2. Install NPM packages

```sh
npm install
```

3. Run in local environment

(Before run the client side please make sure to run the backend server)
```sh
npm run dev
```

Once you run the code the server started in the following url. You can visit to the project.

[http://localhost:3000/](http://localhost:3000/)

You can see following in the terminal or cmd
* ready - started server on 0.0.0.0:3000, url: http://localhost:3000


4. Run in build mode

```sh
npm run build
```
Related routes and pages and what features does by the page.
By clicking 'List Employee' button in the initial load page, can navigated to the employee list page
*     __app.tsx   - initial rendering page http://localhost:3000/
*     pages/employee/list  - employee list feature http://localhost:3000/employee/list
*     pages/employee/add  - employee add feature http://http://localhost:3000/employee/add
*     pages/employee/edit  - employee edit feature http://http://localhost:3000/employee/edit/:_id

### Structure of the Frontend
    apis  - endpoint call handler functions consist in this folder
    components –  atoms, molecules, organism, templates exists
       * atoms – buttons, text fields, input controller & toaster
       * molecules – Forms, Grid View, Table View, Employee Card
       * organisms - Sections, Navigation
       * templates – Employee List, Employee Add, Employee Edit
    context - context API for alert hold in this folder
    data     - JSON data sets consist in this folder
    helpers – helper functions consist in this folder
    pages   - main index , app file and all the route base pages consist
    store- holds Redux main store slices and reducers
    types – interfaces hold in this folder