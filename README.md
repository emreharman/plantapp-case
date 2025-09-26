# 🌱 PlantApp Case Study

This repository contains the implementation of the **PlantApp React Native Case** given as a test project.  
The app is built with **Expo**, **React Native**, and **Redux Toolkit**, following the requirements in the case document.

---

## 📖 Case Requirements vs. Implementation

| Requirement (from case doc) | Implementation in repo |
|-----------------------------|-------------------------|
| Onboarding + Authentication flow | Implemented basic navigation using **expo-router**. Screens structured under `app/`. |
| Home screen with **categories** and **questions** | Implemented via Redux slices (`category.slice.ts`, `question.slice.ts`) and `HomeScreen.tsx`. Categories shown in grid, questions shown in horizontal swipe list. |
| Search bar in header | Implemented inside **ImageBackground** header with proper styling. |
| API integration (fetch categories/questions) | Services created under `services/` (e.g., `CategoryService`, `QuestionService`). Data fetched with `createAsyncThunk` and stored in Redux. |
| Redux state management | Used **Redux Toolkit** with slices (`store/slices/`). Added custom hooks (`useCategories`, `useQuestions`). |
| Pull-to-refresh | Added via **RefreshControl** on Home screen, with smooth delay for better UX. |
| Unit tests | Added under `__tests__/`|


---


## 🗂 Project Structure

```
plantapp-case/
├── app/                      # Expo Router screens
│   ├── (tabs)/               # Bottom tab navigator
│   │   ├── _layout.tsx       # Tab layout (Home, Diagnose, Garden, Scan, Profile)
│   │   ├── index.tsx         # Home screen
│   │   ├── diagnose.tsx      # Diagnose screen
│   │   ├── garden.tsx        # My Garden screen
│   │   ├── profile.tsx       # Profile screen
│   │   └── scan.tsx          # Scan screen (custom scan button in tab bar)
│   │
│   └── onboarding/           # Onboarding & paywall flow
│       ├── index.tsx         # Onboarding entry
│       ├── step2.tsx         # Onboarding Step 2
│       ├── step3.tsx         # Onboarding Step 3
│       └── paywall.tsx       # Paywall screen
│
├── assets/                   # Icons & images
├── components/               # Shared UI components (Loading, Button, Input etc.)
├── constants/                # Fonts, theme, colors
├── hooks/                    # Custom hooks (useCategories, useQuestions)
├── services/                 # API services (CategoryService, QuestionService)
├── store/                    # Redux Toolkit slices & store hooks
├── __tests__/                # Unit tests
└── ...

```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
yarn install
```

### 2. Run development server
```bash
yarn start
```

This will start the Expo development environment.

### 3. Run tests
```bash
yarn test
```

---

## 🛠️ Tech Stack

- **Expo** (React Native)
- **expo-router** (navigation)
- **Redux Toolkit** (state management)
- **Axios** (API client)
- **Jest & React Testing Library** (unit tests)
- **TypeScript** (types & interfaces)

---

## ✅ Extra Features

- Pull-to-refresh with smooth delay  
- Keyboard dismiss on background press  
- Unit tests for slices & components  
- Performance-optimized FlatList usage  
- Styled header with **ImageBackground**  
- Consistent design with custom fonts & theme  


