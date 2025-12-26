# Little Lemon Restaurant Website

A modern, responsive restaurant website for Little Lemon, a family-owned Mediterranean restaurant in Chicago. Built with React and featuring an intuitive table reservation system.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Design System](#design-system)
- [Components](#components)
- [Contributing](#contributing)

## Features

### Main Page
- **Hero Section**: Eye-catching introduction with restaurant branding and quick access to reservations
- **Menu Showcase**: Interactive carousel displaying this week's special dishes
  - Responsive slider (3 items on desktop, 2 on tablet, 1 on mobile)
  - Smooth transitions and hover effects
  - Navigation arrows and dot indicators

### Reservation System
- **Multi-Step Form**:
  - **Step 1**: Reservation Details (Date, Time, Number of Diners)
  - **Step 2**: User Information (First Name, Last Name, Phone Number)
- **Form Validation**:
  - Real-time error messages
  - Date validation (prevents past dates)
  - Phone number format validation
  - Required field validation
- **User Experience**:
  - Visual progress indicator
  - Success toast notification
  - Auto-redirect to home page after confirmation

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 480px (mobile)
- Touch-friendly navigation
- Optimized for all screen sizes

### Accessibility
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Focus indicators

## Tech Stack

- **React** 19.2.3 - UI library
- **React Router DOM** 7.1.3 - Client-side routing
- **CSS3** - Styling with CSS variables and flexbox
- **JavaScript ES6+** - Modern JavaScript features

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher) or **yarn**

To check your versions:

```bash
node --version
npm --version
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd booking-table-little-lemon
```

2. Install dependencies:

```bash
npm install
```

or if you're using yarn:

```bash
yarn install
```

## Running the Application

### Development Mode

Start the development server:

```bash
npm start
```

The application will open automatically in your default browser at [http://localhost:3000](http://localhost:3000).

The page will reload when you make changes, and you'll see any errors in the console.

### Production Build

Build the app for production:

```bash
npm run build
```

This creates an optimized production build in the `build` folder, ready for deployment.

## Project Structure

```
booking-table-little-lemon/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── logo.jpg
│   │       ├── bbq-fish-grilled.jpg
│   │       ├── marina-pasta.jpg
│   │       ├── salad-greek.jpg
│   │       ├── shushi.jpg
│   │       └── tomato-bruschetta.jpg
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── MenuShowcase.js
│   │   ├── MenuShowcase.css
│   │   ├── ReservationForm.js
│   │   ├── ReservationForm.css
│   │   ├── Toast.js
│   │   └── Toast.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Reservations.js
│   │   └── Reservations.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App for full configuration control.

## Testing

### Running Tests

The project includes comprehensive unit tests for the ReservationForm component using React Testing Library and Jest.

#### Run All Tests

```bash
npm test
```

This will launch the test runner in interactive watch mode. Press `a` to run all tests.

#### Run Tests Once (CI Mode)

```bash
npm test -- --watchAll=false
```

#### Run Specific Test File

```bash
npm test ReservationForm.test.js
```

#### Run Tests with Coverage

```bash
npm test -- --coverage --watchAll=false
```

### Test Coverage

The ReservationForm component has comprehensive test coverage including:

#### Initial Render Tests
- Renders step 1 form with all required fields
- Displays progress indicator correctly
- Shows active step highlighting

#### Step 1 Validation Tests
- Date field validation (required, no past dates)
- Time field validation (required)
- Number of diners validation (required, 1-20 range)
- Error messages display correctly
- Errors clear when user corrects input

#### Multi-Step Navigation Tests
- Successfully navigates from Step 1 to Step 2 with valid data
- Back button returns to Step 1
- Form data persists when navigating between steps

#### Step 2 Validation Tests
- First name validation (required, minimum 2 characters)
- Last name validation (required, minimum 2 characters)
- Phone number validation (required, valid format)
- Error messages for all invalid inputs

#### Form Submission Tests
- Toast notification appears on successful submission
- Form redirects to home page after confirmation

#### Accessibility Tests
- All inputs have proper labels
- Error messages are associated with inputs via aria-describedby
- Required fields marked with aria-required
- Invalid fields marked with aria-invalid

### Writing New Tests

When adding new features, follow these testing best practices:

1. **Test user interactions**: Focus on how users interact with components
2. **Test accessibility**: Ensure proper ARIA attributes and keyboard navigation
3. **Test error states**: Verify error handling and validation
4. **Avoid implementation details**: Test behavior, not internal state
5. **Use semantic queries**: Prefer `getByRole`, `getByLabelText` over `getByTestId`

Example test structure:

```javascript
describe('Component Name', () => {
  describe('Feature Group', () => {
    test('should do something specific', () => {
      // Arrange: Set up test data and render component
      // Act: Perform user interactions
      // Assert: Verify expected outcomes
    });
  });
});
```

## Design System

### Color Palette

```css
--primary-color: #495E57    /* Dark green for text and primary elements */
--secondary-color: #F4CE14  /* Yellow for accents and CTAs */
--text-dark: #333333        /* Dark gray for body text */
--text-light: #FFFFFF       /* White for text on dark backgrounds */
--background-light: #FFFFFF /* White backgrounds */
--background-dark: #495E57  /* Dark green backgrounds */
```

### Typography

- **Primary Font**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', etc.)
- **Hero Title**: 3.5rem (desktop), 2rem (mobile)
- **Section Titles**: 2.5rem (desktop), 1.75rem (mobile)
- **Body Text**: 1.125rem

### Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: ≤ 768px
- **Mobile**: ≤ 480px

## Components

### Header Component
Sticky navigation header with logo and menu links. Responsive design that collapses into a mobile-friendly layout.

### Hero Component
Main banner section featuring the restaurant name, location, description, and CTA button for reservations.

### MenuShowcase Component
Interactive carousel displaying featured menu items with images, names, and prices. Automatically adjusts items per view based on screen size.

### ReservationForm Component
Multi-step form with validation:
- Step 1: Date, time, and party size selection
- Step 2: Customer contact information
- Real-time validation with error messages
- Success notification and auto-redirect

### Toast Component
Reusable notification component for user feedback with auto-dismiss functionality.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project was created for educational purposes.

## Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Design inspired by modern restaurant websites
- Images courtesy of Little Lemon Restaurant
