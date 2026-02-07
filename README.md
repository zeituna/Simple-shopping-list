# ShopSmart - Shopping List Management System

A modern, responsive shopping list management system with full CRUD functionality built with HTML, Bootstrap 5, and JavaScript.

## Features

- **Responsive Design**: Mobile-friendly interface with sticky navigation
- **CRUD Operations**: Create, Read, Update, and Delete shopping items
- **Category Management**: Organize items by categories (Groceries, Electronics, Clothing, etc.)
- **Status Tracking**: Track items as "Needed" or "Purchased"
- **Real-time Updates**: Instant updates to the UI after any operation
- **Clean UI**: Modern design with smooth animations and hover effects

## Color Scheme

- Primary Background: `#fff0f3`
- Accent/Hover: `#fffcf2`
- Text: Dark/Black
- Card Backgrounds: White

## File Structure

```
shopping-list-system/
├── index.html          # Main HTML file with all sections
├── app.js             # JavaScript CRUD operations
├── db.json            # JSON Server database
└── README.md          # This file
```

## Installation & Setup

### Prerequisites

- Node.js installed on your system
- npm (comes with Node.js)

### Step 1: Install JSON Server

Open your terminal and run:

```bash
npm install -g json-server
```

### Step 2: Navigate to Project Directory

```bash
cd shopping-list-system
```

### Step 3: Start JSON Server

Run the following command to start the JSON Server:

```bash
json-server --watch db.json --port 3000
```

You should see output similar to:

```
Resources
http://localhost:3000/items

Home
http://localhost:3000
```

### Step 4: Open the Application

Open `index.html` in your web browser. You can:

- Double-click the `index.html` file
- Use Live Server extension in VS Code
- Use any local development server

## Usage

### Adding Items

1. Scroll to the Dashboard section
2. Fill in the form:
   - Item Name
   - Category
   - Quantity
   - Status (Needed/Purchased)
3. Click "Add Item"

### Editing Items

1. Click the "Edit" button on any item in the table
2. The form will populate with the item's data
3. Modify the fields as needed
4. Click "Update Item"

### Deleting Items

1. Click the "Delete" button on any item
2. Confirm the deletion in the dialog
3. Item will be removed from the list

### Viewing Items

- **Recent Items Section**: Displays the first 6 items as cards
- **Dashboard Table**: Shows all items with full details

## API Endpoints

The application uses the following endpoints:

- `GET http://localhost:3000/items` - Fetch all items
- `POST http://localhost:3000/items` - Create new item
- `PUT http://localhost:3000/items/:id` - Update item
- `DELETE http://localhost:3000/items/:id` - Delete item

## Technologies Used

- **HTML5**: Semantic markup
- **Bootstrap 5.3.0**: Responsive design and components
- **Bootstrap Icons**: Icon library
- **Vanilla JavaScript**: CRUD operations and DOM manipulation
- **JSON Server**: Mock REST API
- **Fetch API**: HTTP requests

## Features Overview

### Navbar
- Sticky positioning
- Responsive hamburger menu
- Smooth scroll navigation
- Custom hover effects

### Hero Section
- Full-width centered content
- Call-to-action button
- Gradient overlay support

### Features Section
- 4 feature cards with icons
- Hover animations
- Responsive grid layout

### Recent Items Display
- Card-based layout
- Status badges (color-coded)
- Category and quantity display

### Dashboard
- Add/Edit form with validation
- Complete items table
- Edit and delete actions
- Confirmation dialogs

### Footer
- 3-column layout
- Quick links
- Contact information
- Copyright notice

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### JSON Server not starting
- Make sure Node.js is installed: `node --version`
- Reinstall JSON Server: `npm install -g json-server`

### Items not loading
- Verify JSON Server is running on port 3000
- Check browser console for errors
- Ensure db.json is in the correct directory

### CORS errors
- JSON Server handles CORS automatically
- Make sure you're not using file:// protocol (use a local server)

## Future Enhancements

- User authentication
- Multiple shopping lists
- Search and filter functionality
- Export lists to PDF
- Shopping list sharing
- Mobile app version

## License

This project is open source and available for educational purposes.

## Author

Created with Bootstrap 5 and modern web technologies.