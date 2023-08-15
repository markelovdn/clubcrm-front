<template>
<div class="base-upload">
  <div class="base-upload__area">

    <input type="file" name="file" id="base-upload__button" @change="readFile($event)" :multiple="multiple" hidden/>
    
    <label for="base-upload__button">
      <font-awesome-icon :icon="`fa-${icon_option} fa-${icon}`" />
      <span> {{ label }} </span>
    </label>
      
    <div
      class="base-upload__file-list" id="">
      <div class="base-upload__file-list__img-box" v-for="(file, key) in filesImgs">
        
        <img :class="{portrait: portrait, landscape: landscape}" :src="file.url">

        <span @click="deleteFile(key)">
          <font-awesome-icon v-if="file" icon="trash-can" />
        </span>

      </div>
    </div>
  
  </div>
</div>
</template>

<script setup>
import { ref } from "vue"

const emit = defineEmits(['uploadedFiles'])
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
  multiple: {
    type: Boolean,
    required: false,
    default: false
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
  },
  portrait: {
      type: Boolean,  
    },
  landscape: {
    type: Boolean,  
  },  
})

const files = ref([])
const filesImgs = ref([])

const uploadFile = (file) => {
  console.log(file)
  emit('uploadedFiles', file)
};

const readFile = (e) => {
  files.value = e.target.files

  for(let i = 0; i < files.value.length; i++) {
    filesImgs.value.push({
      name: files.value[i].name,
      url: URL.createObjectURL(files.value[i])
    })
  }

  uploadFile (e.target.files);
  console.log(files.value)
}

const deleteFile = (file) => {
  delete filesImgs.value.splice(file, 1)
}
</script>


<style scoped lang="scss">
.base-upload {
  display: flex;
  align-items: flex-start;
  justify-content: start;
  margin-bottom: 8px;

  label {
    color: white;
    background-color: $color-primary;
    padding: 8px;
    border-radius: 6px;

  & span {
    padding-left: 4px;
    color: white;
  }
}

&__file-list {
  margin-top: 20px;
    display: block;

    &__img-box {
      display: inline;
      & img {
        background-color: transparent;
        box-shadow: 1px 1px 1px gray;
        border-radius: 8px;
        border: 1px solid $color-primary;
        margin-bottom: 3px;

        &.portrait {
          width: 113px;
          height: 151px;
        }
        &.landscape {
          width: 151px;
          height: 113px;
        }
      }
    & span {
      position: relative;
      color: $color_danger_400;
      top: -10px;
      left: -18px;
      cursor: pointer;
      }
    }
  }
}
</style>