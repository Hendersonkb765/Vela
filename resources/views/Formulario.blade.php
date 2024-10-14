<form action="{{route('formulario')}}" method="POST" enctype="multipart/form-data">
    @csrf
    <input type="file" name="database[]" multiple="multiple"/>
    <input type="submit" value="Enviar">
</form>
<!-- Teste de imagem 
<img src="https://drive.google.com/thumbnail?id=1CYjhl6Y0FFQthou8OmyUpq50gJDhqQfK&sz=w1000" alt="Imagem do Google Drive">
<iframe src="https://drive.google.com/file/d/1jxSWEtbhv5iEaS1qIeBuzsqftydcPVJYBNtYdfv8pHQ/preview" width="640" height="480"></iframe>
    -->