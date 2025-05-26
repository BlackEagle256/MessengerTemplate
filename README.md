# 💬 MessengerTemplate

A fully responsive and modern chat UI built with **React**. This project mimics the layout and experience of a messenger-style chat application, providing a clean user interface and interaction design.

## 🚀 Features

- 💡 Clean and modern UI
- 😄 Emoji picker integration
- 📷 Image and media preview in messages
- 🗂 Chat list with search and user management
- 🧾 Detailed user info sidebar
- 🔔 Toast notifications (using `react-toastify`)
- 🧑‍💻 Login and registration form with avatar upload
- 🎨 Styled with SCSS-like nested CSS for clarity and structure
- 🧭 Responsive layout with scrollable areas

---

## 📂 Project Structure

```
src/
│
├── components/
│ ├── chat/
│ │ ├── Chat.jsx
│ │ └── Chat.css
│ ├── detail/
│ │ ├── Detail.jsx
│ │ └── Detail.css
│ ├── list/
│ │ ├── List.jsx
│ │ ├── List.css
│ │ ├── chatList/
│ │ │ ├── ChatList.jsx
│ │ │ ├── chatList.css
│ │ │ └── addUser/
│ │ │ ├── AddUser.jsx
│ │ │ └── addUser.css
│ │ └── userInfo/
│ │ ├── UserInfo.jsx
│ │ └── userInfo.css
│ ├── login/
│ │ ├── Login.jsx
│ │ └── login.css
│ ├── notification/
│ │ ├── Notification.jsx
│ │ └── (uses react-toastify styles)
│
├── App.jsx
├── index.css
└── index.js
```

## 📦 Installation

> Before you start, make sure you have **Node.js (v14+)** and **npm** or **yarn** installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/MessengerTemplate.git
cd MessengerTemplate
```
2. Install Dependencies
```bash
npm install
# or
yarn install
```
3. Run the Development Server
```bash
npm run dev
# or
yarn dev
```
Your app will be available at http://localhost:3000.

🧰 Dependencies
React – UI Library

emoji-picker-react – Emoji selector component

react-toastify – Notification system

Vite / Create React App (depending on setup) – Build tool

🛠 Customization
You can customize the following easily:

User avatars and media in public/

Chat messages: Currently static. You can connect to a backend for real-time chat.

Authentication: Currently mocked, but structured for integration with Firebase, Supabase, etc.

🧑‍🎨 Design Considerations
Scrollbars are customized for aesthetic appearance.

Flexbox layout ensures responsive resizing.

CSS structure is written in a nested format similar to SCSS for clarity, even though it’s in plain CSS.

📝 TODO / Roadmap
🔗 Connect to a real-time backend (e.g., Firebase, WebSockets)

✅ User authentication system

📤 File upload functionality

🌐 Multi-user support

🌙 Dark mode toggle

🤝 Contributing
Feel free to fork this repository and open pull requests if you'd like to improve it or add new features.

```bash

git checkout -b feature/yourFeature
git commit -m "Add some feature"
git push origin feature/yourFeature

```
---
📄 License
This project is licensed under the MIT License.
---
🙌 Credits
All icons and images used in this project are for demo purposes only.
---
📬 Contact
For any questions or suggestions:
Telegram: t.me/blackeagle256

GitHub: BlackEagle256

Email: mohammadhoseindadgostr@gmail.com
---
Made With ❤️ By MR.MH
