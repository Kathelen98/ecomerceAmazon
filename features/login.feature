Feature: The Internet Guinea Pig Website

  Scenario: Como usuario quiero loguearme a la pagina de Amazon

    Given entrar a la pagina de inicio
    And el usuario da clic en Sing in
    When me loguee con usuario y contraseña
    Then yo debo de ver un mensaje de bienvenida <Hola Prueba>
