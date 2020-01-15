<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <!-- <main-header v-if="lang !== 'play'"></main-header> -->
    <div class="main-cnt">
      <!-- <el-scroll> -->
        <router-view></router-view>
      <!-- </el-scroll> -->
    </div>
    <main-footer v-if="lang !== 'play' && !isComponent"></main-footer>
  </div>
</template>

<script>
  import { use } from './use.js';
  import zhLocale from './zh-CN';
  const lang = 'zh-CN';
  const localize = lang =>use(zhLocale)

  export default {
    name: 'app',
    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
      },
      isComponent() {
        return /^component-/.test(this.$route.name || '');
      }
    }
  };
</script>
