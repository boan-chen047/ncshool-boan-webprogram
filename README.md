## Game Forum
This is a game forum project built with Vue 3, Vite, and Firebase. It focuses on data fetching and interactive UI experiences, developed using Tailwind CSS 4.0.

### Project Highlights
  * **Vue 3 Composition API**: Utilizes the `setup` syntax and logic encapsulation to enhance code reusability.
  * **Real-time Firebase Integration**:
    * **Firestore**: Implements asynchronous data fetching for dynamic game lists and detail pages.
    * **Authentication**: Integrates Google and Email login systems with dynamic user state management.
  * **Modern UI**:
    * Uses Shadcn UI (Radix UI) to build a smooth navigation menu and card system.
    * Integrates Embla Carousel to implement a game carousel featuring autoplay and pause-on-hover functionality.

### Technologies
This project is developed using the following technologies:
  * **Core Framework**: Vue 3 (Composition API)
  * **Build Tool**: Vite 7
  * **Programming Language**: TypeScript
  * **Backend Services**: Firebase (Firestore & Authentication)
  * **Styling**: Tailwind CSS 4.0
  * **UI Component Library**: Shadcn UI (includes Carousel, Navigation Menu, Card, etc.)
  * **External Tools**: VueUse, Lucide-Vue-Next

### Core Architecture
  * `src/Composable/`: Encapsulates Firebase interaction logic (`useGames`, `useAuth`).
  * `src/view/`: Contains the Home page (`home.vue`), Detail page (`game.vue`), and Navigation bar (`navbar.vue`).
  * `src/components/ui/`: Encapsulates atomic UI components based on Radix UI.
  
```text
src/
├── Composable/      # Logic encapsulation (Firebase data interaction)
├── components/
│   ├── ui/          # Base UI components (Shadcn UI)
│   └── firebase/    # Firebase configuration
├── view/            # Page-level components (Home, Game Detail, Navbar)
├── router/          # Routing configuration
└── lib/             # Utility functions (e.g., Tailwind class merging with `cn`)
```
### Local Setup
**Clone the repository:** 
```bash
git clone https://github.com/boan-chen047/ncshool-boan-webprogram.git
```


**Install dependencies:** Ensure your environment meets the required Node.js version (`^20.19.0` or `>=22.12.0`).
```bash
pnpm install
```
**Set environment variables:** Create a `.env` file and fill in your Firebase configuration.

**Start the development server:**
```bash
pnpm dev
```
## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).
