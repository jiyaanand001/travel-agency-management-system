# Travel Agency Management System

A full-stack Travel Agency Management System built with React, Vite, Tailwind CSS, Node.js, Express, and MySQL. The application includes a public travel website, package browsing, contact inquiries, authentication APIs, booking APIs, admin-related routes, and database scripts.

## Current Run Status

The frontend has been checked and can run successfully.

Working frontend preview URL:

```text
http://127.0.0.1:4173/
```

The backend dependencies install successfully, but the backend needs a configured MySQL database before it can stay running. If MySQL credentials are missing or incorrect, the backend exits with a database connection error.

## Technology Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- Chart.js

### Backend

- Node.js
- Express.js
- MySQL
- JWT authentication
- Bcrypt password hashing
- Multer file uploads
- Nodemailer email support

## Project Structure

```text
travel-agency-management-system-main/
  backend/
    server.js
    package.json
    .env.example
    src/
      app.js
      config/
      controllers/
      middleware/
      models/
      routes/
      utils/

  frontend/
    index.html
    package.json
    vite.config.js
    postcss.config.js
    tailwind.config.js
    src/
      App.jsx
      main.jsx
      index.css
      components/
      context/
      hooks/
      pages/
      services/
      utils/

  database/
    schema.sql
    sample_data.sql
    ER_DIAGRAM.md

  documentation/
    API_DOCUMENTATION.md
    FRONTEND_SETUP.md

  README.md
```

## Prerequisites

- Node.js 18 or higher
- npm
- MySQL 5.7 or higher

This project was tested with:

```text
Node.js v22.14.0
npm 10.9.2
```

## Frontend Setup

From the project root:

```bash
cd frontend
npm install
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

Open:

```text
http://127.0.0.1:4173/
```

For development mode, use:

```bash
npm run dev -- --host 127.0.0.1
```

Default Vite dev URL:

```text
http://127.0.0.1:5173/
```

If the root path does not load correctly in dev mode, use the preview command above after running `npm run build`.

## Backend Setup

From the project root:

```bash
cd backend
npm install
```

Create a `.env` file from `.env.example`:

```bash
copy .env.example .env
```

Update these values in `backend/.env` according to your local MySQL setup:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=travel_agency
DB_PORT=3306
PORT=5000
JWT_SECRET=change_this_secret
FRONTEND_URL=http://localhost:5173
```

## Database Setup

Open MySQL and run:

```sql
CREATE DATABASE travel_agency;
USE travel_agency;
```

Then import the SQL files:

```bash
mysql -u root -p travel_agency < ../database/schema.sql
mysql -u root -p travel_agency < ../database/sample_data.sql
```

If you are already inside the MySQL shell, you can use:

```sql
SOURCE database/schema.sql;
SOURCE database/sample_data.sql;
```

Run the backend:

```bash
cd backend
npm start
```

Backend API URL:

```text
http://localhost:5000/api
```

Health check:

```text
http://localhost:5000/api/health
```

## Important Notes

- The backend will not run unless MySQL is installed, the `travel_agency` database exists, and `backend/.env` has valid database credentials.
- The frontend can run without the backend, but pages that fetch packages, submit inquiries, or call APIs may show empty data or errors until the backend is running.
- The backend package uses `jsonwebtoken@^9.0.2`.
- The frontend uses ES modules, so `postcss.config.js` and `tailwind.config.js` use `export default`.

## Main Features

### Customer Features

- Browse travel packages
- Search packages
- Submit contact inquiries
- Register and login through API
- Book packages through API
- Submit reviews through API

### Admin Features

- Manage users
- Manage packages
- Manage destinations
- Manage bookings
- Manage inquiries
- View dashboard data

## Useful Commands

Frontend:

```bash
cd frontend
npm install
npm run build
npm run dev
npm run preview
```

Backend:

```bash
cd backend
npm install
npm start
npm run dev
```

## Troubleshooting

### Backend: access denied for MySQL user

Error:

```text
Database connection failed: Access denied for user 'root'@'localhost'
```

Fix:

- Check that MySQL is running.
- Create `backend/.env`.
- Set the correct `DB_USER` and `DB_PASSWORD`.
- Make sure the `travel_agency` database exists.

### Backend: mysql command not found

Fix:

- Install MySQL Server.
- Add MySQL `bin` folder to your PATH.
- Or import the SQL files using MySQL Workbench/phpMyAdmin.

### Frontend: PostCSS config error

If you see:

```text
module is not defined in ES module scope
```

Make sure `postcss.config.js` and `tailwind.config.js` use:

```js
export default {
  // config
};
```

## Documentation

- API documentation: `documentation/API_DOCUMENTATION.md`
- Frontend setup: `documentation/FRONTEND_SETUP.md`
- Database schema: `database/schema.sql`
- Sample data: `database/sample_data.sql`
- ER diagram: `database/ER_DIAGRAM.md`

## Version

- Version: 1.0.0
- Last updated: June 2026
