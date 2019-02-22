

const poiApiManager = {

  postPoi: function (PoiObject) {
    return fetch("http://localhost:8088/interests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(PoiObject)
    })
    .then(res => res.json())
  },

  deletePoi: function (interestId) {
    return fetch(`http://localhost:8088/interests/${interestId}`, {
      method: "DELETE",
    })
  },

  getPoi: (placeId) => {
    return fetch (`http://localhost:8088/interests?userId=${placeId}`)
    .then(res => res.json())
  },
  grabPoi: () => {
    return fetch ("http://localhost:8088/interests")
    .then(res => res.json())
  }


}

export default poiApiManager

