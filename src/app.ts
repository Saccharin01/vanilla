const root = document.getElementById("root") as HTMLElement

const hOne = document.createElement("h1")
root.appendChild(hOne)
hOne.setAttribute("id", "hOne")

hOne.innerHTML = "hello, world!"
