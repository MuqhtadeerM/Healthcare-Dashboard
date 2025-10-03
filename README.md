# Healthcare Dashboard

A React-based healthcare dashboard that displays patient diagnosis history, blood pressure charts, and vital signs monitoring.

## Features

- Blood pressure visualization with systolic and diastolic readings
- Interactive line charts showing 6-month trends
- Vital signs cards displaying:
  - Respiratory Rate
  - Temperature
  - Heart Rate
- Responsive design with clean UI

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository or download the project files:

```bash
git clone "repo name not yed added"
cd healthcare-dashboard
```

2. Install dependencies:

```bash
npm install
```

## Required Dependencies

This project uses the following main dependencies:

- React
- Recharts (for data visualization)
- Manrope font (included via CDN or local)

Make sure these are listed in your `package.json`:

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "recharts": "^2.5.0"
  }
}
```

## Running the Project

To start the development server:

```bash
npm run dev
```

The application will open in your default browser at `http://localhost:5173` (Vite) (Create React App).

## Project Structure

```
healthcare-dashboard/
├── src/
│   ├── components/
│   │   └── Container.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── Images/
│       ├── lungs.svg
│       ├── temperature.svg
│       └── heart.svg
├── package.json
└── README.md
```

## Assets

Make sure to place the following SVG icons in the `public/Images/` directory:

- `lungs.svg` - Respiratory rate icon
- `temperature.svg` - Temperature icon
- `heart.svg` - Heart rate icon

## Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist/` folder.

## Troubleshooting

### Port already in use

If you get a port conflict error, you can:

- Stop the process using that port
- Or modify the port in your `vite.config.js` or `package.json`

### Missing dependencies

If you encounter missing dependency errors, run:

```bash
npm install
```

### Chart not displaying

Ensure that:

- Recharts is properly installed
- Your data structure matches the expected format
- The component is properly imported

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
