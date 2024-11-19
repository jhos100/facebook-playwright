Feature: Automatización de Facebook
  Como usuario de Facebook
  Quiero automatizar un flujo básico de inicio de sesión y navegación
  Para validar que los posts se muestran correctamente

  Background:
    Given Joao inicia la prueba de la "Interaccion con Facebook" ejemplo
  
  Scenario Outline: Usara un usuario y contraseña en el login

    When el va insertar al login "<username>" y "<password>"
    Then el debe ver la autenticacion <outcome>

    Examples:
      | username | password             | outcome   |
      | jhoaocr23@gmail.com | \;\>Il£7Q\$3\\8\| | success    |
      | foobar   | barfoo               | failed    |