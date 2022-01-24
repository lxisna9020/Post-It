<!--组件就是一个.vue文件，每个.vue文件对应着一个Vue实例（Vue类)-->
<template>
  <div class="card" :style="{ 'background-color': color }">
    <div class="card-header">
      <textarea class="card-header-title" type="text" v-model="editTitle" />
      <!-- 先设定一个输入框，之后再修改样式即可 -->
      <icon
        name="check-circle"
        class="card-save"
        width="34px"
        height="34px"
        color="black"
        v-on:click="updateNote"
      />
    </div>
    <div class="card-content">
      <textarea
        class="card-content-text"
        rows="20"
        type="text"
        v-model="editContent"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserNote",
  props: ["note"], //从父组件传入的数据，类型为对象
  //因为以上都是继承于父类，所以显示的都是父类的信息，暂时无法修改，如果要修改，就要写以下的数据和方法

  data() {
    //定义变量，因为此页已经传来的是从父类继承过来的note,如果想要修改，必须要重新定义一个变量
    return {
      color: "#F9F5EB",
      editTitle: this.note.title,
      editContent: this.note.content[0],
    };
  },
  //然后开始编写方法
  methods: {
    // updateNote() {
    //   //this.note来自parent，不能修改，但是可以修改它里面的title，所以可以等同于其它
    //   //this的意思是本component里的
    //   // this.note.title = this.editTitle;
    //   // this.note.content = this.editContent;

    //   var notes = JSON.parse(localStorage.getItem("notes")) || [];
    //   var updateNote = notes.find((note) => note._id == this.note._id);
    //   //现在JSON里所有的notes找到要编辑的那一个note，接着判定ID是否一致，是不是同一个，然后在不能改栈库数据的前提下，改它的title和content
    //   updateNote.title = this.editTitle;
    //   updateNote.content[0] = this.editContent;
    //   localStorage.setItem("notes", JSON.stringify(notes));
    // },

    updateNote() {
      // this.note来自parent，不能修改，但是可以修改它里面的title，所以可以等同于其它
      // this的意思是本component里的
      var updateNote = this.note;
      updateNote.title = this.editTitle;
      updateNote.content[0] = this.editContent;

      fetch("http://5.135.119.239:3090/notes/" + updateNote._id, {
        method: "PUT",
        body: JSON.stringify(updateNote),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
};
</script>

<style scoped>
.card {
  margin: 100px 100px 100px 350px;
  font-family: "Open Sans", sans-serif;
  opacity: 0.9;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0px;
  box-shadow: 10px 10px 10px grey;
}

.card-save {
  opacity: 0.5;
  padding: 16px;
}

.card-header {
  display: flex;
  width: 100%;
  height: 65px;
  max-height: 65px;
  align-items: center;
  justify-content: space-between;
  flex: 1 0 auto;
  background-color: rgba(0, 0, 0, 0.1);
}

.card-header i {
  color: black;
  padding-right: 25px;
}

.card-header-title {
  opacity: 0.5;
  resize: none;
  padding-left: 25px;
  margin: 0;
  flex-grow: 1;
  color: black;
  font-size: 24px;
  border: none;
  background-color: transparent;
  line-height: 65px;
  font-weight: 400;
  line-height: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.card-content {
  padding: 16px;
  flex: 1 0 auto;
}

.card-content-text {
  opacity: 0.5;
  resize: none;
  width: 100%;
  height: 100%;
  margin: 0;
  color: black;
  letter-spacing: 1px;
  border: none;
  background-color: transparent;
  /* overflow-wrap: break-word; */
}

.card-footer {
  height: 40px;
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
}

.card-footer i {
  color: black;
  position: relative;
  right: 20px;
}

div.row {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
</style>