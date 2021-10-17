# next-progress

### No hassle [Next.js](https://nextjs.org/) - [NProgress](https://ricostacruz.com/nprogress/) integration <img src="https://cultofthepartyparrot.com/parrots/hd/congapartyparrot.gif" width="20px" height="20px" />

**_Fully configurable & easy to use_**

## 🔌 Setup

**_it's so quick_** <img src="https://cultofthepartyparrot.com/parrots/hd/ultrafastparrot.gif" width="20px" height="20px" />

### **✅ Install**

```bash
yarn add next-nprogress
```

_or_

```bash
npm install --save next-nprogress
```

### **✅ Import**

**_Important❗️_** It has to be done in your [custom App](https://nextjs.org/docs/advanced-features/custom-app) - **pages/\_app\[.js / .jsx / .ts / .tsx\]**

```ts
import NextProgress from "next-progress";
```

### **✅ Use**

Anywhere in your [custom App](https://nextjs.org/docs/advanced-features/custom-app)'s return statement

```tsx
<NextProgress />
```

## 🌟 Example pages\\\_app

**_Tip:_** This example is in typescript, if you use javascript then just remove the types.

```tsx
import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalContext from "context";
import { ThemeProvider } from "styled-components";
import Layout from "organisms/Layout";
import NextProgress from "next-progress";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Lorem Ipsum..." />
        <title>Example</title>
      </Head>
      <GlobalContext.Provider value={}>
        <GlobalStyle />
        {
          //
          // Can be placed anywhere in the return statement
          //
        }
        <NextProgress delay={300} options={{ showSpinner: false }} />
        {
          //
          //
          //
        }
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}
```

## ⚙️ Docs - Options

### 📐 **_height_**

Height of the progress bar.

**_default = "2px"_**

### 🌈 **_color_**

Color of the progress bar.

**_default = "#29D"_**

### 🐢 **_delay_**

Delay of the animation - when page loads faster than the delay time progress bar won't be displayed.

**_default = 0_**

### ⚙️ **_options_**

Options for - NProgress.configure(options).

See [NProgress docs](https://www.npmjs.com/package/nprogress#configuration)

**_default = undefined_**

### 👠 **_customGlobalCss_**

Css Custom NProgress styles - must be provided as a GlobalStyleComponent - use [createGlobalStyle](https://styled-components.com/docs/api#createglobalstyle) from styled-components.

**_Warning:_** [_color_](#-color) param won't work as you should set the color yourself inside custom css.

**_default = undefined_**
