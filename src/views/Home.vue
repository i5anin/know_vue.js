<template>
  <v-container>
    <h1>Props</h1>
    <!-- Блок для отображения подсвеченного кода -->
    <pre><code class="language-html">{{ childComponentCode }}</code></pre>
    <pre><code class="language-html">{{ parentComponentCode }}</code></pre>
  </v-container>
</template>

<script>
import Prism from 'prismjs'
import childComponentCode from '@/views/source/childComponentCode.js'
import parentComponentCode from '@/views/source/parentComponentCode.js'
import 'prismjs/themes/prism-tomorrow.css'

export default {
  name: 'Home',
  data() {
    return {
      childComponentCode,
      parentComponentCode,
    }
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>

<style>
/* Дополнительные стили, если необходимо */
</style>
