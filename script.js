import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyC5rh_BMgu-ThHgDs9EeowmDSeKwHGs_Jw",
    authDomain: "shoptodolist-57a6a.firebaseapp.com",
    projectId: "shoptodolist-57a6a",
    storageBucket: "shoptodolist-57a6a.appspot.com",
    messagingSenderId: "659738945875",
    appId: "1:659738945875:web:84388df3b363fa7c5299a6"
};

const appSettings = {
    databaseURL:"https://shoptodolist-57a6a-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig,appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(shoppingListInDB, inputValue)
    
    clearInputFieldEl()
})

onValue(shoppingListInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearShoppingListEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToShoppingListEl(currentItem)
        }    
    } else {
        shoppingListEl.innerHTML = "No items here... yet"
    }
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    shoppingListEl.append(newEl)
}