<template>
  <div class="autocomplete">
    <div class="input" @click="toggleVisible" v-text="selectedItem ? selectedItem[filterby] : ''"></div>
    <div class="placeholder" v-if="selectedItem == null" v-text="title"></div>
    <button class="close" @click="selectedItem = null" v-if="selectedItem">x</button>
    <div class="popoverie" v-show="visible">
      <input type="text"
        ref="input"
        v-model="query"
        @keydown.up="up"
        @keydown.down="down"
        @keydown.enter="selectItem"
        placeholder="Start Typing...">
      <div class="options" ref="optionsList">
        <ul>
          <li v-for="(match, index) in matches"
            :key="index"
            :class="{ 'selected': (selected == index)}"
            @click="itemClicked(index)"
            v-text="match[filterby]"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        default: [],
        type: Array
      },
      filterby: {
        type: String
      },
      title: {
        default: 'Select One...',
        type: String
      },
      shouldReset: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        itemHeight: 39,
        selectedItem: null,
        selected: 0,
        query: '',
        visible: false
      };
    },
    methods: {
      toggleVisible() {
        this.visible = !this.visible;
        setTimeout(() => {
          this.$refs.input.focus();
        }, 50);
      },
      itemClicked(index) {
        this.selected = index;
        this.selectItem();
      },
      selectItem() {
        if (!this.matches.length) {
          return;
        }
        this.selectedItem = this.matches[this.selected];
        this.visible = false;
        if (this.shouldReset) {
          this.query = '';
          this.selected = 0;
        }
        this.$emit('selected', JSON.parse(JSON.stringify(this.selectedItem)));
      },
      up() {
        if (this.selected == 0) {
          return;
        }
        this.selected -= 1;
        this.scrollToItem();
      },
      down() {
        if (this.selected >= this.matches.length - 1) {
          return;
        }
        this.selected += 1;
        this.scrollToItem();
      },
      scrollToItem() {
        this.$refs.optionsList.scrollTop = this.selected * this.itemHeight;
      }
    },
    computed: {
      matches() {
        this.$emit('change', this.query);
        if (this.query == '') {
          return [];
        }
        console.log("filterby", this.filterby, this.items);
        return this.items.filter((item) => item[this.filterby].toLowerCase().includes(this.query.toLowerCase()))
      }
    }
  }
</script>