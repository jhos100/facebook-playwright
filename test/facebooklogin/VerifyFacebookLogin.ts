import { Ensure, includes } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { By, isVisible, PageElement, Text } from '@serenity-js/web';

export class VerifyFacebookLogin {
    private static hasMessageError = ()=>
        Task.where('#actor verifica que el mensaje este presente',
            Ensure.that(MessageError.messageAlert(), isVisible()),
        )

    static success = () => 
        Task.where('#actor verifica que el login sea correcto',
            Ensure.that(Text.of(MessageError.messageAlert()), includes('Invalid username or password'))
        )
    static failed = () =>
        Task.where('#actor verifica que el login sea incorrecto',
            VerifyFacebookLogin.hasMessageError(),
            Ensure.that(Text.of(MessageError.messageAlert()), includes('Invalid username or password'))
        )
}

const MessageError = {
    messageAlert: () =>
        PageElement.located(By.xpath('//*[@id="error_box"]/div[2]')).describedAs('mensaje de error')
}