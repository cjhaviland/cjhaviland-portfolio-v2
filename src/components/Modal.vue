<!-- template for the modal component -->
<template>
  <transition name="modal">
    <div class="modal-mask" @click="close" v-show="show">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <h3>{{example.title}}</h3>
            <div class="modal-header-pills">
              <span class="pill" v-for="pill in example.pills" :key="pill">{{pill}}</span>
            </div>
          </div>
          <div class="modal-body">
            <v-tabs v-model="active" centered>
              <v-tab v-for="name in tabs" :key="name">{{name}}</v-tab>
              <v-tab-item v-for="(item, key) in example.contents" :key="key">
                <div v-if="key === 'result'" v-html="item"></div>
                <div v-else>{{item}}</div>
              </v-tab-item>
            </v-tabs>
          </div>
          <div class="modal-footer">
            <button @click="next">Next</button>
            <button @click="close">Close</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    show: false,
    example: {}
  },
  data() {
    return {
      active: null,
      tabs: ["Objective", "Process", "Result"]
    };
  },
  methods: {
    close: function() {
      this.$emit("close");
    },
    next() {
      const active = parseInt(this.active);
      this.active = active < 2 ? active + 1 : 0;
    }
  },
  mounted: function() {
    document.addEventListener("keydown", e => {
      if (this.show && e.keyCode === 27) {
        this.close();
      }
    });
  }
};
</script>


<style>
.modal-mask {
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

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  min-height: 50vh;
  width: 75vw;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  overflow: auto;
}

.modal-header {
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: minmax(20%, max-content) auto;
}

.modal-header-pills {
  text-align: right;
}

.modal-header-pills .pill {
  border: 1px solid black;
  border-radius: 11%;
  padding: 0.1em 0.3em;
  margin: 0 0.2em;
  font-size: 0.6em;
  font-weight: bold;
  opacity: 0.5;
}

.v-tabs__items {
  margin-top: 5%;
}

.modal-footer {
  margin-top: 5%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
}

.modal-footer button {
  border: 3px solid black;
  width: 40%;
}

.modal-footer button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.modal-footer button:focus {
  outline: 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
