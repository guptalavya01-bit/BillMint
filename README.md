# BillMint — AI Invoice Generator

BillMint is a full stack SaaS web application that helps freelancers and small businesses generate professional invoices in seconds using AI. Instead of manually filling every field, users describe their invoice in plain text and Gemini AI handles the rest — creating complete, ready-to-send invoices instantly.

## Live Demo

🔗 [Live Demo](https://billmint-lavya.vercel.app) <!-- replace with your actual Vercel link -->

## Features

- **AI Invoice Generation** — Describe your invoice in plain English (e.g. "Invoice for logo design, 3 revisions at $150 each, due in 15 days") and BillMint uses Gemini AI to auto-fill all invoice fields including line items, quantities, and pricing.
- **Manual Invoice Builder** — Full control to create invoices from scratch with itemized billing, tax calculation, and currency support.
- **Business Profile** — Save your business name, address, logo, and signature once and reuse across all invoices automatically.
- **PDF Export** — Download any invoice as a clean, professional PDF with one click.
- **Invoice Status Tracking** — Track invoices as Draft, Unpaid, Paid, or Overdue.
- **Dashboard & Analytics** — View total revenue, invoice count, and financial summaries through KPI cards.
- **Pricing Plans** — SaaS style pricing with Starter, Pro, and Business plans.
- **Secure Authentication** — User authentication and session management powered by Clerk.

## Tech Stack

**Frontend:** React, Vite, Tailwind CSS, Clerk Auth
**Backend:** Node.js, Express.js
**Database:** MongoDB (Mongoose)
**AI:** Google Gemini API
**PDF Generation:** jsPDF

## Project Structure

```
BillMint/
├── frontend/               # React + Vite client
│   ├── src/
│   │   ├── components/     # Navbar, InvoicePreview, etc.
│   │   ├── pages/          # Dashboard, CreateInvoice, Invoices, BusinessProfile
│   │   └── assets/
└── backend/                # Express + MongoDB server
    ├── controllers/
    ├── models/
    ├── routes/
    └── config/
```

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account
- Clerk account for authentication
- Google Gemini API key

### Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

Run the server:
```bash
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` folder:
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000
```

Run the development server:
```bash
npm run dev
```

## How AI Invoice Generation Works

1. User types a plain text description of the invoice they need.
2. The description is sent to the backend which calls the Gemini API.
3. Gemini parses the description and returns structured invoice data — line items, quantities, prices, due date.
4. The data auto-fills the invoice form which the user can review, edit, and save.
5. User can download the final invoice as a PDF.

## Author

Built by Lavya Gupta as part of a full stack development portfolio project.
