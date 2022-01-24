<template>
  <div class="container">
    <!-- 使用<router-link> 创建a标签来定义导航链接 -->
    <router-link to="/"
      ><icon
        name="angle-double-left"
        class="card-shift"
        width="34px"
        height="34px"
        color="grey"
    /></router-link>
    <UserNoteDetails v-bind:note="note" />
    <!-- 第一个note是UserNoteDetails里的，第二个”note“是JSON数据里的 -->
  </div>
</template>

<script>
import UserNoteDetails from "@/components/UserNoteDetails";

export default {
  name: "NoteDetails",
  components: { UserNoteDetails },
  data() {
    return { note: null };
  },
  created() {
    //当我需要创立它的时候，
    this.fetchNote(this.$route.params.id);
  },
  methods: {
    fetchNote(id) {
      fetch("http://5.135.119.239:3090/notes/" + id)
        .then((response) => {
          return response.json(); //定义返回的类型和数据格式
        })
        .then((json) => {
          this.note = json.note;
        });
    },
  },
};
</script>

<style scoped>
.container {
  /* width: 80%;
  height: 80%; */
  margin: 74p;
}

.add-note {
  height: 200px;
  border: none;
  outline: none;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 100px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
</style>

// import UserNoteDetails from "@/components/UserNoteDetails";

// export default {
//   name: "NoteDetails",
//   components: { UserNoteDetails },
//   data() {
//     var notes = JSON.parse(localStorage.getItem("notes"));
//     var id = this.$route.params.id; // router里的index.js的path，因为是在这个vue里，所以要选择这条route
//     //.$route.params.id是指明这条路，不是一个变量，即使有$符号
//     var note = notes.find((note) => note.id == id);
//     return { note: note };
//   },
// };
//
