
const poiBuilder = () => {
  document.querySelector("#FullPoiList").innerHTML +=
  `
 <div id = "PoiField">
 <input type = "hidden" id="interestId"></input>

 <section id = "newPoiSection">
 <fieldset>
 <label>Name of Point of Interest</label>
 <input type="text" id="inputNameofPoi"></input>
 </fieldset>

 <fieldset>
 <label>Description</label>
 <input type="text" id="DescriptionofPoi"></input>
 </fieldset>

 <fieldset>
 <form>
<select id="SelectLocation">
  <option>United States</option>
  <option>Europe</option>
  <option>Asia</option>
  <option>South America</option>
</select>
</form>
 </fieldset>

 <button id="SavePoi">Save</button>

 <fieldset id="fullList2">
 <h1>Points of Interest</h1>
 <h1 id="fullPoiList"></h1>
 </fieldset>
 </div>

  `
}

export default poiBuilder

