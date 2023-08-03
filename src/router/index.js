import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'
import Button from '@/pages/ui/Button.vue'
import Typography from '@/pages/ui/Typography.vue'
import Checkbox from '@/pages/ui/Checkbox.vue'
// import Radiobutton from '@/pages/Radiobutton.vue'
// import Progress from '@/pages/Progress.vue'
// import Input from '@/pages/Input.vue'
// import Tabs from '@/pages/Tabs.vue'
// import Table from '@/pages/Table.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: "/",
          name: "Index",
          component: Index
      },
      {
          path: "/button",
          name: "Button",
          component: Button
      },
      {
          path: "/typography",
          name: "Typography",
          component: Typography
      },
      {
          path: "/checkbox",
          name: "Checkbox",
          component: Checkbox
      },
      // {
      //     path: "/radiobutton",
      //     name: "Radiobutton",
      //     component: Radiobutton
      // },
      // {
      //     path: "/progress",
      //     name: "Progress",
      //     component: Progress
      // },
      // {
      //     path: "/input",
      //     name: "Input",
      //     component: Input
      // },
      // {
      //     path: "/tabs",
      //     name: "Tabs",
      //     component: Tabs
      // },
      // {
      //     path: "/table",
      //     name: "Table",
      //     component: Table
      // },
  ]
})

export default router
