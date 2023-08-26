let tabs = document.querySelectorAll(".tab")
let panels = document.querySelectorAll(".tab-panel")

tabs.forEach(tab => {
	tab.addEventListener("click", ()=>{
		let tabTarget = tab.getAttribute("aria-controls")

		tabs.forEach(t => {
			t.classList.remove("border-brightRed");
			t.classList.add("border-veryLightGray");
			t.classList.remove("text-brightRed");
		})
		tab.classList.remove("border-veryLightGray");
		tab.classList.add("border-brightRed");
		tab.classList.add("text-brightRed");

		panels.forEach(panel =>{
			let panelId = panel.getAttribute("id")
			if (tabTarget === panelId){
				panel.classList.remove("invisible", "opacity-0")
				panel.classList.add("visible", "opacity-100")

			} else {
				panel.classList.add("invisible", "opacity-0")
			}
		})
	})
})