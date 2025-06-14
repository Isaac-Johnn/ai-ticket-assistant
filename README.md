📂 Project Structure
bash
Copy
Edit
FullStack AI Agent/
├── ai ticket assistant/       # Backend (Node.js + Express)
├── ai-ticket-frontend/        # Frontend (React + Vite)
└── README.md

✨ Features
🧾 User authentication and role-based access (Admin, Moderator, User)

📝 Ticket submission and tracking system

🎯 Role-specific views:

Admin: View all tickets

Moderator: View and respond to assigned tickets

User: View own tickets

🤖 AI enhancements:

Auto-generates helpful notes

Estimates priority and required skills

🔒 Environment variables handled securely with .env

🚀 Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/Isaac-Johnn/ai-ticket-assistant.git
cd ai-ticket-assistant
2. Setup Backend
bash
Copy
Edit
cd "ai ticket assistant"
npm install
cp .env.example .env   # Set your environment variables
npm start
3. Setup Frontend
bash
Copy
Edit
cd ../ai-ticket-frontend
npm install
cp .env.example .env   # Set your VITE_ environment variables
npm run dev

🔐 Environment Variables
Create .env files in both ai ticket assistant and ai-ticket-frontend. Make sure to add:

Backend (ai ticket assistant/.env)
ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
Frontend (ai-ticket-frontend/.env)
bash
Copy
Edit
VITE_API_URL=http://localhost:5000/api

🛠️ Tech Stack
Frontend:

React + Vite

Axios

React Router

Backend:

Node.js + Express

MongoDB + Mongoose

JSON Web Tokens (JWT)

Inngest (for background job processing)

OpenAI API

📦 Folder Breakdown
Backend (ai ticket assistant)
controllers/: Ticket & user logic

routes/: API endpoints

models/: Mongoose schemas

utils/: Mailer and AI logic

middlewares/: Auth middleware

inngest/: Event-driven background jobs

Frontend (ai-ticket-frontend)
pages/: Route-level components

components/: Reusable UI elements

assets/: Icons and styles

🧪 Future Improvements
Admin dashboard analytics

Chat-based ticket updates

File attachments

Slack/email integrations

Full testing suite



```
FullStack AI Agent
├─ ai ticket assistant
│  ├─ .env
│  ├─ controllers
│  │  ├─ ticket.js
│  │  └─ user.js
│  ├─ index.js
│  ├─ inngest
│  │  ├─ client.js
│  │  └─ functions
│  │     ├─ on-signup.js
│  │     └─ on-ticket-create.js
│  ├─ middlewares
│  │  └─ auth.js
│  ├─ models
│  │  ├─ ticket.js
│  │  └─ user.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ ticket.js
│  │  └─ user.js
│  └─ utils
│     ├─ ai.js
│     └─ mailer.js
├─ ai-ticket-frontend
│  ├─ .env
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ vite.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ assets
│  │  │  └─ react.svg
│  │  ├─ components
│  │  │  ├─ check-auth.jsx
│  │  │  └─ navbar.jsx
│  │  ├─ index.css
│  │  ├─ main.jsx
│  │  └─ pages
│  │     ├─ admin.jsx
│  │     ├─ login.jsx
│  │     ├─ signup.jsx
│  │     ├─ ticket.jsx
│  │     └─ tickets.jsx
│  └─ vite.config.js
└─ README.md

```