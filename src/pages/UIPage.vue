<script setup lang="ts">
import { onMounted, ref } from "vue";

import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
const testServer = ref<string>("");
const alert = ref(false);
const confirm = ref(false);
const prompt = ref(false);
const address = ref("");
const shape = ref("line");
const val = ref(0);
const value = ref(true);
const standard = ref(2);
authStore.test().then((res) => (testServer.value = res.message));

const fullURL = ref("");

onMounted(() => {
  fullURL.value = window.location.href;
});

const columns = [
  {
    name: "name",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: "calories", align: "center", label: "Calories", field: "calories", sortable: true },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  { name: "iron", label: "Iron (%)", field: "iron", sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];
</script>

<template>
  <div class="main-container">
    {{ testServer }}
    {{ fullURL }}
    <h1>Заголовок</h1>
    <h2>Подзаголовок</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam quas ea saepe exercitationem? Nobis quas,
      eius repudiandae ipsa, sequi vero laudantium assumenda illum, fuga maiores sapiente cupiditate numquam
      reprehenderit.
    </p>
    <q-avatar size="40px" class="overlapping q-mb-sm">
      <img :src="`https://cdn.quasar.dev/img/avatar1.jpg`" />
    </q-avatar>
    <div class="q-pa-md q-gutter-md">
      <q-btn color="teal" size="sm" label="Unread Mails">
        <q-badge color="orange" floating transparent>∞</q-badge>
      </q-btn>

      <q-btn dense round flat icon="email">
        <q-badge color="red" floating transparent>4</q-badge>
      </q-btn>

      <div class="text-h4">
        Title
        <q-badge transparent align="middle" color="orange">app v3.0.0</q-badge>
      </div>
    </div>

    <div class="q-pa-md q-gutter-sm">
      <q-btn color="white" text-color="black" label="Standard" />
      <q-btn color="primary" label="Primary" />
      <q-btn color="secondary" label="Secondary" />
      <q-btn color="accent" label="Accent" />
      <q-btn color="yellow" text-color="black" label="Yellow" />
      <q-btn color="dark" label="dark" />
      <q-btn color="positive" label="positive" />
      <q-btn color="negative" label="negative" />
      <q-btn color="info" text-color="dark" label="info" />
      <q-btn color="warning" text-color="dark" label="warning" />
    </div>

    <div class="q-pa-md">
      <q-btn-dropdown color="primary" label="Dropdown Button">
        <q-list>
          <q-item v-close-popup clickable>
            <q-item-section>
              <q-item-label>Photos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item v-close-popup clickable>
            <q-item-section>
              <q-item-label>Videos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item v-close-popup clickable>
            <q-item-section>
              <q-item-label>Articles</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>

    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <div class="q-pa-md q-gutter-md">
      <div>
        <q-chip icon="event">Add to calendar</q-chip>
        <q-chip icon="bookmark">Bookmark</q-chip>
        <q-chip icon="alarm" label="Set alarm" />
        <q-chip class="glossy" icon="directions">Get directions</q-chip>
      </div>
      <div>
        <q-chip color="primary" text-color="white" icon="event">Add to calendar</q-chip>
        <q-chip color="teal" text-color="white" icon="bookmark">Bookmark</q-chip>
        <q-chip class="glossy" color="orange" text-color="white" icon-right="star">Star</q-chip>
        <q-chip color="red" text-color="white" icon="alarm" label="Set alarm" />
        <q-chip color="deep-orange" text-color="white" icon="directions">Get directions</q-chip>
        <q-chip>
          <q-avatar icon="bookmark" color="red" text-color="white" />
          Bookmark
        </q-chip>
        <q-chip>
          <q-avatar color="red" text-color="white">50</q-avatar>
          Emails
        </q-chip>
        <q-chip>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
          John
        </q-chip>
      </div>
    </div>

    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Alert" color="primary" @click="alert = true" />
      <q-btn label="Confirm" color="primary" @click="confirm = true" />
      <q-btn label="Prompt" color="primary" @click="prompt = true" />

      <q-dialog v-model="alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">Alert</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet
            porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro
            labore.
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      {{ address }}
      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
            <span class="q-ml-sm">You are currently not connected to any network.</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Your address</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn flat label="Add address" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

    <div class="q-px-sm q-py-lg">
      <div class="column items-center" style="margin-top: 100px; margin-bottom: 100px">
        <q-fab color="purple" icon="keyboard_arrow_up" direction="up">
          <q-fab-action color="primary" icon="mail" />
          <q-fab-action color="secondary" icon="alarm" />
        </q-fab>

        <br />

        <q-fab color="amber" text-color="black" icon="keyboard_arrow_left" direction="left">
          <q-fab-action color="amber" text-color="black" icon="mail" />
          <q-fab-action color="amber" text-color="black" icon="alarm" />
        </q-fab>

        <br />

        <q-fab color="secondary" push icon="keyboard_arrow_right" direction="right">
          <q-fab-action color="primary" icon="mail" />
          <q-fab-action color="accent" icon="alarm" />
        </q-fab>

        <br />

        <q-fab color="accent" glossy icon="keyboard_arrow_down" direction="down">
          <q-fab-action color="amber" text-color="black" icon="mail" />
          <q-fab-action color="amber" text-color="black" icon="alarm" />
        </q-fab>
      </div>
    </div>
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="name"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']" />

        <q-input
          filled
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]" />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-sm">
            <q-radio v-model="shape" val="line" label="Line" />
            <q-radio v-model="shape" val="rectangle" label="Rectangle" />
            <q-radio v-model="shape" val="ellipse" label="Ellipse" />
            <q-radio v-model="shape" val="polygon" label="Polygon" />
          </div>

          <div class="q-px-sm">
            Your selection is:
            <strong>{{ shape }}</strong>
          </div>
        </div>
        <div class="q-pa-md">
          <q-checkbox v-model="val" />
        </div>

        <div class="q-pa-md">
          <q-toggle v-model="value" />

          <q-toggle v-model="value" color="green" />

          <q-toggle v-model="value" color="yellow" />

          <q-toggle v-model="value" color="red" />
        </div>

        <div class="q-pa-md">
          <q-badge color="secondary">Model: {{ standard }} (0 to 50)</q-badge>

          <q-slider v-model="standard" :min="0" :max="50" />
          <q-slider v-model="standard" :min="0" :max="50" color="green" />
        </div>
      </q-form>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-time v-model="time" />

        <q-time v-model="timeWithSeconds" with-seconds />
      </div>
    </div>

    <div class="q-pa-md">
      <div class="q-pb-sm">Model: {{ days }}</div>

      <q-date v-model="days" range multiple />
    </div>

    <div class="q-pa-md">
      <q-table
        class="my-sticky-header-column-table"
        flat
        bordered
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="name" />
    </div>

    <div class="q-px-lg q-py-md">
      <q-timeline color="secondary">
        <q-timeline-entry heading>Timeline heading</q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 21, 1986" icon="delete">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry heading>November, 2017</q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          avatar="https://cdn.quasar.dev/img/avatar2.jpg">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" color="orange" icon="done_all">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>

    <div class="q-pa-md" style="max-width: 350px">
      <q-toggle v-model="expanded" label="Expanded" class="q-mb-md" />

      <q-expansion-item v-model="expanded" icon="perm_identity" label="Account settings" caption="John Doe">
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi
            magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus
            ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </div>
</template>

<style scoped>
.my-sticky-header-column-table {
  height: 310px;
  max-width: 600px;
  td:first-child {
    background-color: #00b4ff;
  }

  tr th {
    position: sticky;
    z-index: 2;
    background: #00b4ff;
  }

  thead tr:last-child th {
    top: 48px;
    z-index: 3;
  }

  thead tr:first-child th {
    top: 0;
    z-index: 1;
  }

  tr:first-child th:first-child {
    z-index: 3;
  }

  td:first-child {
    z-index: 1;
  }

  td:first-child,
  th:first-child {
    position: sticky;
    left: 0;
  }

  tbody {
    scroll-margin-top: 48px;
  }
}
</style>
