
const form=document.createElement("form")
form.id="form";

form.innerHTML=`<div class="form-group">
<label for="first-name">First Name :</label>
        <input type="text" id="firstName" placeholder="First-Name" required>
        
        <label for="last name">Last Name :</label>
        <input type="text" id="last-name" name="lastname" placeholder="Last-Name" required>

        <label for="address">Address :</label>
        <textarea id="address" name="Address" placeholder="Address" required></textarea><br>

        <label for="pincode">Pincode :</label>
        <input type="text" id="pincode" name="pincode" placeholder="Pincode" required><br>

        <label>Gender:</label>
        <label for="male">
        <input type="radio" id="male" name="gender" value="male" required> Male
        </label>
        <label for="female">
        <input type="radio" id="female" name="gender" value="female" required> Female
        </label><br>

        

        <label for="state">State :</label>
        <input type="text" id="state" name="state" placeholder="State" required><br>

        <label for="country">Country :</label>
        <input type="text" id="country" name="country" placeholder="Country" required><br>
        <label for="food-choice">Select your Meal😋:</label>
        <select id="food-choice" name="foodChoice" required>
            <option value="Noodles">Noodles</option>
            <option value="Parotta">Parotta</option>
            <option value="Briyani">Briyani</option>
            <option value="Chicken Rice">Chicken Rice</option>
            <option value="Mutton Soup">Mutton Soup</option>
        </select><br>


        <button type="button" class="btn btn-primary" id="submit" onclick="submitForm()">Submit</button>

        </div>

`;

document.body.append(form)
//!for table

const table=document.createElement("table")
table.setAttribute("class","table")
table.id="data"
table.innerHTML=`
<thead>
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>Pincode</th>
        <th>Gender</th>
        <th>Country</th>
        <th>State</th>
        <th>Selected Food</th>
    </tr>
</thead>
<tbody>
</tbody>
`
document.body.append(table)




//!Table Input functiopn coding
function getInputFromUser() {
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("last-name");
    const addressInput = document.getElementById("address");
    const pincodeInput = document.getElementById("pincode");
    const genderInput = document.getElementsByName("gender");
    const FoodInput = document.getElementById("food-choice");
    const stateInput = document.getElementById("state");
    const countryInput = document.getElementById("country");

    //!Getting the input given by the user in form

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const address = addressInput.value;
    const pincode = pincodeInput.value;
    const gender = clicked(genderInput);
    const country = countryInput.value;
    const state = stateInput.value;
    const selectFood = FoodInput.value;
    if (firstName && lastName) {
        const inTable = document.getElementById("data");
        const Data= inTable.insertRow(table.rows.length);

    //!Inserting The Data onto the table
        const row = Data.insertCell(0);
        row.innerHTML = firstName;
        const row1 = Data.insertCell(1);
        row1.innerHTML =  lastName;
        const row2 = Data.insertCell(2);
        row2.innerHTML =address;
        const row3 = Data.insertCell(3);
        row3.innerHTML = pincode;
        const row4 = Data.insertCell(4);
        row4.innerHTML = gender;
        const row5 = Data.insertCell(5);
        row5.innerHTML = country;
        const row6 =Data.insertCell(6);
        row6.innerHTML = state;
        const row7 = Data.insertCell(7);
        row7.innerHTML = selectFood;
    //!Clearing the table
        firstNameInput.value = "";
        lastNameInput.value = "";
        addressInput.value = "";
        pincodeInput.value = "";
        Change(genderInput);
        FoodInput.value = "";
        stateInput.value = "";
        countryInput.value = "";
    } else {
        alert("Form can't be empty!!!");//!if form is empty and submited pop alter msg 
    }
}
const clicked=(a)=> {
    for ( i=0; i < a.length; i++) {
        if (a[i].checked) {
            return a[i].value;
        }
    }
    return null;
}
const Change=(a)=> {
    for (i=0; i < a.length; i++) {
        a[i].checked = false;
    }
}
