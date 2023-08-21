<script lang="ts">
// Path: src\layouts\CabinetLayout.vue

import { defineComponent } from "vue";

export default defineComponent({
    name: "CabinetLayout",
});
</script>

<template>
    <div>
        
        <div color="grey-darken-2" permanent>CabinetLayoutHeader</div>
        <div>
            <slot></slot>
        </div>
        <div color="grey-lighten-2">CabinetLayoutFooter</div>
    </div>
</template>