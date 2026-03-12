let tabs = document.querySelectorAll(".tab")
let panels = document.querySelectorAll(".tab-panel")

tabs.forEach(tab => {
	tab.addEventListener("click", ()=>{
		let tabTarget = tab.getAttribute("aria-controls")

		tabs.forEach(t => {
			t.classList.remove("border-bright-red");
			t.classList.add("border-very-light-gray");
			t.classList.remove("text-bright-red");
		})
		tab.classList.remove("border-very-light-gray");
		tab.classList.add("border-bright-red");
		tab.classList.add("text-bright-red");

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