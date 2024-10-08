<div>

    {{-- <h1>Você recebeu um convite dá {{$oscName}}</h1>
    Presidente: {{$presidentName}}

    <p>{{$imgUrl}}</p>
    <img src={{$imgUrl}} alt="">
    <p>{{$linkInvitation}}</p>
    <a href="{{$linkInvitation}}">Clique Aqui</a> --}}


    <div class="container" style="width: 100%; background: #057EE8; display: grid; justify-items: center; align-items: center;">
        <div class="main" style="margin: 20px 0; color: #232323; font-family: Poppins, Verdana, Geneva, Tahoma, sans-serif; width: 95%; max-height: fit-content; border-radius: 10px; background: white; display: grid; grid-template-rows: auto auto auto auto auto; justify-items: center;">
            
            <img src="{{asset('Images/Logotipo V. Azul.svg')}}" alt="Logo da Vela SocialLab" style="height: 60px; margin-top: 30px; margin-bottom: 20px;">
            
            <div style="width: 100%; background: #79c1ff;">
                <h1 style="width: 95%; text-align: center;">Olá, transformador social!</h1>
            </div>
            
            <h2 style="text-align: center; width: 90%; font-size: 16px;">
                Você foi convidado por <span style="color: #057EE8;">{{$presidentName}}</span> a participar da <span style="color: #057EE8;">{{$oscName}}</span> na Vela SocialLab
            </h2>
            
            <img src="{{asset('Images/Welcome-amico.png')}}" alt="" style="width: 70%;">
            
            <p style="text-align: center; width: 90%; font-size: 14px;">
                Para aceitar o convite basta <span style="color: #057EE8; font-weight: 800;">clicar</span> no botão abaixo
            </p>
            
            <a href="{{$linkInvitation}}" style="outline: none; border: none; background: #057EE8; padding: 10px 20px; border-radius: 5px; font-weight: 600; color: white; text-decoration: none;">Aceitar Convite</a>
            
            <p style="text-align: center; width: 90%; font-size: 12px;">
                O botão não funciona? tente clicar ou copie e cole no navegador: <a href="{{$linkInvitation}}" style="color: #057EE8;">{{$linkInvitation}}</a>
            </p>
        </div>
    </div>
    


</div> 
