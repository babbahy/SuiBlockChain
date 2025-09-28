# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

## zkLogin Environment Variables

To configure zkLogin integration, you need to set the following environment variables in a `.env` file at the root of `SuiBlockChain/suistainablesUI/`.

- `VITE_ZK_CLIENT_ID`: **(Required)** Your OAuth 2.0 Client ID for the chosen identity provider (e.g., Google, Facebook). This is obtained when you register your application with the OAuth provider.
  - *Example*: `VITE_ZK_CLIENT_ID="1234567890-abcdefghijkl.apps.googleusercontent.com"`
- `VITE_ZK_REDIRECT_URL`: **(Required)** The URL where the OAuth provider redirects the user after authentication. This *must* match the `redirectUrl` configured with your OAuth provider. In this setup, it's typically `https://your-domain.com/zk-callback` or `http://localhost:5173/zk-callback` for local development.
  - *Example*: `VITE_ZK_REDIRECT_URL="http://localhost:5173/zk-callback"`
- `VITE_ZK_PROVER_URL`: **(Optional)** The URL of the Zero-Knowledge Proof (ZKP) prover service. If not provided, it defaults to `https://prover-dev.mystenlabs.com/v1`, which is suitable for **Devnet only**. For Testnet or Mainnet, you'll need to use Mysten Labs' production prover service (requires access) or run your own prover.
  - *Example*: `VITE_ZK_PROVER_URL="https://prover.mystenlabs.com/v1"` (for Testnet/Mainnet, if you have access)

### How to set up your `.env` file:

1. Create a file named `.env` in the `SuiBlockChain/suistainablesUI/` directory.
2. Add your environment variables to this file:

   ```
   VITE_ZK_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
   VITE_ZK_REDIRECT_URL="http://localhost:5173/zk-callback"
   # VITE_ZK_PROVER_URL="https://prover.mystenlabs.com/v1"
   ```
