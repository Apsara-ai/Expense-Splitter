 # 💸 Expense-Splitter

[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen?logo=mongodb)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🚀 Overview
**Expense-Splitter** is a full-stack application that helps teams split expenses fairly.  
Users can **register, log in, select team members, record payments, split costs equally, track balances, and log out**.  
All data is stored securely using a local backend API powered by **MongoDB**.

---

## ✨ Features
- 🔑 **Authentication**: Login & Register functionality.
- 👥 **Team Members**: View all members and select who shares an expense.
- 💵 **Expense Splitting**: Enter a title and amount, choose who paid, and split equally.
- 📊 **Balance Tracking**: Shows who owes money to whom in real time.
- 🚪 **Logout**: End session securely.
- 🗄️ **Local API**: Backend built with Node.js/Express, connected to MongoDB.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Apsara-ai/Expense-Splitter.git
cd Expense-Splitter
2. Backend Setup
bash
cd backend
npm install
npm start
Ensure MongoDB is running locally.

Configure .env with your database connection string.

3. Frontend Setup
bash
cd frontend
npm install
npm start
Today
i create one project using mangodb and react which run localy using backend run along with npm start .now i whant to put it to git hub then how can i uploe it and redme etc (explain all step by step)
Got it — let’s walk through the full process step by step so you can take your local React + MongoDB project and put it on GitHub with a proper README.

🛠 Step 1: Prepare Your Project
Make sure your project runs locally (npm start for frontend, backend running separately).

Clean up unnecessary files (like node_modules — you don’t want to upload those).

Ensure you have a .gitignore file that excludes:

Code
node_modules
.env
build
This prevents sensitive or bulky files from being pushed.

🌐 Step 2: Create a GitHub Repository
Go to GitHub.

Click New Repository.

Give it a name (e.g., my-react-mongo-project).

Choose Public or Private.

Don’t add a README yet (we’ll create our own).

Click Create Repository.

💻 Step 3: Initialize Git Locally
In your project folder, run these commands in the terminal:

bash
# Initialize git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Link to GitHub repo (replace with your repo URL)
git remote add origin https://github.com/your-username/my-react-mongo-project.git

# Push code
git branch -M main
git push -u origin main
📄 Step 4: Create a README.md
Inside your project root, create a file named README.md and add content like this:

markdown
# My React + MongoDB Project

## 🚀 Overview
This project is a full-stack application built with React (frontend) and MongoDB (backend). It runs locally using `npm start`.

## 🛠 Tech Stack
- React
- Node.js / Express
- MongoDB

## ⚙️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-react-mongo-project.git
Navigate into the project folder:

bash
cd my-react-mongo-project
Install dependencies:

bash
npm install
Start the backend and frontend:

bash
npm start
📌 Features
User authentication

CRUD operations with MongoDB

Responsive UI with React

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss.

📜 License
MIT

Code

---

## ✅ Step 5: Commit and Push README
```bash
git add README.md
git commit -m "Add README"
git push
🎉 Step 6: Verify
Go to your GitHub repo.

You should see your code and README displayed nicely.

👉 Pro tip: If your backend and frontend are separate, you can create two folders (client and server) inside the repo, each with its own package.json and instructions in the README.

Would you like me to draft a ready-to-use README.md file tailored to your project (React + MongoDB, with client/server structure), so you can copy-paste it directly?

give me discription has it is(Expense-Splitter) where it login,regicter,show all team members name to select who are all whant to select to splitte and make payed by the user amd take tital and amount then it slite to all equaly and bellow showes balence who are all whant to give money to that person and to others at last can logout ,all are  stored using backend local api
Perfect — let’s tailor your README description for your Expense-Splitter project so it clearly explains what it does and how to run it. Here’s a ready-to-use draft you can copy into your README.md file:

markdown
# 💸 Expense-Splitter

## 🚀 Overview
Expense-Splitter is a full-stack application built with **React** (frontend), **Node.js/Express** (backend), and **MongoDB** (database).  
It allows users to **log in, register, select team members, split expenses equally, track balances, and log out**.  
All data is stored using a local backend API connected to MongoDB.

---

## 🛠 Features
- 🔑 **Authentication**: Login and Register functionality.
- 👥 **Team Management**: Displays all team members’ names to select who will share an expense.
- 💵 **Expense Splitting**: Enter a title and amount, choose who pays, and split equally among selected members.
- 📊 **Balance Tracking**: Shows who owes money to whom and keeps track of settlements.
- 🚪 **Logout**: Securely end the session.
- 🗄️ **Backend API**: All data stored and retrieved via local MongoDB API.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/expense-splitter.git
cd expense-splitter
2. Backend Setup
bash
cd server
npm install
npm start
Ensure MongoDB is running locally.

Configure your .env file with database connection string and any secrets.

3. Frontend Setup
bash
cd client
npm install
npm start
4. Access the App
Open http://localhost:3000 in your browser.

Backend runs on http://localhost:5000 (or whichever port you set).

📌 Example Workflow
Register or log in.

View team members and select who will split the expense.

Enter title and amount.

Choose who paid → system splits equally among selected members.

Balance sheet shows who owes money to whom.

Logout when done.

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss.

📜 License
MIT

Code

---

👉 Next step: after adding this file, run:

```bash
git add README.md
git commit -m "Add project description"
git push
Your GitHub repo will now show this README front and center.

Would you like me to also show you how to structure your repo (with client/ and server/ folders, .gitignore, and .env setup) so it’s clean and professional?

C:\Users\Dell\Desktop\expense-splitter>git init
'git' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\Dell\Desktop\expense-splitter>
The error you’re seeing — 'git' is not recognized as an internal or external command — means Git is not installed or not added to your system’s PATH. Let’s fix this step by step:

🛠 Step 1: Install Git
Go to the official Git website: https://git-scm.com/downloads.

Download the installer for Windows.

Run the installer:

Keep default options unless you know you need something specific.

Make sure the option “Add Git to PATH” is selected during installation.

🌐 Step 2: Verify Installation
After installation, open Command Prompt or PowerShell and type:

bash
git --version
You should see something like:

Code
git version 2.44.0
If you see that, Git is installed correctly.

💻 Step 3: Re-run Git Commands
Now go back to your project folder:

bash
cd C:\Users\Dell\Desktop\expense-splitter
Run:

bash
git init
git add .
git commit -m "Initial commit"
🔗 Step 4: Connect to GitHub
Link your local repo to GitHub:

bash
git remote add origin https://github.com/your-username/expense-splitter.git
git branch -M main
git push -u origin main
✅ After this, your project will be uploaded to GitHub.

Would you like me to also show you how to install Git using Winget (Windows package manager) so you can do it with a single command instead of downloading manually?

Microsoft Windows [Version 10.0.26200.8037].txt

Plain Text

Great progress — Git is installed and working now (git version 2.54.0.windows.1 shows it’s ready). The warnings you’re seeing during git add . are line-ending conversion warnings (LF → CRLF). They’re not errors, just Git telling you that files created with Unix-style line endings will be converted to Windows-style when checked out. You can safely ignore them.

That said, you don’t want to commit your entire node_modules folder — it’s huge and unnecessary. Instead, you should:

🛠 Step 1: Create a .gitignore
In your project root (C:\Users\Dell\Desktop\expense-splitter), create a file named .gitignore with this content:

Code
# Ignore node_modules
node_modules/
backend/node_modules/
client/node_modules/

# Ignore environment files
.env

# Ignore build outputs
build/
dist/
This tells Git to skip those folders/files.

🛠 Step 2: Reset Staging Area
Since you already ran git add ., you need to unstage everything and re-add only the right files:

bash
git reset
Then add everything again (Git will respect .gitignore this time):

bash
git add .
git commit -m "Initial commit with proper .gitignore"
🛠 Step 3: Push to GitHub
Now connect and push:

bash
git remote add origin https://github.com/your-username/expense-splitter.git
git branch -M main
git push -u origin main
✅ Result
Your repo will contain only source code, not bulky node_modules.

Anyone cloning your repo can run npm install to rebuild dependencies.

Warnings about LF/CRLF won’t matter — Git handles them automatically.

👉 Next step: Do you want me to give you a ready-to-use .gitignore file specifically tailored for a React + Node.js project (client/server structure), so you can copy-paste it directly?

C:\Users\Dell\Desktop\expense-splitter>git reset

C:\Users\Dell\Desktop\expense-splitter>git add .
warning: in the working copy of 'backend/package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'backend/package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'frontend/.gitignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'frontend/README.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'frontend/package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'frontend/package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'frontend/public/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'frontend/public/manifest.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'frontend/public/robots.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'frontend/src/App.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'frontend/src/index.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'frontend/src/index.js', LF will be replaced by CRLF the next time Git touches it

C:\Users\Dell\Desktop\expense-splitter>git commit -m "Initial commit with proper .gitignore"
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'Dell@DESKTOP-DDVUE1D.(none)')

C:\Users\Dell\Desktop\expense-splitter>git remote add origin https://github.com/Apsara-ai/Expense-Splitter.git
error: remote origin already exists.

C:\Users\Dell\Desktop\expense-splitter>git branch -M main

C:\Users\Dell\Desktop\expense-splitter>git push -u origin main
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/Apsara-ai/Expense-Splitter.git'

C:\Users\Dell\Desktop\expense-splitter>
You’re almost there — the issues you’re seeing now are just setup problems with Git identity and branch naming. Let’s fix them step by step:

1. Configure Your Git Identity
Git needs to know who you are before committing. Run these commands (replace with your GitHub email and name):

bash
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
Example:

bash
git config --global user.email "apsara.ai@gmail.com"
git config --global user.name "Apsara-ai"
Now Git will attach your identity to commits.

2. Fix the Remote Origin
You already added the remote once, so Git says “remote origin already exists.” To fix:

bash
git remote remove origin
git remote add origin https://github.com/Apsara-ai/Expense-Splitter.git
3. Create and Commit to the Main Branch
The error src refspec main does not match any means you don’t have a branch called main yet. Let’s create it:

bash
git checkout -b main
git add .
git commit -m "Initial commit with proper .gitignore"
4. Push to GitHub
Now push your code:

bash
git push -u origin main
✅ After This
Your repo will be live on GitHub.

The README.md will show your project description.

.gitignore will keep node_modules out of GitHub.

👉 Tip: If you want me to, I can give you the exact .gitignore file for React + Node.js projects so you don’t accidentally upload unnecessary files. Would you like me to draft that for you?

The README.md will show your project description.
Exactly — once you push your code to GitHub, the README.md file you created will automatically show up on the repository’s front page as the project description. That’s why it’s so important to write a clear, well-structured README: it becomes the “landing page” for anyone visiting your repo.

Here’s how it works:

GitHub looks for a file named README.md in the root of your repository.

It renders the Markdown content into a nicely formatted page.

This is what people see first when they open your repo — your project description, setup instructions, features, etc.

So in your case:

Make sure your README.md file is in the root folder of your project (C:\Users\Dell\Desktop\expense-splitter).

Commit and push it:

bash
git add README.md
git commit -m "Add project description"
git push
Go to your GitHub repo page — you’ll see the README displayed right below the file list.

👉 Since your project is Expense-Splitter, the README we drafted earlier (with login/register, team members, splitting expenses, balances, logout, backend API) will be the description that shows up.

Do you want me to polish that README into a professional GitHub-style version with badges (like Node.js, React, MongoDB icons) and a quick demo section, so it looks more impressive when people visit your repo?

yes
Here’s a polished GitHub‑style README.md for your Expense‑Splitter project. It includes badges, a professional layout, and sections that make your repo look impressive:

markdown
# 💸 Expense-Splitter

[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen?logo=mongodb)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🚀 Overview
**Expense-Splitter** is a full-stack application that helps teams split expenses fairly.  
Users can **register, log in, select team members, record payments, split costs equally, track balances, and log out**.  
All data is stored securely using a local backend API powered by **MongoDB**.

---

## ✨ Features
- 🔑 **Authentication**: Login & Register functionality.
- 👥 **Team Members**: View all members and select who shares an expense.
- 💵 **Expense Splitting**: Enter a title and amount, choose who paid, and split equally.
- 📊 **Balance Tracking**: Shows who owes money to whom in real time.
- 🚪 **Logout**: End session securely.
- 🗄️ **Local API**: Backend built with Node.js/Express, connected to MongoDB.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Apsara-ai/Expense-Splitter.git
cd Expense-Splitter
2. Backend Setup
bash
cd backend
npm install
npm start
Ensure MongoDB is running locally.

Configure .env with your database connection string.

3. Frontend Setup
bash
cd frontend
npm install
npm start

4. Access the App
Frontend: http://localhost:3000

Backend API: http://localhost:5000

Example Workflow
Register or log in.

Select team members for an expense.

Enter title and amount.

Choose who paid → system splits equally.

Balance sheet shows who owes money.

Logout when done.
