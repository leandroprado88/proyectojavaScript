//
//
//
//

/**************************************************************
 *                ENTIDAD  
 *************************************************************/

 class User {
    constructor(firstName, lastName, email, phone, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.id = id;
    }
}

/**************************************************************
 *          VARIABLES / CONSTANTES / SELECTORES
 *************************************************************/

let users = []

let btnSave = document.getElementById("save")
let tablePrint = document.getElementById("table")
let form = document.getElementById("form")
let btnClear = document.getElementById("clear")

/**************************************************************
 *                        FUNCIONES
 *************************************************************/


//Funcion de guardar los datos
const saveData = () => {
    //e.preventDefault()

    //Datos de los input
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value

    //Actualizo mi array de usuarios local

    if (JSON.parse(localStorage.getItem("users") != null)) {

        //En el caso de el local tenga informacion
        users = JSON.parse(localStorage.getItem("users")) //actualizo con la informacion del local mi array
        let index = users.length + 1
        let user = new User(firstName, lastName, email, phone, index) //creo el usuario
        users.push(user) //lo pusheo al array
        localStorage.setItem("users", JSON.stringify(users)) //y actualizo mi local
    } else {

        //En el caso que sea NULL
        let index = 1
        let user = new User(firstName, lastName, email, phone, index) //Creo el usuario
        users.push(user) //Lo pusheo a mi array nativa que se inicializa vacia 
        localStorage.setItem("users", JSON.stringify(users)) // actualizo mi local
    }

}


//Funcion de imprimir datos
const printData = () => {

    let dataToPrint = JSON.parse(localStorage.getItem("users"))

    if (dataToPrint != null) {
        dataToPrint.forEach(e => {

            //Mi cartilla
            let table = document.createElement("tr")

            let td = document.createElement("td")
            td.setAttribute("class", "col-1")
            td.textContent = `${dataToPrint.indexOf(e)}`
            table.appendChild(td)

            let th1 = document.createElement("th")
            th1.setAttribute("class", "col-2")
            th1.textContent = `${e.firstName}`
            table.appendChild(th1)

            let th2 = document.createElement("th")
            th2.setAttribute("class", "col-2")
            th2.textContent = `${e.lastName}`
            table.appendChild(th2)

            let th3 = document.createElement("th")
            th3.setAttribute("class", "col-2")
            th3.textContent = `${e.email}`
            table.appendChild(th3)

            let th4 = document.createElement("th")
            th4.setAttribute("class", "col-2")
            th4.textContent = `${e.phone}`
            table.appendChild(th4)

            let td2 = document.createElement("td")
            td2.setAttribute("class", "col-2")
            table.appendChild(td2)

            let button = document.createElement("button")
            button.setAttribute("class", "btn btn-danger")
            button.setAttribute("id", `${e.id}`)
            button.setAttribute("onclick", `deleteUser(${e.id})`)
            button.textContent = "X"
            td2.appendChild(button)


            let button1 = document.createElement("button")
            button1.setAttribute("class", "btn btn-success")
            button1.setAttribute("id", `${e.phone}`)
            button1.setAttribute("onclick", `editUser(${e.phone})`)
            button1.textContent = "L"
            td2.appendChild(button1)


            //AGREGARLO A MI ID
            tablePrint.appendChild(table)
        })

    } else {
        document.getElementById("err").textContent = "No existe usuarios"
    }


}

const deleteUser = (id) => {

    let allUser = JSON.parse(localStorage.getItem("users"))
    let allUserAct = allUser.filter(e => e.id != id)
    localStorage.setItem("users", JSON.stringify(allUserAct))
    location.reload()

}

const editUser = (phone) => {

        let validate = confirm("¿Deseas cambiar la informacion?")

        if (validate) {
            let newName = prompt("Ingresa nuevo nombre")
            let newLN = prompt("Ingresa nuevo apellido")

            let allUsers = JSON.parse(localStorage.getItem("users"))

            let selectUser = allUsers.find(e => e.phone == phone)

            selectUser.firstName = newName
            selectUser.lastName = newLN

            let allUserAct = allUsers.filter(e => e.phone != phone)

            allUserAct.push(selectUser)
            localStorage.setItem("users", JSON.stringify(allUserAct))

            location.reload()
        }
    }
    /**************************************************************
     *                        EVENTOS
     *************************************************************/

form.addEventListener("submit", saveData)
btnClear.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})


window.addEventListener("load", () => {
    printData()
})
/**************************************************************
 *                        Logica
 *************************************************************/