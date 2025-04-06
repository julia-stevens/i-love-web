import express from "express"
import { Liquid } from "liquidjs"
import { readdir, readFile } from "node:fs/promises"

const files = await readdir("content") // tot nu toe fetch naar Directus, nu doen we dit lokaal

console.log(files)

const app = express()
app.use(express.static("public"))

const engine = new Liquid()
app.engine("liquid", engine.express())

app.set("views","./views")

app.use(express.urlencoded({ extended: true }))


app.get("/", async function (request, response) {
    response.render("home.liquid", {
        files: files
    })
}) 

app.get("/:slug", async function (request, response) {
    console.log(request.params)

    const fileContents = await readFile("content/" + request.params.slug + ".md", { encoding: "utf8" })

    response.render("artikel.liquid", {
        fileContents: fileContents
    })
})

app.set('port', process.env.PORT || 8000)

app.listen(app.get("port"), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
})