<template>
<div class="base-upload">
  <div class="base-upload__area">
    
    <input type="file" name="file" id="base-upload__button" @change="readFile($event)" multiple hidden/>
    
    <label for="base-upload__button">
      <span>
        <font-awesome-icon :icon="`fa-${icon_option} fa-${icon}`" />
      </span> 
    </label>
      
    <div class="base-upload__file-list" id="">
      <img v-for="file in filesImgs" style="width: 100px;" :src="file.url" alt="">
    </div>
  
  </div>
</div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  label: {
    type: String,
    default: 'Button',
    required: false
  },
  color: {
   type: String,
   default: 'primary',
   required: false
  },
  disabled: {
    type: Boolean,
    required: false
  },
  rounded: {
    type: Boolean,
    required: false
  },
  outlined: {
    type: Boolean,
    required: false
  },
  icon: {
    type: String,
    required: false,
  },
  icon_option: {
    type: String,
    required: false,
    default: 'solid'
  },
  size: {
    type: String,
    default: 'normal'
  }
})

const files = ref([])
const filesImgs = ref([])

const readFile = (e) => {
  files.value = e.target.files

  for(let i = 0; i < files.value.length; i++) {
    filesImgs.value.push({name: files.value[i].name, url: URL.createObjectURL(files.value[i])}) 
  }
}
</script>


<style scoped lang="scss">
.base-upload {
  display: flex;
  align-items: flex-start;
  justify-content: start;

  label {
    color: white;
  background-color: $color-primary;
  padding: 8px;
  border-radius: 6px;

  & span {
    color: white;
  }
}
}
</style>