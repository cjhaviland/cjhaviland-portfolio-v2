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
          <div id="tab-container">
            <a v-for="(tab, key) in tabs" :key="key" :id="`${key}-tab`" href="#" @click="setActive(key)">{{tab}}</a>
          </div>
          <template v-for="(content, key) in example.contents">
            <div :key="key" v-if="active === key && key === 'result'" v-html="content"></div>
            <div :key="key" v-else-if="active === key">{{content}}</div>
          </template> 
          </div>
          <div class="modal-footer">
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
      active: "objective",
      tabs: {
        objective: "Objective",
        process: "Process",
        result: "Result"
      }
    };
  },
  methods: {
    close: function() {
      // Hide the modal on close using parents event
      this.$emit("close");

      // Reset the modal, delay it a bit for the close transition
      this.setActive("objective");
    },
    setActive: function(key) {
      this.active = key;
      document.getElementsByClassName("active")[0].classList.remove("active");
      document.getElementById(`${key}-tab`).classList.add("active");
    },
    initActive: function() {
      let activeTab = document.getElementById(`${this.active}-tab`);
      activeTab.classList.add("active");
    }
  },
  mounted: function() {
    document.addEventListener("keydown", e => {
      if (this.show && e.keyCode === 27) {
        this.close();
      }
    });

    this.initActive();
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
  display: grid;
  grid-template-rows: max-content auto max-content;
  min-height: 50vh;
  width: 75vw;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: var(--portfolio-background);
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

#tab-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(90px, 15%));
  padding: 20px 0px;
  text-align: center;
  justify-content: center;
}

#tab-container a {
  text-decoration: none;
  color: var(--link-text);
}

#tab-container a.active {
  width: 90%;
  border-bottom: 1px solid var(--link-text);
}

.modal-footer {
  margin-top: 5%;
  display: grid;
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
