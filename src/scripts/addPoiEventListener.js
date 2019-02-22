import poiApiManager from "./APIManager"
import PoiToDom from "./PoiToDom"
import HTMLRep from "./ForEachCreatePoi"


const NewPoiEventListener = () => {
  document.querySelector("#SavePoi").addEventListener("click", event => {
    //grab values of input fields on click
    const NameofPOI = document.querySelector("#inputNameofPoi").value
    const DescriptionofPoi = document.querySelector("#DescriptionofPoi").value
    //grab hidden User ID on click

     const interestId = sessionStorage.getItem("interestId")

    console.log(NameofPOI)
    console.log(DescriptionofPoi)
    console.log(interestId)


   //put data gathered into one object

   const poiObject = {
     placeId: parseInt(interestId),
     name: NameofPOI,
     description: DescriptionofPoi
   }
  // Post to API database
  const buttonText = document.querySelector("#SavePoi").textContent

  if (buttonText === "Save") {
    poiApiManager.postPoi(poiObject).then(() => poiApiManager.getPoi(interestId)).then(() => {console.log("got the data")}).then(() => HTMLRep())


  }


  })}

export default NewPoiEventListener