<template>
  <div v-if="currentTree" class="edit-form">
    <h4>Tree</h4>
    <form>
      <div class="form-group">
        <label for="treeName">Tree Name</label>
        <input type="text" class="form-control" id="treeName"
          v-model="currentTree.treeName"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentTree.description"
        />
      </div>
      
    </form>
    

    <button @click="deleteTree">
      Delete
    </button>

    <button type="submit" @click="updateTree" style="margin: 20px;">
      Update
    </button>

    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Tree...</p>
  </div>
</template>
<script>
import TreeDataService from "../services/TreeDataService";
export default {
  name: "tree-com",
  data() {
    return {
      currentTree: null,
      message: ''
    };
  },
  methods: {
    getTree(id) {
      TreeDataService.get(id)
        .then(response => {
          this.currentTree = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateTree() {
      TreeDataService.update(this.currentTree.id, this.currentTree)
        .then(response => {
          console.log(response.data);
          this.message = 'The tree was updated successfully!';
          setTimeout(()=> this.$router.push({ name: "treelist" }), 1000);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteTree() {
      TreeDataService.delete(this.currentTree.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "treelist" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getTree(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>