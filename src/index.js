fetch("http://localhost:3000/ramens")
.then(res =>res.json())
.then(data => data.forEach((ramen) => {renderRamen(ramen)

}))

function renderRamen(ramen) {
const ramenMenu = document.querySelector("#ramen-menu")
const image = document.createElement("img")
image.src = ramen.image
ramenMenu.append(image)

image.addEventListener("click", () => {

    const ramenImage = document.querySelector(".detail-image")
    ramenImage.src = ramen.image

    const ramenName = document.querySelector(".name")
    ramenName.textContent = ramen.name

    const ramenRestaurant = document.querySelector(".restaurant")
    ramenRestaurant.textContent = ramen.restaurant

    const ramenRating = document.querySelector("#rating-display")
    ramenRating.textContent = ramen.rating

    const ramenComment = document.querySelector("#comment-display")
    ramenComment.textContent = ramen.comment
}
)

}

function newRamenForm() {
const form = document.querySelector("#new-ramen")
form.addEventListener("submit",() => {
    e.preventDefault()
    const newName = e.target["name"].value
    const newRestaurant = e.target["restaurant"].value
    const newImage = e.target["image"].value
    const newRating = e.target["rating"].value
    const newComment = e.target["new-comment"].value

        const newRamenObj  = {
        name: newName,
        restaurant: newRestaurant,
        image: newImage,
        rating: newRating,
        comment: newComment

        }

    renderRamen(newRamenObj)

    })

}
newRamenForm()