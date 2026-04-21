# Finals_Assignment - Main Repository

## Setup and Execution Instructions

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

### Running the Application
```bash
# Clone the repository
git clone https://github.com/RydnerObeal/Finals_Assingment.git
cd Finals_Assignment

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production
```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

## Architectural Patterns Used

### 1. **Component-Based Architecture**
- Break down UI into reusable components
- Each component has a single responsibility
- Makes the code easier to maintain and test

### 2. **Context API Pattern**
- Global state management without prop drilling
- Shared data across components easily
- Clean and efficient state handling

### 3. **Custom Hooks Pattern**
- Encapsulates reusable logic
- Keeps components clean and focused
- Promotes code reuse across the application

### 4. **Routing Architecture**
- Declarative routing with React Router
- Clean URL structure and navigation
- Easy to add new pages and routes

### 5. **Theme System Architecture**
- CSS custom properties for easy theming
- Dynamic theme switching
- Consistent design across the app

## Evidence of Fixing Technical Debt Items

### 1. **State Management**
- **Before**: Props drilling and scattered state everywhere
- **After**: Centralized state with Context API
- **Impact**: Cleaner component hierarchy and better data flow

### 2. **CSS Organization**
- **Before**: Inline styles and CSS scattered in components
- **After**: Organized CSS files with theme variables
- **Impact**: Maintainable styling system with consistent themes

### 3. **Component Structure**
- **Before**: Large components doing too many things
- **After**: Small, focused components with single responsibilities
- **Impact**: Better reusability and easier testing

### 4. **Error Handling**
- **Before**: No error handling, app would crash
- **After**: Error boundaries with user-friendly error messages
- **Impact**: Better user experience and easier debugging

### 5. **Performance Optimization**
- **Before**: Unnecessary re-renders making the app slow
- **After**: React.memo and useMemo to optimize rendering
- **Impact**: Faster application performance

### 6. **TypeScript Integration**
- **Before**: Plain JavaScript with runtime errors
- **After**: Full TypeScript with type safety
- **Impact**: Fewer bugs and better developer experience

## Technologies Used
- **React 18** - UI library with TypeScript
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **CSS Custom Properties** - Theme system
- **TypeScript** - Type safety
- **ESLint** - Code quality

## Assignment Implementations

### A1: Basic Structure
- ✅ Core React application setup
- ✅ TypeScript configuration
- ✅ Basic routing structure

### A2: Dynamic Multi-Theme Context
- ✅ Three distinct themes (Midnight, Emerald, Solarized)
- ✅ Global theme management with Context API
- ✅ Theme persistence and switching
- ✅ CSS custom properties integration

### A3: Advanced Form Orchestration
- ✅ Contact form with validation
- ✅ Custom modal system (no alerts)
- ✅ Theme-aware form styling
- ✅ Responsive form design

## Related Repositories
- **Backend API**: https://github.com/RydnerObeal/Finals_Q1
- **Frontend App**: https://github.com/RydnerObeal/Finals_Q2
