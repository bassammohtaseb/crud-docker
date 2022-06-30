<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="treeName">Name</label>
        <input
          type="text"
          class="form-control"
          id="treeName"
          required
          v-model="tree.treeName"
          name="treeName"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tree.description"
          name="description"
        />
      </div>
      <button @click="saveTree" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTree">Add</button>
    </div>
  </div>
</template>
<script>
import TreeDataService from "../services/TreeDataService";
export default {
  name: "add-tree",
  data() {
    return {
      tree: {
        id: null,
        treeName: "",
        description: ""
      },
      submitted: false
    };
  },
  methods: {
    saveTree() {
      var data = {
        treeName: this.tree.treeName,
        description: this.tree.description
      };
      TreeDataService.create(data)
        .then(response => {
          this.tree.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTree() {
      this.submitted = false;
      this.tree = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>