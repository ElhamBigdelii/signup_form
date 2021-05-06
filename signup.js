const validationItems = {
    checkRegEx: (Pattern, Input) => {
        debugger
        if (Pattern.test(Input))
            return true
        return false
    },

    checkName: (name) => {
        debugger
        const pattern = /^[a-z A-Z]+$/
        if (this.checkRegEx(pattern, name))
            return true
        return false
    },

    checkEmail: (email, retypeEmail) => {
        debugger
        const theSame = email === retypeEmail ? true : false
        const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        if (theSame && this.checkRegEx(pattern, email))
            return true
        return false
    },

    checkPass: (pass, retypePass) => {
        debugger
        const theSame = pass === retypePass ? true : false
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,16}$/
        if (theSame && this.checkRegEx(pattern, pass))
            return true
        return false
    },

    showPass: () => {
        debugger
        const element = document.querySelectorAll(".pass")
        if (element.type === "password") {
            element.type = "text"
            return true
        }
        else {
            element.type = "password"
            return false
        }
    },

    checkPhone: (phone) => {
        debugger
        const pattern = /^9[0-9]{9}$/
        if (this.checkRegEx(pattern, phone))
            return true
        return false
    },

    checkAge: (birthDate) => {
        debugger
        const currDate = new Date().getFullYear()
        const age = new Date(birthDate).getFullYear() - currDate
        if (age >= 18)
            return true
        return false
    }
}

const makeOrderModel = () => {
    debugger
    const orderModel = new Map()
    orderModel.set("firstname",document.form.firstname.value)
    orderModel.set("lastname",document.form.lastname.value)
    orderModel.set("email",document.form.email.value)
    orderModel.set("retypeEmail",document.form.retypeEmail.value)
    orderModel.set("pass",document.form.pass.value)
    orderModel.set("retypePass",document.form.retypePass.value)
    orderModel.set("phone",document.form.phone.value)
    orderModel.set("birthDate",document.form.birthDate.value)
    orderModel.set("birthPlace",document.form.birthPlace.value)
    return orderModel

}

const events = {
    click: () => {
        const isPasShowed = validationItems.showPass()
        return isPasShowed
    },

    submit: () => {
        debugger
        const form = document.form
        const checkFirstName = validationItems.checkName(form.firstname.value)
        const checkLastName = validationItems.checkName(form.lastname.value)
        const checkEmail = validationItems.checkEmail(form.email.value, form.retypeEmail.value)
        const checkPass = validationItems.checkPass(form.pass.value, form.retypePass.value)
        const checkPhone = validationItems.checkPhone(form.phone.value)
        const checkAge = validationItems.checkAge(form.birthDate.value)
        if (checkFirstName && checkLastName && checkEmail && checkPass && checkPhone && checkAge) {
            const orderModel = makeOrderModel()
            return true
        }
        return false
    },

    focus: () => {

    },

    blur: () => {

    }
}

debugger

document.getElementById("signup").addEventListener('submit',(event) => {
    debugger
    event.preventDefault();
    events.submit()
})

