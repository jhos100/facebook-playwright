
import { Task } from '@serenity-js/core';
import { By, Click, Enter, PageElement } from '@serenity-js/web';

export const FacebookLogin = {
    using: (username: string, password: string) => 
        Task.where(`#actor iniciar sesion como ${ username }`,
            Enter.theValue(username).into(LoginForm.usernameField()),
            Enter.theValue(password).into(LoginForm.passwordField()),
            Click.on(LoginForm.loginButton())
        )
}

const LoginForm = {
    usernameField: () => 
        PageElement.located(By.id('email')).describedAs('campo usuario'),

    passwordField: () =>
        PageElement.located(By.id('pass')).describedAs('campo contraseña'),

    loginButton: () =>
        PageElement.located(By.xpath('/html/body/div[1]/div[1]/div[1]/div/div/div/div[2]/div/div[1]/form/div[2]/button')).describedAs('boton login')
}
