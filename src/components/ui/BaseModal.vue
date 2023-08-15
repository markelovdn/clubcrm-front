<template>
  <div class="base-modal">
    <div class="base-modal__mask">
      <div class="base-modal__wrapper">
        <div class="base-modal__container">

          <div class="base-modal__container-header">
            <slot name="header">
            </slot>
            <span>
              <font-awesome-icon icon="xmark" />
            </span>
          </div>

          <div class="base-modal__container-body">
            <slot name="body">
              
            </slot>
          </div>

          <div class="base-modal__container-footer">
            <slot name="footer">
              
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-modal {
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__container {
    width: 80%;
    margin: 0px auto;
    padding: 0 0 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }

  &__container-header {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: space-between;
    border-bottom: 1px solid $color_secondary_300;

    & span {
      cursor: pointer;
      padding: 5px;
    }
  }

  &__container-body {
    margin-bottom: 10px;
    flex-grow: 3;
  }
  
  &__container-footer {
    align-self: flex-end;
    flex-grow: 1;
  }
}
</style>