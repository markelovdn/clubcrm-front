<script setup lang="ts">
import { onMounted } from "vue";

import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

onMounted(() => {
  authStore.requestUserInfo();
});
</script>

<template>
  <div class="main-container">
    <h1>Главная страница</h1>
    <div class="main-container__content">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti perferendis nulla veniam harum rerum, laborum
      tempore consectetur excepturi magnam impedit dolorum distinctio consequuntur reiciendis voluptatem quis, ducimus,
      vero non ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eveniet, facilis nobis repellat
      nulla sapiente soluta deserunt. Nobis aliquid molestiae vel, quia, eveniet rem tenetur voluptatum atque distinctio
      corrupti ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempora beatae magnam, ea
      doloremque recusandae dignissimos consequatur dicta amet exercitationem enim nisi soluta repellat ullam? Vero
      laboriosam ullam minus sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet beatae repudiandae
      nihil illum voluptates. Atque repudiandae sed pariatur, dolores veritatis laudantium? Cum adipisci praesentium
      animi provident aliquam, at ut quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sit
      ducimus. Nihil voluptate nesciunt quaerat natus quos cupiditate facere blanditiis. Nemo minima veniam illum rerum
      quam iure nihil possimus incidunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti perferendis
      nulla veniam harum rerum, laborum tempore consectetur excepturi magnam impedit dolorum distinctio consequuntur
      reiciendis voluptatem quis, ducimus, vero non ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Eligendi eveniet, facilis nobis repellat nulla sapiente soluta deserunt. Nobis aliquid molestiae vel, quia,
      eveniet rem tenetur voluptatum atque distinctio corrupti ipsum? Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Veritatis tempora beatae magnam, ea doloremque recusandae dignissimos consequatur dicta amet exercitationem
      enim nisi soluta repellat ullam? Vero laboriosam ullam minus sint. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Amet beatae repudiandae nihil illum voluptates. Atque repudiandae sed pariatur, dolores
      veritatis laudantium? Cum adipisci praesentium animi provident aliquam, at ut quasi. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Illum, sit ducimus. Nihil voluptate nesciunt quaerat natus quos cupiditate facere
      blanditiis. Nemo minima veniam illum rerum quam iure nihil possimus incidunt? Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Deleniti perferendis nulla veniam harum rerum, laborum tempore consectetur excepturi
      magnam impedit dolorum distinctio consequuntur reiciendis voluptatem quis, ducimus, vero non ut. Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Eligendi eveniet, facilis nobis repellat nulla sapiente soluta deserunt.
      Nobis aliquid molestiae vel, quia, eveniet rem tenetur voluptatum atque distinctio corrupti ipsum? Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Veritatis tempora beatae magnam, ea doloremque recusandae dignissimos
      consequatur dicta amet exercitationem enim nisi soluta repellat ullam? Vero laboriosam ullam minus sint. Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Amet beatae repudiandae nihil illum voluptates. Atque
      repudiandae sed pariatur, dolores veritatis laudantium? Cum adipisci praesentium animi provident aliquam, at ut
      quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sit ducimus. Nihil voluptate nesciunt
      quaerat natus quos cupiditate facere blanditiis. Nemo minima veniam illum rerum quam iure nihil possimus incidunt?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti perferendis nulla veniam harum rerum, laborum
      tempore consectetur excepturi magnam impedit dolorum distinctio consequuntur reiciendis voluptatem quis, ducimus,
      vero non ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eveniet, facilis nobis repellat
      nulla sapiente soluta deserunt. Nobis aliquid molestiae vel, quia, eveniet rem tenetur voluptatum atque distinctio
      corrupti ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempora beatae magnam, ea
      doloremque recusandae dignissimos consequatur dicta amet exercitationem enim nisi soluta repellat ullam? Vero
      laboriosam ullam minus sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet beatae repudiandae
      nihil illum voluptates. Atque repudiandae sed pariatur, dolores veritatis laudantium? Cum adipisci praesentium
      animi provident aliquam, at ut quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sit
      ducimus. Nihil voluptate nesciunt quaerat natus quos cupiditate facere blanditiis. Nemo minima veniam illum rerum
      quam iure nihil possimus incidunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti perferendis
      nulla veniam harum rerum, laborum tempore consectetur excepturi magnam impedit dolorum distinctio consequuntur
      reiciendis voluptatem quis, ducimus, vero non ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Eligendi eveniet, facilis nobis repellat nulla sapiente soluta deserunt. Nobis aliquid molestiae vel, quia,
      eveniet rem tenetur voluptatum atque distinctio corrupti ipsum? Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Veritatis tempora beatae magnam, ea doloremque recusandae dignissimos consequatur dicta amet exercitationem
      enim nisi soluta repellat ullam? Vero laboriosam ullam minus sint. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Amet beatae repudiandae nihil illum voluptates. Atque repudiandae sed pariatur, dolores
      veritatis laudantium? Cum adipisci praesentium animi provident aliquam, at ut quasi. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Illum, sit ducimus. Nihil voluptate nesciunt quaerat natus quos cupiditate facere
      blanditiis. Nemo minima veniam illum rerum quam iure nihil possimus incidunt? Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Deleniti perferendis nulla veniam harum rerum, laborum tempore consectetur excepturi
      magnam impedit dolorum distinctio consequuntur reiciendis voluptatem quis, ducimus, vero non ut. Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Eligendi eveniet, facilis nobis repellat nulla sapiente soluta deserunt.
      Nobis aliquid molestiae vel, quia, eveniet rem tenetur voluptatum atque distinctio corrupti ipsum? Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Veritatis tempora beatae magnam, ea doloremque recusandae dignissimos
      consequatur dicta amet exercitationem enim nisi soluta repellat ullam? Vero laboriosam ullam minus sint. Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Amet beatae repudiandae nihil illum voluptates. Atque
      repudiandae sed pariatur, dolores veritatis laudantium? Cum adipisci praesentium animi provident aliquam, at ut
      quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sit ducimus. Nihil voluptate nesciunt
      quaerat natus quos cupiditate facere blanditiis. Nemo minima veniam illum rerum quam iure nihil possimus incidunt?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti perferendis nulla veniam harum rerum, laborum
      tempore consectetur excepturi magnam impedit dolorum distinctio consequuntur reiciendis voluptatem quis, ducimus,
      vero non ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eveniet, facilis nobis repellat
      nulla sapiente soluta deserunt. Nobis aliquid molestiae vel, quia, eveniet rem tenetur voluptatum atque distinctio
      corrupti ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempora beatae magnam, ea
      doloremque recusandae dignissimos consequatur dicta amet exercitationem enim nisi soluta repellat ullam? Vero
      laboriosam ullam minus sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet beatae repudiandae
      nihil illum voluptates. Atque repudiandae sed pariatur, dolores veritatis laudantium? Cum adipisci praesentium
      animi provident aliquam, at ut quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sit
      ducimus. Nihil voluptate nesciunt quaerat natus quos cupiditate facere blanditiis. Nemo minima veniam illum rerum
      quam iure nihil possimus incidunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti perferendis
      nulla veniam harum rerum, laborum tempore consectetur excepturi magnam impedit dolorum distinctio consequuntur
      reiciendis voluptatem quis, ducimus, vero non ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Eligendi eveniet, facilis nobis repellat nulla sapiente soluta deserunt. Nobis aliquid molestiae vel, quia,
      eveniet rem tenetur voluptatum atque distinctio corrupti ipsum? Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Veritatis tempora beatae magnam, ea doloremque recusandae dignissimos consequatur dicta amet exercitationem
      enim nisi soluta repellat ullam? Vero laboriosam ullam minus sint. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Amet beatae repudiandae nihil illum voluptates. Atque repudiandae sed pariatur, dolores
      veritatis laudantium? Cum adipisci praesentium animi provident aliquam, at ut quasi. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Illum, sit ducimus. Nihil voluptate nesciunt quaerat natus quos cupiditate facere
      blanditiis. Nemo minima veniam illum rerum quam iure nihil possimus incidunt? Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Deleniti perferendis nulla veniam harum rerum, laborum tempore consectetur excepturi
      magnam impedit dolorum distinctio consequuntur reiciendis voluptatem quis, ducimus, vero non ut. Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Eligendi eveniet, facilis nobis repellat nulla sapiente soluta deserunt.
      Nobis aliquid molestiae vel, quia, eveniet rem tenetur voluptatum atque distinctio corrupti ipsum? Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Veritatis tempora beatae magnam, ea doloremque recusandae dignissimos
      consequatur dicta amet exercitationem enim nisi soluta repellat ullam? Vero laboriosam ullam minus sint. Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Amet beatae repudiandae nihil illum voluptates. Atque
      repudiandae sed pariatur, dolores veritatis laudantium? Cum adipisci praesentium animi provident aliquam, at ut
      quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sit ducimus. Nihil voluptate nesciunt
      quaerat natus quos cupiditate facere blanditiis. Nemo minima veniam illum rerum quam iure nihil possimus incidunt?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti perferendis nulla veniam harum rerum, laborum
      tempore consectetur excepturi magnam impedit dolorum distinctio consequuntur reiciendis voluptatem quis, ducimus,
      vero non ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eveniet, facilis nobis repellat
      nulla sapiente soluta deserunt. Nobis aliquid molestiae vel, quia, eveniet rem tenetur voluptatum atque distinctio
      corrupti ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempora beatae magnam, ea
      doloremque recusandae dignissimos consequatur dicta amet exercitationem enim nisi soluta repellat ullam? Vero
      laboriosam ullam minus sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet beatae repudiandae
      nihil illum voluptates. Atque repudiandae sed pariatur, dolores veritatis laudantium? Cum adipisci praesentium
      animi provident aliquam, at ut quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sit
      ducimus. Nihil voluptate nesciunt quaerat natus quos cupiditate facere blanditiis. Nemo minima veniam illum rerum
      quam iure nihil possimus incidunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti perferendis
      nulla veniam harum rerum, laborum tempore consectetur excepturi magnam impedit dolorum distinctio consequuntur
      reiciendis voluptatem quis, ducimus, vero non ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Eligendi eveniet, facilis nobis repellat nulla sapiente soluta deserunt. Nobis aliquid molestiae vel, quia,
      eveniet rem tenetur voluptatum atque distinctio corrupti ipsum? Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Veritatis tempora beatae magnam, ea doloremque recusandae dignissimos consequatur dicta amet exercitationem
      enim nisi soluta repellat ullam? Vero laboriosam ullam minus sint. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Amet beatae repudiandae nihil illum voluptates. Atque repudiandae sed pariatur, dolores
      veritatis laudantium? Cum adipisci praesentium animi provident aliquam, at ut quasi. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Illum, sit ducimus. Nihil voluptate nesciunt quaerat natus quos cupiditate facere
      blanditiis. Nemo minima veniam illum rerum quam iure nihil possimus incidunt? Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Deleniti perferendis nulla veniam harum rerum, laborum tempore consectetur excepturi
      magnam impedit dolorum distinctio consequuntur reiciendis voluptatem quis, ducimus, vero non ut. Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Eligendi eveniet, facilis nobis repellat nulla sapiente soluta deserunt.
      Nobis aliquid molestiae vel, quia, eveniet rem tenetur voluptatum atque distinctio corrupti ipsum? Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Veritatis tempora beatae magnam, ea doloremque recusandae dignissimos
      consequatur dicta amet exercitationem enim nisi soluta repellat ullam? Vero laboriosam ullam minus sint. Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Amet beatae repudiandae nihil illum voluptates. Atque
      repudiandae sed pariatur, dolores veritatis laudantium? Cum adipisci praesentium animi provident aliquam, at ut
      quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sit ducimus. Nihil voluptate nesciunt
      quaerat natus quos cupiditate facere blanditiis. Nemo minima veniam illum rerum quam iure nihil possimus incidunt?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti perferendis nulla veniam harum rerum, laborum
      tempore consectetur excepturi magnam impedit dolorum distinctio consequuntur reiciendis voluptatem quis, ducimus,
      vero non ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eveniet, facilis nobis repellat
      nulla sapiente soluta deserunt. Nobis aliquid molestiae vel, quia, eveniet rem tenetur voluptatum atque distinctio
      corrupti ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempora beatae magnam, ea
      doloremque recusandae dignissimos consequatur dicta amet exercitationem enim nisi soluta repellat ullam? Vero
      laboriosam ullam minus sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet beatae repudiandae
      nihil illum voluptates. Atque repudiandae sed pariatur, dolores veritatis laudantium? Cum adipisci praesentium
      animi provident aliquam, at ut quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sit
      ducimus. Nihil voluptate nesciunt quaerat natus quos cupiditate facere blanditiis. Nemo minima veniam illum rerum
      quam iure nihil possimus incidunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti perferendis
      nulla veniam harum rerum, laborum tempore consectetur excepturi magnam impedit dolorum distinctio consequuntur
      reiciendis voluptatem quis, ducimus, vero non ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Eligendi eveniet, facilis nobis repellat nulla sapiente soluta deserunt. Nobis aliquid molestiae vel, quia,
      eveniet rem tenetur voluptatum atque distinctio corrupti ipsum? Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Veritatis tempora beatae magnam, ea doloremque recusandae dignissimos consequatur dicta amet exercitationem
      enim nisi soluta repellat ullam? Vero laboriosam ullam minus sint. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Amet beatae repudiandae nihil illum voluptates. Atque repudiandae sed pariatur, dolores
      veritatis laudantium? Cum adipisci praesentium animi provident aliquam, at ut quasi. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Illum, sit ducimus. Nihil voluptate nesciunt quaerat natus quos cupiditate facere
      blanditiis. Nemo minima veniam illum rerum quam iure nihil possimus incidunt? Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Deleniti perferendis nulla veniam harum rerum, laborum tempore consectetur excepturi
      magnam impedit dolorum distinctio consequuntur reiciendis voluptatem quis, ducimus, vero non ut. Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Eligendi eveniet, facilis nobis repellat nulla sapiente soluta deserunt.
      Nobis aliquid molestiae vel, quia, eveniet rem tenetur voluptatum atque distinctio corrupti ipsum? Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Veritatis tempora beatae magnam, ea doloremque recusandae dignissimos
      consequatur dicta amet exercitationem enim nisi soluta repellat ullam? Vero laboriosam ullam minus sint. Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Amet beatae repudiandae nihil illum voluptates. Atque
      repudiandae sed pariatur, dolores veritatis laudantium? Cum adipisci praesentium animi provident aliquam, at ut
      quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sit ducimus. Nihil voluptate nesciunt
      quaerat natus quos cupiditate facere blanditiis. Nemo minima veniam illum rerum quam iure nihil possimus incidunt?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti perferendis nulla veniam harum rerum, laborum
      tempore consectetur excepturi magnam impedit dolorum distinctio consequuntur reiciendis voluptatem quis, ducimus,
      vero non ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eveniet, facilis nobis repellat
      nulla sapiente soluta deserunt. Nobis aliquid molestiae vel, quia, eveniet rem tenetur voluptatum atque distinctio
      corrupti ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempora beatae magnam, ea
      doloremque recusandae dignissimos consequatur dicta amet exercitationem enim nisi soluta repellat ullam? Vero
      laboriosam ullam minus sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet beatae repudiandae
      nihil illum voluptates. Atque repudiandae sed pariatur, dolores veritatis laudantium? Cum adipisci praesentium
      animi provident aliquam, at ut quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sit
      ducimus. Nihil voluptate nesciunt quaerat natus quos cupiditate facere blanditiis. Nemo minima veniam illum rerum
      quam iure nihil possimus incidunt?
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  background-color: var(--q-background-secondary);
}
</style>
