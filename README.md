# 🍽️ Recipe Book

A user-friendly and interactive recipe collection platform tailored for food lovers to easily gather, curate, and explore recipes — making meal planning simple and inspiring.

## 🔗 Live Demo

🌐 [Live Site](https://recipe-book-23.web.app) _Hold Ctrl (or Command on Mac) and click the link to open it in a new tab._

---

## 🎯 Purpose

Recipe Book is built for food lovers to:

- 👨‍🍳 Add and manage personal recipes
- 🌍 Discover recipes shared by others
- 💖 Like favorite recipes
- 🌟 View top recipes based on likes
- 📝 Save recipes to a wishlist for later

---

## 🚀 Key Features

- 🧾 **Recipe Management** – Add, edit, and delete your own recipes
- 🔍 **Discover** – Explore recipes added by other users
- ❤️ **Like System** – Like recipes to help them reach the top of the list in real-time
- 🔐 **Authentication** – Secure login/signUp using Firebase
- 🔐 **Protected Routes** – Users must be authenticated to access personal features like add recipes, my recipes, etc.
- 📊 **Dashboard** – Private dashboard where users can:
  - View all their added recipes
  - Track total recipe count
  - 📈 Visualize likes per recipe using interactive charts (via Recharts)
- 📱 **Fully Responsive** – Seamlessly adapts to all screen sizes: mobile, tablet, and desktop
- 🔥 **Toasts & Alerts** – Smooth UX with hot toasts and sweet alerts
- 📈 **Real-Time Updates** – Like counts are live without page refresh
- 🔄 **Fallbacks** – Real-time UI fallback for loading and no data scenarios

---

## 🛠️ Tech Stack

| Tech                       | Usage                     |
| -------------------------- | ------------------------- |
| ⚛️ React                   | Frontend UI               |
| 🔥 Firebase                | Auth & Database           |
| 🌬️ Tailwind CSS            | Styling                   |
| 🔄 React Router            | Routing                   |
| 🛠️ Vite                    | Fast dev environment      |
| 🍞 React Hot Toast         | Notifications             |
| 💡 SweetAlert2             | Modals & Alerts           |
| 🌀 Swiper                  | Carousels for top recipes |
| 🧸 Lottie                  | Engaging animations       |
| ✍️ React Simple Typewriter | Typing effects            |
| 🎨 React Icons             | UI Icons                  |
| 🎬 Framer Motion           | Animations & transitions  |
| 📊 Recharts                | Data visualization charts |

---

## 🚧 Error Handling Routes

Our application includes dedicated routes to handle errors gracefully:

- 🚫 404 - Page Not Found:
  This route catches all undefined URLs and displays a user-friendly "Page Not Found" message, helping users navigate back to valid pages.

---

## 🧩 NPM Packages Used

| Package                   | Purpose                                                                 |
| ------------------------- | ----------------------------------------------------------------------- |
| `firebase`                | Authentication and real-time database for storing user data and recipes |
| `lottie-react`            | Adds rich, animated illustrations for enhanced user experience          |
| `react`                   | Core library for building the user interface                            |
| `react-dom`               | Renders React components into the DOM                                   |
| `react-hot-toast`         | Displays toast notifications for user feedback                          |
| `react-icons`             | Provides a wide variety of ready-to-use icons                           |
| `react-router`            | Handles client-side routing and navigation                              |
| `react-simple-typewriter` | Adds dynamic typing text effects                                        |
| `sweetalert2`             | Modern alert popups for confirmations and messages                      |
| `swiper`                  | Implements touch-enabled carousels for featured/top recipes             |
| `tailwindcss`             | Utility-first CSS framework for responsive and clean design             |
| `framer-motion`           | Adds smooth animations for features section and contact interactions    |
| `recharts`                | Displays charts for visualizing user's recipe data                      |

Refer to `package.json` for the entire list of dependencies.

---

## Installation

To set up the project locally, follow these steps:

1. Clone the client (frontend) repositories:

   ```bash
   git clone https://github.com/fahimchowdhury/recipe-book-client.git
   ```

2. Clone the server (backend) repository:

   ```bash
   git clone https://github.com/fahimchowdhury/recipe-book-server.git
   ```

3. Navigate to the client directory:

   ```bash
   cd recipe-book-client
   ```

4. Install client dependencies:

   ```bash
   npm install
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Now Navigate to the server directory

   ```bash
   cd ../recipe-book-server
   ```

7. Install server dependencies:

   ```bash
   npm install
   ```

8. Run the development server (Choose one):

### Run normally

---

```bash
node index.js
```

### Or, If you have nodemon installed globally just run: (it will auto-restart on changes)

---

```bash
nodemon index.js
```

---

### Notes

- Make sure you have [Node.js](https://nodejs.org/) installed.
- If you don’t have nodemon installed globally, you can run it with:

  ```bash
  npx nodemon index.js
  ```

- Run frontend and backend servers simultaneously in separate terminal windows or tabs.

## Usage

Once the project is set up, you can:

1. **Start the Development Server**:  
   Run the following command and access the project at `http://localhost:5173/`

   ```bash
   npm run dev
   ```

2. **Build for Production**:  
   Create a production-ready build using:

   ```bash
   npm run build
   ```

3. **Preview the Production Build**:  
   After building, preview the app with:

   ```bash
   npm run preview
   ```

4. **Deploy**:  
   Follow Firebase deployment commands to host your app:
   ```bash
   firebase deploy
   ```

## 🧁 Contribute

Contributions are welcome!  
If you’d like to suggest new features, improve the UI, or fix bugs, feel free to fork the repo and open a pull request. Let's build something delicious together!
