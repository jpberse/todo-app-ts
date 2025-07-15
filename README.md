# Todo App with React, TypeScript, and Vite

This project is a minimal and modern Todo application built using React, TypeScript, and Vite. It was initially inspired by a Midudev React tutorial, but has been customized with unique styles and enhanced with Zustand for state management and persistence using `localStorage`. The setup leverages Vite's Hot Module Replacement (HMR) for a fast development experience and includes ESLint and Oxlint for linting.

## Features

- Add, complete, and remove todos.
- Filter todos by "All", "Active", or "Completed".
- Persistent storage of todos using `localStorage`.
- Responsive design with custom Tailwind CSS-inspired styling.
- Type-safe code with TypeScript.
- Fast development with Vite and React SWC plugin.

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todo-app-ts
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### Build for Production

To build the app for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist` directory.

### Preview the Build

To preview the production build locally:
```bash
npm run preview
```

### Linting

Run the linter to check for code quality:
```bash
npm run lint
```

## Project Structure

- `src/`: Contains the source code.
  - `App.tsx`: Main app component.
  - `components/`: React components (e.g., `Header`, `Todos`, `Footer`).
  - `stores/`: Zustand store for state management (`todoStore.ts`).
  - `types.d.ts`: TypeScript type definitions.
  - `consts.ts`: Constants for filters.
  - `mockTodos.ts`: Mock data for testing.
- `style.css`: Global CSS with animations and responsive design.
- `index.html`: Entry point HTML file.
- `vite.config.ts`: Vite configuration with React SWC and Oxlint plugins.

## Technologies Used

- **React 19**: For building the user interface.
- **TypeScript**: For static typing and better developer experience.
- **Vite**: Fast build tool and development server with HMR.
- **Zustand**: Lightweight state management with persistence.
- **Oxlint**: Fast linter for code quality (configured via `.oxlintrc.json`).
- **ESLint**: Type-aware linting with custom configurations (via `eslint.config.js`).
- **CSS**: Custom styles with gradient animations and media queries.

## Configuration

- **Vite Config**: Uses `@vitejs/plugin-react-swc` for Fast Refresh and `vite-plugin-oxlint` for linting integration.
- **ESLint**: Configured with TypeScript support and React-specific rules.
- **TypeScript**: Split into `tsconfig.app.json` and `tsconfig.node.json` for app and node-specific settings.

## Contributing

Feel free to submit issues or pull requests. To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the Vite + React + TypeScript template and Midudev’s React tutorials.
- Thanks to the open-source community for tools like Zustand, Oxlint, and ESLint.