import Page from './page'

class authPage extends Page {
    get username() {return $('#username')}
    get password() {return $('#password')}
    get sbmtButton() {return $('button[type="submit"]')}
    get flsah() {return $('#flash')}

    async open() {
        await super.open('login')
    }

    async submit() {
        this.sbmtButton.click()
    }

    async login(username, password) {
        await this.username.setValue(username)
        await this.password.setValue(password)
    }
}

export default new authPage()