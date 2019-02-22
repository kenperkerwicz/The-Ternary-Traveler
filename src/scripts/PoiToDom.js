

const poiToDom = (interest) => {

  return ` <div id="${interest.id}">
  <h3>${interest.name}</h3>
  <h3>${interest.description}</h3>
  <button id="poiDeleteBTN--${interest.id}">Delete</button>
  </div>
  `

}

export default poiToDom;

