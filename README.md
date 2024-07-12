## Softhesis Labs Task

**Username**: user  
**Password**: password

## Task Overview

This project involves creating a Next.js application that meets the following requirements:

1. **Login Functionality**:

   - Implement a user login system using static checks instead of an API.
   - Users should be able to log in using their email and password.

2. **Profile Update**:

   - After logging in, users should be able to update their profile information, including their name, email, and password.

3. **Dashboard Page**:

   - Create a dashboard page that displays user-specific information after login.

4. **Component Architecture**:
   - Use the atomic design methodology to structure your components:
     - **Atoms**: Basic building blocks (e.g., buttons, input fields).
     - **Molecules**: Groups of atoms working together (e.g., form inputs with labels).
     - **Organisms**: Complex components made up of groups of molecules (e.g., a login form, profile update form).

## Deliverables

1. **Next.js Application**:

   - The complete Next.js app fulfills the above requirements.
   - Code is well-organized and follows best practices.

2. **Component Structure**:
   - Demonstrates the use of atoms, molecules, and organisms in the component architecture.
   - Includes a brief explanation of the component structure and reasoning.

## Implementation Details

### 1. Login Functionality

#### Components:

- **Atoms**: `InputField`, `Button`
- **Molecules**: `LoginForm`

#### Description:

- The login form consists of email and password fields (atoms) and a submit button (atom), grouped together as a molecule.
- A static check is used to validate user credentials.

### 2. Profile Update

#### Components:

- **Atoms**: `InputField`, `Button`, `CustomButton`, `Flex`, `Text`, `Typograpgy`,
- **Molecules**: `ProfileUpdateForm`, `Login`,`ProfileInfo`, `Card`,`user`, `TableHead`,`ProfilePhoto`,

#### Description:

- After logging in, the user can update their profile information.
- The profile update form consists of fields for name, email, and password, grouped together as a molecule.

### 3. Dashboard Page

#### Components:

- **Organisms**: `Dashboard`

#### Description:

- The dashboard page displays user-specific information after login.
- It includes components like a welcome message and user details.
- The explanation though I haven't finished working on the dashboard but just did the dashboard page and the profile page to make it a bit clean.

## Technology

- **Next.js**
- **Typescript**
- **Tailwind CSS**

**Packages**: Redux-persist, Redux-toolkit, react-icon

**Architecture**: Atom Design Pattern

**Design**: [Figma Design](<https://www.figma.com/design/7gnNAitKafuE7MX22k8iRe/Dashboard-Design-(Community)?node-id=33-663&t=uCEQWSEVzrfYfBAb-0>)

### Login Functionality:

- Login system (with static check).
- Users can log in using their email and password.

### Profile Update:

- After logging in, users can update their profile information, including their name, email, phone ...

### Dashboard Page:

- Create a dashboard page that displays user-specific information after login.

### Component Architecture:

- Used the atomic design methodology to structure components: Atoms, Molecules, and Organisms.
# Softhesis-Labs
