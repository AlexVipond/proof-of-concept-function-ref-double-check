<template>
  <button @click="inquire(() => $emit('inquired'))">
    <slot>Delete</slot>
    <Dialog v-if="status === 'isInquired'">
      Are you sure?<br />
      <button @click="approve(() => $emit('delete'))">Yes, delete</button>
      <button @click="reset(() => $emit('canceled'))">No, cancel</button>
    </Dialog>
  </button>
</template>

<script>
import Dialog from './Dialog.vue';
import { useDoubleCheck } from '../useDoubleCheck'

export default {
  components: {
    Dialog,
  },
  setup () {
    return {
      ...useDoubleCheck()
    }
  }
};
</script>
