# Using TinyMCE Rich Text Editor in Bryntum Gantt

This project demonstrates how to integrate TinyMCE rich text editor with Bryntum Gantt for enhanced task description editing.

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Install Bryntum Gantt**

   For trial version:

   ```bash
   npm install @bryntum/gantt@npm:@bryntum/gantt-trial@6.3.0-alpha-1
   ```

   For licensed version:

   ```bash
   npm install @bryntum/gantt@6.3.0-alpha-1
   ```

3. **Configure TinyMCE API Key**

   Replace `your-api-key` in the following files with your TinyMCE API key:
   - `src/index.html` (line 11)
   - `lib/TinyMceField.js` (line 9)

4. **Run Development Server**

   ```bash
   npm run dev
   ```

5. **Open Browser**
   Navigate to `http://localhost:5173`

## Project Structure

```txt
├── src/
|–– lib/
|     └── TinyMceField.js     # Custom TinyMCE widget
│   ├── index.html          # Main HTML file
│   ├── main.js            # Gantt application setup
│   └── styles.css         # Styles and TinyMCE integration
├── package.json
├── vite.config.js
└── README.md
```
