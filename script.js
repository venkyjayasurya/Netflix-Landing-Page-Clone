
//adding border to the tab-contents

const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

//Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');

    //grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    //Add show class to tabContentItem
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}


// to display content to switching tab contents

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

