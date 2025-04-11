import express from "express"
import { Liquid } from "liquidjs"
import { readdir, readFile } from "node:fs/promises"
import { marked } from "marked"
import matter from "gray-matter"

const files = await readdir("content") // tot nu toe fetch naar Directus, nu doen we dit lokaal

const app = express()
app.use(express.static("public"))

const engine = new Liquid()
app.engine("liquid", engine.express())

app.set("views","./views")

app.use(express.urlencoded({ extended: true }))

app.get("/", async function (request, response) {
    response.render("home.liquid")
})

app.get("/learning-journal", async function (request, response) {
    response.render("learning-journal.liquid", {
        files: files,
        sprintFilter: sprintFilter
    })
}) 

app.get("/learning-journal/:slug", async function (request, response) {
    // console.log(request.params)

    const fileContents = await readFile("content/" + request.params.slug + ".md", { encoding: "utf8" })
    const markedUp = marked.parse(fileContents)
    const article = matter(fileContents)

    response.render("artikel.liquid", {
        fileContents: fileContents,
        markedUp: markedUp,
        title: article.data.title,
        date: article.data.date,
        author: article.data.author,
        sprint: article.data.sprint
    })
})

app.set('port', process.env.PORT || 8000)

app.listen(app.get("port"), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
})