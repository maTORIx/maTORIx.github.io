document.addEventListener("DOMContentLoaded", function() {
  var app = new Vue({
    el: "#app",
    data: {
      memos: [{"title": "test", "body": "testtesttest", "edit": false}],
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
        return
      }
    }
  })
})
