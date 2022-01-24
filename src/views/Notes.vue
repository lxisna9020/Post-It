
<!--在视图Vue这一页只做了for循环以及note的添加.删除功能，以及整体的grid布局，style部分主要是按钮的样式-->

<template>
  <div class="container">
    <!-- notes: JSON.parse(localStorage.getItem("notes")), -->
    <!-- 此页是父页，父页里引用子组件，把UserNote直接写进来 -->
    <UserNote
      v-for="note of notes"
      :key="note._id"
      :id="note._id"
      :title="note.title"
      :content="note.content[0]"
      :color="note.color"
      :onRemoveNote="removeNote"
    />
    <!-- 左边的都是UserNote里的，需要绑定在右边本页（Notes.vue)里再进行操作，例如：onRemoveNote是UserNote里的，
    先把它绑定为removeNote功能，再在本页细化它的功能 -->
    <!-- v-for循环的时候，key属性只能使用number获取string-->
    <!-- key在使用的时候，必须使用v-bind属性绑定的形式，指定key的值-->
    <!-- 在组件中，使用v-for,必须在使用v-for的同时，指定唯一的字符串/数字类型:key值 -->
    <button class="add-note" v-on:click="newNote" type="button">+</button>
  </div>
</template>

<script>
import UserNote from "@/components/UserNote";

export default {
  name: "Notes",
  components: { UserNote },

  // 在父页里定义一个data属性，然后再在子页定义一个propos接收这个属性
  data() {
    return {
      notes: [],
    };
  },
  created() {
    this.fetchNotes();
  },

  methods: {
    fetchNotes() {
      //去连接
      fetch("http://5.135.119.239:3090/notes")
        .then((response) => {
          return response.json(); //定义返回的类型和数据格式
        })
        .then((json) => {
          this.notes = json.notes; // 返回的数据
        });
    },

    newNote() {
      var note = {
        title: "Sticky Note",
        content: [],
      };

      fetch("http://5.135.119.239:3090/notes", {
        method: "POST",
        body: JSON.stringify(note), //将JavaScript值转换为JSON字符串。
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          //定义返回的类型和数据格式
          return response.json();
        })
        .then((json) => {
          var id = json.note_id;
          if (id != undefined) {
            note._id = id;
            this.notes.push(note);
          }
        });
    },
    removeNote(id) {
      fetch("http://5.135.119.239:3090/notes/" + id, {
        method: "DELETE",
      }).then((response) => {
        if (response.status == 200) {
          //如果状态呈现是200，就说明删除成功
          this.notes = this.notes.filter((note) => note._id != id);
          // filter是帅选出来需要留下来的，这里删选的条件是(note) => note._id != id
          //note._id是我们选中的那个note的id, 后面单独的id是control里显示的id,也就是JSON文档里的ID
          //所以筛选留下来的条件是我们选中的note的id与文档里的id不符，就留下来，一致就删除
        }
      });
    },
  },
};
</script>

<style scoped>
/*base 大家共用的样式*/
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  /* 每一个小sticky宽度200px,如果横排放不下，会自动跳转到下一行 */
  padding: 24px;
  /*Padding（填充）属性定义元素边框与元素内容之间的空间*/
  gap: 24px;
  /*每一个便利贴之间的间隔是24px */
}

/* !!!这个grid公式非常重要 */
.grid > [style^="--aspect-ratio"]::before {
  content: "";
  display: inline-block;
  width: 1px;
  height: 0;
}

.add-note {
  aspect-ratio: 1 / 1;
  border: none;
  outline: none;
  background: rgba(0, 0, 0, 0.2);
  font-size: 100px;
  color: rgba(0, 0, 0, 0.5); /* 增加卡片的透明色  */
  cursor: pointer;
  box-shadow: 10px 10px 10px grey;
}
</style>



// import UserNote from "@/components/UserNote";

// export default {
//   name: "Notes",
//   components: { UserNote },

//   data() {
//     return {
//       // notes: JSON.parse(localStorage.getItem("notes")) || [],
//     };
//   },

//   methods: {
//     newNote() {
//       var note = {
//         id: Date.now(),
//         title: "",
//         content: "",
//         color: "#" + Math.random().toString(16).substr(-6), //五颜六色
//       };
//       //_this只是一个变量名，this代表父函数，如果在子函数还用this，this的指向就变成子函数了，_this就是用来存储指向的。
//       var notes = JSON.parse(localStorage.getItem("notes")) || [];
//       notes.push(note);

//       this.notes = notes;
//       localStorage.setItem("notes", JSON.stringify(this.notes));
//     },

// }
//     removeNote(id) {
//       this.notes = this.notes.filter((note) => note.id != id);
//       localStorage.setItem("notes", JSON.stringify(this.notes));
//     },

//     API’s endpoint is http://5.135.119.239:3090/ and routes’ details are provided in another file.
//     端点是通信通道的一端。当API与另一个系统交互时，此通信的接触点被视为端点。对于API,端点可以包含服务器或服务的URL。每个端点都是API可以访问执行其功能所需的资源的位置。
//     API使用“请求”和“响应”工作。当API从Web应用程序或Web服务器请求信息时，它会收到响应。API发送请求的位置和资源所在的位置称为端点。
//     getNotes() {
//       fetch("http://5.135.119.239:3090/notes")
//         .then((response) => response.json()) //定义返回的类型和数据格式
//         .then((data) => console.log(data)); // 返回的数据
//     },
//   },
// };
