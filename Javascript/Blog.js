var blog_title = document.getElementsByClassName("blog_title")
var blog_clicked = document.getElementsByClassName("btn_click")
console.log(blog_clicked.length)


for (var i = 0; i <= blog_clicked.length; i++) {
    var topic_title = blog_clicked[i]

    topic_title.addEventListener("click", (e) => {
        let topic_title_clicked = e.target
        let blog_title_searched = topic_title_clicked.parentElement.children[0].children[0].innerHTML
        console.log(blog_title_searched)

        localStorage.setItem("Blog Title", blog_title_searched)

    })
}