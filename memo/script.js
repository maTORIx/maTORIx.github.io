document.addEventListener("DOMContentLoaded", function() {
  var memos = JSON.parse(localStorage.getItem("memos"))
  if (memos === null) {
    memos = []
  }
  var app = new Vue({
    el: "#app",
    data: {
      memos: memos,
      form: {"title": "", "body": ""}
    },
    methods: {
      create: function(event) {
        event.preventDefault();
        if(this.form.title == "" || this.form.body == "") {
          return
        }
        this.memos.push({"title": this.form.title, "body": this.form.body, "edit": false})
        this.form = {"title": "", "body": ""}
      },
      destroy: function(memo) {
        this.memos.splice(this.memos.indexOf(memo), 1);
      }
    },
    watch: {
      memos: {
        handler: function(newMemos, oldMemos){
          console.log("saved")
          localStorage.setItem("memos", JSON.stringify(newMemos))
        }
      },
      deep: true
    }
  })
})
