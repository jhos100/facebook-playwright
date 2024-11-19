import { Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

import { FacebookLogin } from '../../test/facebooklogin/FacebookLogin';
import { VerifyFacebookLogin } from '../../test/facebooklogin/VerifyFacebookLogin';

// import { PickExample } from '../../test/examples';

Given('{actor} inicia la prueba de la {string} ejemplo', (actor: Actor, s: string) => 
    actor.attemptsTo(
        Navigate.to('/'),
    )
)

When('{pronoun} va insertar al login {string} y {string}', async (actor: Actor, username: string, password: string) =>
    actor.attemptsTo(
        FacebookLogin.using(username, password),
    )
);

Then(/.* debe ver la autenticacion (success|failed)/, async (expectedOutcome: string) =>
    actorInTheSpotlight().attemptsTo(
        VerifyFacebookLogin[expectedOutcome](),
    )
);