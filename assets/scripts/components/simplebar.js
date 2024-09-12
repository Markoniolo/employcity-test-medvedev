import SimpleBar from "simplebar"

const customSelectPanels = document.querySelectorAll('.custom-select-panel')

for (let i = 0; i < customSelectPanels.length; i++) {
  new SimpleBar(customSelectPanels[i])
}
