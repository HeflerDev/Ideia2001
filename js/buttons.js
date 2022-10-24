const resetStyles = () =>  Array.from(document.getElementsByClassName("btn-block"))
  .map(item => item.classList.remove("active"))

Array.from(document.getElementsByClassName("btn-block")).map(e => {
  e.addEventListener("click", () => {
    resetStyles()
    e.classList.add("active")
  })
})
