
# CRUD Operations Frontend

This is the frontend application for performing CRUD operations on a list of fruits, built using React. The app connects to a backend API to create, read, update, and delete fruit data. Additionally, it includes a filter feature to view fruits based on their price.

## Features

- **View all fruits**: Displays a list of all fruits with their names and prices.
- **Create fruit**: Add a new fruit with a name and price.
- **Update fruit**: Edit the name and price of an existing fruit.
- **Delete fruit**: Remove a fruit from the list.
- **Filter by price**: Filter the list of fruits by selecting a condition (`greater than`, `less than`, `equal to`) and specifying a price value.

## Setup

### Prerequisites

- Node.js (>= 12.x)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   The application should now be running on [http://localhost:4000](http://localhost:4000).

### Configuration

The API base URL is hardcoded in the `CrudOperations.js` file. If your backend API runs on a different URL or port, update the `API_BASE_URL` variable accordingly.

### Usage

1. **Viewing Fruits**: All available fruits are displayed on the homepage.
2. **Adding a Fruit**:
   - Enter the fruit name and price in the form at the bottom of the page.
   - Click the "Create" button to add the fruit.

3. **Updating a Fruit**:
   - Click the "Update" button next to a fruit to populate the form with its details.
   - Edit the details and click "Update" to save changes.

4. **Deleting a Fruit**: Click the "Delete" button next to a fruit to remove it.

5. **Filtering by Price**:
   - Enter a price value in the filter input box.
   - Select a condition (`greater than`, `less than`, `equal to`) from the dropdown menu.
   - Click the "Filter" button to apply the filter.

## Project Structure

```
/src
  ├── /components
  ├── /assets
  ├── App.js
  ├── CrudOperations.js
  ├── index.js
  └── ...
/public
  ├── index.html
  └── ...
README.md
```

- **/src**: Contains the source code for the application.
- **/components**: Reusable components.
- **/assets**: Static assets like images, styles, etc.
- **App.js**: Main application component.
- **CrudOperations.js**: Component handling CRUD operations and filtering.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

## Acknowledgments

- Thanks to the developers of React and other libraries used in this project.
