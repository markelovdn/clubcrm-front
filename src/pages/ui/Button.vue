<template>
  <h1 class="heading-1">BaseButton</h1>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <BaseButton label="Primary" color="primary" disabled/>
    <BaseButton label="Secondary" color="secondary" disabled/>
  </div>
  <h2 class="heading-2">Colors</h2>
  <div class="line">
    <BaseButton label="Primary" color="primary" />
    <BaseButton label="Secondary" color="secondary" />
    <BaseButton label="Success" color="success" />
    <BaseButton label="Info" color="info" />
    <BaseButton label="Warning" color="warning" />
    <BaseButton label="Danger" color="danger" />
  </div>
  <h2 class="heading-2">Rounded</h2>
  <div class="line">
    <BaseButton label="Primary" color="primary" rounded/>
    <BaseButton label="Secondary" color="secondary" rounded/>
    <BaseButton label="Success" color="success" rounded/>
    <BaseButton label="Info" color="info" rounded/>
    <BaseButton label="Warning" color="warning" rounded/>
    <BaseButton label="Danger" color="danger" rounded/>
  </div>
  <h2 class="heading-2">Outlined</h2>
  <div class="line">
    <BaseButton label="Primary" icon="award" color="primary" outlined/>
    <BaseButton label="Secondary" color="secondary" outlined/>
    <BaseButton label="Success" color="success" outlined/>
    <BaseButton label="Info" color="info" outlined/>
    <BaseButton label="Warning" color="warning" outlined/>
    <BaseButton label="Danger" color="danger" outlined/>
  </div>
  <h2 class="heading-2">Icon</h2>
  <div class="line">
    <BaseButton color="primary" icon="award" outlined rounded label="Загрузить фото"/>
    <BaseButton color="secondary" icon="calendar"/>
    <BaseButton color="success" icon="paperclip" outlined/>
    <BaseButton color="info" icon="clock"/>
    <BaseButton color="warning" icon="dumbbell" outlined/>
    <BaseButton color="danger" icon="pen-to-square"/>
    <BaseButton color="primary" icon="medal" />
    <BaseButton color="primary" icon="yin-yang" />
    <BaseButton color="primary" icon="users" label=""/>
    <BaseButton color="primary" icon="user" />
    <BaseButton color="primary" icon="file-pdf" />
    <BaseButton color="primary" icon="trophy" />
  </div>
  <h2 class="heading-2">Size</h2>
  <div class="line">
    <BaseButton label="Normal" color="primary" />
    <BaseButton label="Large" color="primary" size="large"/>
  </div>
  <h2 class="heading-2">Event</h2>
  <div class="line">
    <BaseButton label="@click" color="danger" @click="eventForButton"/>
  </div>
</template>

<script setup>
import BaseButton from '../components/ui/BaseButton.vue'

const eventForButton = () => {
  alert ('You click for Basebutton')
}
</script>