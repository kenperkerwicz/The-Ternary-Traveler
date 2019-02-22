import poiApiManager from "./APIManager"
import HTMLRep from "./ForEachCreatePoi"

const deletePoi = () => {
  document.querySelector("#fullList2").addEventListener("click", (event) => {
    if (event.target.id.startsWith("poiDeleteBTN--")) {
      let result = window.confirm("Are You sure?")
      if (result == true) {
        const interestId = event.target.id.split("--")[1]
        // console.log(placeId)

        poiApiManager.deletePoi(interestId).then(HTMLRep)
      } else {
        console.log(interestId.value)
        // document.querySelector("#fullList2").innerHTML = ""

        HTMLRep()
      }
    }
  })
}

export default deletePoi