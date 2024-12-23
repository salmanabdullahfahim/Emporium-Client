# Emporium Shop Client

## Introduction

Emporium is a modern e-commerce platform crafted to deliver a seamless online shopping experience for users, vendors, and administrators. Designed with scalability and performance in mind, the platform leverages advanced web technologies to ensure a robust, secure, and high-performing system.

## Project Description

Emporium serves as an all-encompassing platform for online shopping. Customers can explore and purchase products effortlessly, vendors can manage their shops and inventory, and administrators oversee platform-wide operations. The platform emphasizes an intuitive user interface, responsiveness, and security for all roles.

### Key Objectives:

- Offer customers an enhanced shopping experience with advanced filtering and product comparison.
- Equip vendors with tools to manage their shops efficiently.
- Enable administrators to monitor, control, and secure platform-wide operations.

## Technologies Used:

- **Frontend:** Next.js, Tailwind CSS, Shadcn UI
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Payment Integration:** Stripe
- **Image Storage:** Cloudinary

## Features

### Admin:

- Manage users (suspend/delete accounts).
- Dynamically control product categories (add/edit/delete).
- Monitor platform activities, transactions, and vendor performance.
- Blacklist vendors or shops.

### Vendor:

- Manage shop details and inventory (add/edit/delete products).
- View and respond to customer reviews.
- Paginated order and product lists for streamlined management.

### Customer:

- Browse and filter products by category, price, and keywords.
- Add items to the cart and complete checkout seamlessly.
- Apply coupon codes for discounts during checkout.
- View order history and recently viewed products.
- Follow vendor shops for updates on their products.

### Additional Features:

- Secure JWT-based authentication with password reset functionality.
- Fully responsive design optimized for both mobile and desktop.
- Infinite scrolling for the homepage.
- Product details page featuring related products and customer reviews.

## Technology Stack

### Frontend:

- Next.js
- Tailwind CSS
- React Hook Form
- Shadcn UI
- Redux
- RTK Query
- TypeScript
- Zod

### Payment Integration:

- Stripe

## Installation Guidelines

### Prerequisites:

- Node.js installed on your system.
- Stripe account for payment integration.

### Steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/salmanabdullahfahim/Emporium-Client.git
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Add Env:**

        ```bash
            NEXT_JWT_SECRET
            NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
            NEXT_BACKEND_BASE_URL
        ```

4.  **Run:**
    ```bash
    npm run dev / yarn dev / bun dev
    ```
