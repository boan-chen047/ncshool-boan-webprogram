# 🎮 Game Forum

This is a game forum project built with **Vue 3**, **Vite**, and **Firebase**. 
It focuses on real-time data fetching, interactive UI experiences, and automated deployment, and is developed using Tailwind CSS 4.0.

👉[View the Website](https://nschool-d73fc.web.app)

## 🚀 Project Highlights

* **Vue 3 Composition API:** Utilizes the `<script setup>` syntax and logic encapsulation to enhance code reusability and maintainability.
* **Real-time Firebase Integration (Firestore):** Implements asynchronous data fetching for dynamic game lists and news detail pages.
* **Real-time Firebase Integration (Authentication):** Integrates Google and Email login systems with persistent user state management.
* **Multi-language Support (i18n):** Features instant language switching between English and Traditional Chinese.
* **Automated Deployment (CI/CD):** Configured with GitHub Actions to automatically build and deploy to Firebase Hosting on every push to the main branch.
* **Modern UI (Shadcn UI):** Uses Shadcn UI (Radix UI) to build a smooth navigation menu and card system.
* **Modern UI (Embla Carousel):** Integrates Embla Carousel for a high-performance game showcase with autoplay and pause-on-hover functionality.

## 🛠️ Technologies

* **Core Framework:** Vue 3 (Composition API)
* **Build Tool:** Vite 7
* **Package Manager:** pnpm
* **Programming Language:** TypeScript
* **Backend Services:** Firebase (Firestore, Authentication, Hosting)
* **Styling:** Tailwind CSS 4.0
* **UI Component Library:** Shadcn UI (Carousel, Navigation Menu, Card, Button, etc.)
* **CI/CD:** GitHub Actions
* **External Tools:** VueUse, Lucide-Vue-Next, Vue I18n

## 📂 Core Architecture

* **`src/composable/`**: Encapsulates Firebase interaction logic (`useGames`, `useNews`, `useAuth`).
* **`src/view/`**: Contains the Home page, News page, Game detail page, and User profile.
* **`src/components/ui/`**: Atomic UI components based on Radix UI.
* **`src/locales/`**: JSON translation files for i18n support.

### Folder Structure

```text
src/
├── composable/      # Logic encapsulation (Firebase & Auth)
├── components/
│   ├── ui/          # Base UI components (Shadcn UI)
│   └── firebase/    # Firebase configuration
├── view/            # Page-level components (Home, News, Game, User)
├── router/          # Routing configuration
├── locales/         # i18n translation files (en, zh-TW)
└── lib/             # Utility functions (Tailwind class merging)
```

## ⚙️ Local Setup

**1. Clone the repository:**

```bash
git clone [https://github.com/boan-chen047/ncshool-boan-webprogram.git](https://github.com/boan-chen047/ncshool-boan-webprogram.git)
cd ncshool-boan-webprogram
```


**2. Install dependencies:** Ensure your environment meets the required Node.js version (`^20.19.0` or `>=22.12.0`).
```bash
pnpm install
```

**3. Set environment variables:** Create a `.env` file and fill in your Firebase configuration.

```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

**4. Start the development server:**
```bash
pnpm dev
```
## 🛠️ Development Notes

- **IDE Recommendation**: [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (Volar).
- **Type Checking**: This project uses `vue-tsc` for type-checking `.vue` files.
- **DevTools**: It is highly recommended to install the [Vue.js devtools](https://github.com/vuejs/devtools) for a better debugging experience.

## 👤 Author

**Bo-An Chen (陳柏安)** - [@boan-chen047](https://github.com/boan-chen047)