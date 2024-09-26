<form action="{{route('formulario')}}" method="POST" enctype="multipart/form-data">
    @csrf
    <input type="file" name="database">
    <input type="submit" value="Enviar">
</form>
