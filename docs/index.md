---
# https://vitepress.dev/reference/default-theme-home-page
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'
import { sidebar } from "./.vitepress/generated/sidebar";

onMounted(() => {
  const router = useRouter()
  router.go('Submit64-vue' + sidebar[0].link.replace('.md', ''))
})
</script>
