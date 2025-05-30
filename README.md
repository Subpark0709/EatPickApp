# 잇픽(EatPick)
## 음식 재료 기반 레시피 추천 앱 개발 프롬프트 템플릿 (React Native)

## Project Structure

The application source code is primarily located within the `src/` directory. This directory houses all the core components, screens, services, state management, navigation, and utility functions. The structure within `src/` aims to follow a feature-first or domain-driven approach where appropriate, with a base organization inspired by Atomic Design for components.

Key subdirectories in `src/` include:
- `assets/`: Static assets like images and fonts.
- `components/`: Reusable UI components (atoms, molecules, organisms).
- `constants/`: Application-wide constants (e.g., colors, API keys).
- `expo_app_specific/`: Expo Router specific files (previously the `app/` directory).
- `hooks/`: Custom React hooks.
- `navigation/`: Navigators (e.g., AppNavigator, AuthNavigator).
- `screens/`: Top-level screen components.
- `services/`: Modules for interacting with external APIs or backend services.
- `store/`: Global state management setup (e.g., Redux slices and store).
- `utils/`: Utility functions.

This organization helps in maintaining a scalable and maintainable codebase as the application grows.