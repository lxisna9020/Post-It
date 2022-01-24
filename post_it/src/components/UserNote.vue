<!--组件就是一个.vue文件，每个.vue文件对应着一个Vue实例（Vue类)-->
<template>
  <div class="card" :style="{ 'background-color': color }">
    <div class="card-header">
      <h1 class="card-header-title">{{ title }}</h1>
      <a :href="/note/ + id">
        <icon
          class="card-edit"
          name="edit"
          width="24px"
          height="24px"
          color="black"
        />
        <!-- 这里的name是下载按钮它的名字 -->
      </a>
    </div>
    <div class="card-content">
      <p class="card-content-text">{{ content }}</p>
    </div>
    <div class="card-footer">
      <icon
        class="card-delete"
        name="trash-alt"
        width="24px"
        height="24px"
        color="black"
        v-on:click="onRemoveNote(id)"
      />
    </div>
  </div>
</template>

<script>
// export(导出)，导出一个Vue的实例选项{},被导出的对象可以通过import来导入，从来引用被导入的对象的属性和函数。
export default {
  name: "UserNote",
  //props接收的是Note.vue里绑定的，所以上面{{title}},{{content}}是接收了父件传来的值
  props: ["id", "title", "content", "onRemoveNote"],
  data() {
    return {
      color: "#F9F5EB", // 每张卡片的颜色，data里面先设置了颜色，然后再传到上面的background颜色里
    };
  },

  methods: {},
};
</script>

<style scoped>
.card {
  font-family: "Open Sans", sans-serif;
  display: flex;
  opacity: 0.9; /* 每张卡片的透明度opacity */
  flex-direction: column;
  box-shadow: 10px 10px 10px grey;
}

.card-header {
  display: flex;
  height: 65px;
  max-height: 65px;
  align-items: center;
  justify-content: space-between;
  flex: 1 0 auto;
  background-color: rgba(0, 0, 0, 0.1);
}

.card-edit {
  opacity: 0.5;
  padding: 16px;
}

.card-delete {
  opacity: 0.5;
  padding: 8px;
}

h1.card-header-title {
  opacity: 0.5;
  padding-left: 25px;
  margin: 0;
  color: black;
  font-size: 24px;
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
  padding: 25px;
  flex: 1 0 auto;
}

.card-content-text {
  opacity: 0.5;
  margin: 0;
  color: black;
  font-size: 14px;
  letter-spacing: 1px;
  overflow: hidden;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
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