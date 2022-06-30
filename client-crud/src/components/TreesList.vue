<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Trees List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tree, index) in trees"
          :key="index"
          @click="setActiveTree(tree, index)">
          {{ tree.treeName }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentTree">
        <h4>Tree</h4>
        <div>
          <label><strong>Tree Name:</strong></label> {{ currentTree.treeName }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentTree.description }}
        </div>
        <a :href="'/trees/' + currentTree.id">
          Edit/Delete
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tree...</p>
      </div>
    </div>
  </div>
</template>
<script>
import TreeDataService from "../services/TreeDataService";
export default {
  name: "trees-list",
  data() {
    return {
      trees: [],
      currentTree: null,
      currentIndex: -1,
      treeName: ""
    };
  },
  methods: {
    retrieveTrees() {
      TreeDataService.getAll()
        .then(response => {
          this.trees = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveTrees();
      this.currentTree = null;
      this.currentIndex = -1;
    },
    setActiveTree(tree, index) {
      this.currentTree = tree;
      this.currentIndex = index;
    }
  },
  mounted() {
    this.retrieveTrees();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>