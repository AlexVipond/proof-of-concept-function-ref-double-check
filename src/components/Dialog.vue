<template>
  <Portal to="popup">
    <div class="Dialog">
      <div class="Dialog__content">
        <slot />
      </div>
    </div>
  </Portal>
</template>

<style>
.Dialog {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
}

.Dialog__content {
  border-radius: 0.5em;
  width: 30em;
  background-color: #fff;
  padding: 1.5em;
}
</style>