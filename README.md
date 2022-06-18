# Vue NBA Logos

> Vue components for NBA team logos

# Usage

```ts
<!-- main.ts -->
import { createApp } from 'vue'
import App from './App.vue'
import Logos from 'vue-nba-logos'

createApp(App).use(Logos).mount('#app')

<!-- .vue -->
<template>
  <ATL />
  <BOS :size="48" />
  <CLE size="3rem"/>
</template>
```
