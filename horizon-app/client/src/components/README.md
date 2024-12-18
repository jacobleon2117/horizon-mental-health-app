# Authentication Forms

This directory contains the authentication-related form components for the Horizon Mental Health application. These components handle user authentication flows including login, signup, and redirect functionality.

## Directory Structure

```
auth-forms/
├── login-form/
│   └── LoginForm.jsx
├── signup-form/
│   └── SignupForm.jsx
├── redirect-login-form/
│   └── RedirectLoginForm.jsx
└── README.md
```

## Components

### LoginForm

A modal form component that handles user login functionality.

#### Props

- `onClose` - Function to close the modal

#### Features

- Email and password fields
- Remember me checkbox
- Forgot password link
- Form validation
- Error handling
- Consistent styling with amber theme

#### Usage

```jsx
import LoginForm from "../auth-forms/login-form/LoginForm";

// Inside your component
<LoginForm onClose={() => setIsOpen(false)} />;
```

### SignupForm

A modal form component for new user registration.

#### Props

- `onClose` - Function to close the modal

#### Features

- Full name input
- Email input
- Password and confirm password fields
- Form validation
- Error handling
- Password matching validation
- Consistent styling with amber theme

#### Usage

```jsx
import SignupForm from "../auth-forms/signup-form/SignupForm";

// Inside your component
<SignupForm onClose={() => setIsOpen(false)} />;
```

### RedirectLoginForm

A component that handles authentication redirects and protected routes.

#### Features

- Checks authentication status
- Redirects to login if unauthenticated
- Preserves original destination
- Loading state indicator

#### Usage

```jsx
import RedirectLoginForm from "../auth-forms/redirect-login-form/RedirectLoginForm";

// Inside your protected route
<RedirectLoginForm />;
```

## Styling

All forms use Tailwind CSS for styling with the following consistent theme:

- Primary color: Amber (`amber-600`)
- Hover states: Lighter amber (`amber-500`)
- Focus states: Ring styling with amber
- Rounded corners on inputs and buttons
- Consistent padding and spacing
- Responsive design for all screen sizes

## Form Validation

Each form implements the following validation:

### Login Form

- Required email and password fields
- Email format validation
- Minimum password length check

### Signup Form

- Required fields for all inputs
- Email format validation
- Password strength requirements
- Password matching validation
- Full name format validation

## Error Handling

Forms include error handling for:

- Invalid credentials
- Network errors
- Validation errors
- Server-side errors

Error messages are displayed below the relevant input fields.

## Modal Integration

All forms are designed to work with the Modal component from the common directory. They:

- Handle their own state
- Provide close functionality
- Manage form submission
- Handle backdrop clicks
- Include loading states during submission

## Future Improvements

Planned enhancements:

- Add social authentication options
- Implement password strength indicator
- Add email verification flow
- Enhance error messages and validation
- Add rate limiting for failed attempts
- Implement progressive enhancement

## Contributing

When modifying these components:

1. Maintain consistent styling with the project theme
2. Follow existing validation patterns
3. Test all error states
4. Update documentation for any new props or features
5. Ensure accessibility standards are met
6. Test responsive behavior

## Related Components

These forms are typically used with:

- `Modal` component from common directory
- `TopNavbar` component for triggering modals
- Protected route components
- Authentication context/providers
