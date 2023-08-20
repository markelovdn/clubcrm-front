<template>
  <article class="base-accordion">
    <header class="base-accordion__title" @click="isOpen = !isOpen">
        <span>{{props.title}}</span>
        <i :class="{arrow_down: isOpen, disabled: disabled}"></i>
    </header>
    <div
      :class="['base-accordion__content', { hidden_content: !isOpen }]">
      <p :class="{ hidden_content: !isOpen }">
        {{props.content}}
      </p>
      <slot></slot>
    </div>
</article>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: false,
    }
})

const isOpen = ref(false)
</script>

<style scoped lang="scss">
.base-accordion {
    border: 1px solid $color_secondary_400;
    margin-bottom: 1px;
    border-radius: 8px;

    &__title {
      align-items: flex-start;
      display: flex;
      justify-content: space-between;

      & span {
        padding: 9px;
        font-size: 16px;
        cursor: pointer;
    }
        & i {
        border: solid black;
        border-width: 2px 2px 0px 0;
        margin: 14px;
        padding: 3px;
        transform: rotate(-45deg);
        transition: .2s;

        &.arrow_down {
        transform: rotate(135deg);
        transition: .2s;
        }
      }
    }

    &__content {
        padding: 5px;
        height: 100%;
        transition: 0.2s;
        opacity:1;
        word-wrap: break-word;
    }
}

.hidden_content {
    padding: 0;
    transition: 0.2s;
    height:  0px;
    opacity: 0;
    position: relative;
    left: -500px
}
</style>