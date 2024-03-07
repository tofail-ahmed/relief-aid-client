## LiveLink: https://relief-aid-client.vercel.app/
# Relief Supplies Management Platform

Our goal with this initiative is to build a robust Relief Supplies Management Platform using cutting-edge technologies like React, Redux, RTK Query, and React Router DOM. This platform will serve as a crucial tool for coordinating and streamlining the distribution of relief goods in the aftermath of disasters, ensuring timely assistance to affected communities.

## Technology Stack

- React
- Redux
- RTK Query
- React Router DOM
- framer-motion
- react-glider
- react-spring
- rechart

## Key Features

**For Unauthenticated Users:**
- Engaging Brand Logo: A visually appealing logo representing our platform's identity.
- Access to All Relief Goods: Navigation link for browsing all relief goods posts.
- Convenient Login Button: Allows users to log in to their accounts effortlessly.

**For Authenticated Users:**
- Consistent Branding: Brand logo remains visible, ensuring a seamless user experience.
- Access to All Relief Goods: Users can continue browsing all relief goods posts.
- Dashboard Access: Allows users to manage relief goods effectively through their personalized dashboard.
- Easy Logout: Provides a simple way for users to log out of their accounts.

#### Banner / Hero Section
- Striking visuals and informative content that highlight our platform's mission and objectives.

#### Relief Goods Posts
- Display of 6 relief goods posts in a card format, offering a quick overview of each relief item.
- Each card features:
  - Image: Visual representation of the relief item.
  - Title: Brief summary of the relief goods post.
  - Category: Categorization of the relief item (e.g., Food Supplies, Shelter Kits, Clothing).
  - Amount: Quantity or monetary value of the relief item.
  - View Detail Button: Allows users to explore more details about the relief item.
- View All Button: Grants access to the All Relief Goods Page (/relief-goods), showcasing a comprehensive list of relief goods posts related to relief supplies.

### All Relief Goods Page (/relief-goods) [Public Route]

#### Grid of Relief Goods Posts in Card View
- Organized grid layout presenting relief goods posts in an appealing visual format.
- Each card displays:
  - Image: Visual representation of the relief item.
  - Title: Brief summary of the relief goods post.
  - Category: Categorization of the relief item (e.g., Food Supplies, Shelter Kits, Clothing).
  - Amount: Quantity or monetary value of the relief item.
  - View Detail Button: Allows users to navigate to the relief goods details page (/relief-goods/:id).

### Relief Goods Detail Page (/relief-goods/:id) [Public Route]

#### Standardized Relief Goods Detail Presentation
- Detailed display of a relief goods post adhering to a standardized format.
- Information includes:
  - Image: Visual representation of the relief item.
  - Title: Brief summary of the relief goods post.
  - Category: Categorization of the relief item (e.g., Food Supplies, Shelter Kits, Clothing).
  - Amount: Quantity or monetary value of the relief item.
  - Description: Comprehensive details providing additional context about the relief item.
  - Donate Now Button: Initiates the donation process, opening a confirmation modal with relevant user and relief goods data.
  - Upon confirmation, redirects users to the dashboard homepage to display pie chart statistics.

### Login / Register Page [Public Routes]

#### Register Page (/register)
- User-friendly registration form enabling account creation with essential details such as:
  - User Name
  - Email
  - Password

#### Login Page (/login)
- Secure login interface allowing users to access their accounts by providing valid credentials (email and password).

### Dashboard [Private Routes]

#### Dashboard Home Page (/dashboard)
- Dynamic dashboard interface featuring essential elements for managing user supplies and accessing statistical insights.
- Pie Chart on Supplies Calculations: Visual representation of supply statistics with dynamic data retrieved from the backend, facilitating informed decision-making and strategic planning.

#### All Supply Posts Page (Nested) (/dashboard/supplies)
- Comprehensive view of all supply posts in a table format, displaying key details such as:
  - Title
  - Category
  - Amount
- Action Buttons:
  - Edit: Opens a modal containing the details of the supply in an editable form for updates.
  - Delete: Triggers a confirmation modal for deleting the supply post upon user confirmation.
  - Upon confirmation, the supply post will be permanently removed from the platform.
- Add Supply Post Button: Directs users to the Create Supply Post Page (/dashboard/create-supply).
  - Enables users to contribute new supply posts related to health and medical supplies.

#### Supply Post Page (/dashboard/create-supply)
- Interactive form allowing users to create new supply posts with the following data structure:
  - Image
  - Category
  - Title
  - Amount
  - Description


## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.
4. Access the application on your preferred web browser at `http://localhost:5173/5174`.

## Contributors

- [Sayem](https://github.com/tofail-ahmed)
