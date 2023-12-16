const blocks = document.querySelectorAll(".blocks")
const resetDuration = 300
blocks.forEach((block) => {
    let timeoutid
    block.addEventListener("mouseover", () => {
        clearTimeout(timeoutid)
        block.classList.add("active")
        timeoutid = setTimeout(() => {
            block.classList.remove("active")
        }, resetDuration)
    })
})