<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Convite da {{$oscName}}</title>
</head>
<body style="padding: 0; margin: 0;">

    <table class="container" style="width: 100%; background: #057EE8; border-collapse: collapse;">
        <tr>
            <td style="padding: 20px; text-align: center;">
                <table class="main" style="margin: 20px auto; color: #232323; font-family: Poppins, Verdana, Geneva, Tahoma, sans-serif; width: 95%; max-height: fit-content; border-radius: 10px; background: white; border-collapse: collapse;">
                    <tr>
                        <td style="text-align: center; padding-top: 30px; padding-bottom: 20px;">
                            <img src="Logo_Cor_Principal.png" alt="Logo da Vela SocialLab" style="height: 60px;">
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 100%; background: #79c1ff; text-align: center;">
                            <h1 style="width: 95%; margin: 0;">Olá, transformador social!</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center; width: 90%; font-size: 16px; padding: 20px;">
                            Você foi convidado por <span style="color: #057EE8;">{{$presidentName}}</span> a participar da <span style="color: #057EE8;">{{$oscName}}</span> na Vela SocialLab.
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">
                            <img src="Welcome-amico.png" alt="" style="width: clamp(250px, 60%, 600px);">
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center; width: 90%; font-size: 14px; padding: 20px;">
                            Para aceitar o convite basta <span style="color: #057EE8; font-weight: 800;">clicar</span> no botão abaixo
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">
                            <a href="{{$linkInvitation}}" style="outline: none; border: none; background: #057EE8; padding: 10px 20px; border-radius: 5px; font-weight: 600; color: white; text-decoration: none;">Aceitar Convite</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center; width: 90%; font-size: 12px; padding: 10px 0;">
                            O botão não funciona? Tente clicar aqui: <a href="{{$linkInvitation}}" style="color: #057EE8;">{{$linkInvitation}}</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    
</body>
</html>
