function validate2()
{
    var error=0;
    var errorMessage ='';

    if(document.getElementById('chaqueta').value!='chaqueta'){
		error++;
        errorMessage+="<p>La respuesta de 夹克衫 es errónea</p>";
        document.getElementById('chaqueta').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('chaqueta').classList.contains('errorInput'))
        {
            document.getElementById('chaqueta').classList.remove('errorInput');
        }
    }

    if(document.getElementById('abrigo').value!='abrigo'){
		error++;
        errorMessage+="<p>La respuesta de 大衣 es errónea</p>";
        document.getElementById('abrigo').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('abrigo').classList.contains('errorInput'))
        {
            document.getElementById('abrigo').classList.remove('errorInput');
        }
    }

    if(document.getElementById('traje').value!='traje'){
		error++;
        errorMessage+="<p>La respuesta de 西服 es errónea</p>";
        document.getElementById('traje').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('traje').classList.contains('errorInput'))
        {
            document.getElementById('traje').classList.remove('errorInput');
        }
    }

    if(document.getElementById('sueter').value!='sueter'){
		error++;
        errorMessage+="<p>La respuesta de 毛衣 es errónea</p>";
        document.getElementById('sueter').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('sueter').classList.contains('errorInput'))
        {
            document.getElementById('sueter').classList.remove('errorInput');
        }
    }

    if(document.getElementById('camisa').value!='camisa'){
		error++;
        errorMessage+="<p>La respuesta de 衬衣 es errónea</p>";
        document.getElementById('camisa').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('camisa').classList.contains('errorInput'))
        {
            document.getElementById('camisa').classList.remove('errorInput');
        }
    }

    if(document.getElementById('remera').value!='remera'){
		error++;
        errorMessage+="<p>La respuesta de T xùshān es errónea</p>";
        document.getElementById('remera').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('remera').classList.contains('errorInput'))
        {
            document.getElementById('remera').classList.remove('errorInput');
        }
    }

    if(document.getElementById('zapatos').value!='zapatos'){
		error++;
        errorMessage+="<p>La respuesta de 鞋 es errónea</p>";
        document.getElementById('zapatos').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('zapatos').classList.contains('errorInput'))
        {
            document.getElementById('zapatos').classList.remove('errorInput');
        }
    }    

    if(document.getElementById('edad').value!='edad'){
		error++;
        errorMessage+="<p>La respuesta de 岁 es errónea</p>";
        document.getElementById('edad').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('edad').classList.contains('errorInput'))
        {
            document.getElementById('edad').classList.remove('errorInput');
        }
    }

    if(document.getElementById('preguntar').value!='preguntar'){
		error++;
        errorMessage+="<p>La respuesta de 问 es errónea</p>";
        document.getElementById('preguntar').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('preguntar').classList.contains('errorInput'))
        {
            document.getElementById('preguntar').classList.remove('errorInput');
        }
    }

    if(document.getElementById('decir').value!='decir'){
		error++;
        errorMessage+="<p>La respuesta de 说 es errónea</p>";
        document.getElementById('decir').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('decir').classList.contains('errorInput'))
        {
            document.getElementById('decir').classList.remove('errorInput');
        }
    }

    if(document.getElementById('ropa').value!='ropa'){
		error++;
        errorMessage+="<p>La respuesta de 衣服 es errónea</p>";
        document.getElementById('ropa').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('ropa').classList.contains('errorInput'))
        {
            document.getElementById('ropa').classList.remove('errorInput');
        }
    }

    if(document.getElementById('cuanto').value!='cuanto'){
		error++;
        errorMessage+="<p>La respuesta de 多少 es errónea</p>";
        document.getElementById('cuanto').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('cuanto').classList.contains('errorInput'))
        {
            document.getElementById('cuanto').classList.remove('errorInput');
        }
    }

    if(document.getElementById('conocimiento').value!='conocimiento'){
		error++;
        errorMessage+="<p>La respuesta de 知识 es errónea</p>";
        document.getElementById('conocimiento').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('conocimiento').classList.contains('errorInput'))
        {
            document.getElementById('conocimiento').classList.remove('errorInput');
        }
    }

    if(document.getElementById('inteligente').value!='inteligente'){
		error++;
        errorMessage+="<p>La respuesta de 聪明 es errónea</p>";
        document.getElementById('inteligente').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('inteligente').classList.contains('errorInput'))
        {
            document.getElementById('inteligente').classList.remove('errorInput');
        }
    }

    if(document.getElementById('entender1').value!='entender'){
		error++;
        errorMessage+="<p>La respuesta de 清楚 es errónea</p>";
        document.getElementById('entender1').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('entender1').classList.contains('errorInput'))
        {
            document.getElementById('entender1').classList.remove('errorInput');
        }
    }

    if(document.getElementById('descanso').value!='descanso'){
		error++;
        errorMessage+="<p>La respuesta de 休息 es errónea</p>";
        document.getElementById('descanso').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('descanso').classList.contains('errorInput'))
        {
            document.getElementById('descanso').classList.remove('errorInput');
        }
    }

    if(document.getElementById('noticias').value!='noticias'){
		error++;
        errorMessage+="<p>La respuesta de 消息 es errónea</p>";
        document.getElementById('noticias').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('noticias').classList.contains('errorInput'))
        {
            document.getElementById('noticias').classList.remove('errorInput');
        }
    }

    if(document.getElementById('asistir').value!='asistir'){
		error++;
        errorMessage+="<p>La respuesta de 出席 es errónea</p>";
        document.getElementById('asistir').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('asistir').classList.contains('errorInput'))
        {
            document.getElementById('asistir').classList.remove('errorInput');
        }
    }

    if(document.getElementById('cosas').value!='cosas'){
		error++;
        errorMessage+="<p>La respuesta de 东西 es errónea</p>";
        document.getElementById('cosas').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('cosas').classList.contains('errorInput'))
        {
            document.getElementById('cosas').classList.remove('errorInput');
        }
    }

    if(document.getElementById('entender2').value!='entender'){
		error++;
        errorMessage+="<p>La respuesta de 明白 es errónea</p>";
        document.getElementById('entender2').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('entender2').classList.contains('errorInput'))
        {
            document.getElementById('entender2').classList.remove('errorInput');
        }
    }

    if(document.getElementById('humor').value!='humor'){
		error++;
        errorMessage+="<p>La respuesta de 脾气 es errónea</p>";
        document.getElementById('humor').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('humor').classList.contains('errorInput'))
        {
            document.getElementById('humor').classList.remove('errorInput');
        }
    }

    if(document.getElementById('roca').value!='roca'){
		error++;
        errorMessage+="<p>La respuesta de 石头 es errónea</p>";
        document.getElementById('roca').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('roca').classList.contains('errorInput'))
        {
            document.getElementById('roca').classList.remove('errorInput');
        }
    }

    if(document.getElementById('cola').value!='cola'){
		error++;
        errorMessage+="<p>La respuesta de 尾巴 es errónea</p>";
        document.getElementById('cola').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('cola').classList.contains('errorInput'))
        {
            document.getElementById('cola').classList.remove('errorInput');
        }
    }

    if(document.getElementById('actitud').value!='actitud'){
		error++;
        errorMessage+="<p>La respuesta de  态度 es errónea</p>";
        document.getElementById('actitud').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('actitud').classList.contains('errorInput'))
        {
            document.getElementById('actitud').classList.remove('errorInput');
        }
    }

    if(document.getElementById('pantalones').value!='pantalones'){
		error++;
        errorMessage+="<p>La respuesta de 裤子 es errónea</p>";
        document.getElementById('pantalones').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('pantalones').classList.contains('errorInput'))
        {
            document.getElementById('pantalones').classList.remove('errorInput');
        }
    }

    if(document.getElementById('error').value!='error'){
		error++;
        errorMessage+="<p>La respuesta de 错误 es errónea</p>";
        document.getElementById('error').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('error').classList.contains('errorInput'))
        {
            document.getElementById('error').classList.remove('errorInput');
        }
    }

    if(document.getElementById('significa').value!='significa'){
		error++;
        errorMessage+="<p>La respuesta de 意思 es errónea</p>";
        document.getElementById('significa').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('significa').classList.contains('errorInput'))
        {
            document.getElementById('significa').classList.remove('errorInput');
        }
    }

    if(document.getElementById('columna').value!='columna'){
		error++;
        errorMessage+="<p>La respuesta de 柱子 es errónea</p>";
        document.getElementById('columna').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('columna').classList.contains('errorInput'))
        {
            document.getElementById('columna').classList.remove('errorInput');
        }
    }
    
    if(error==0){
        document.getElementById("message-第十课").innerHTML = "";
		return true;
    }
    else{
		document.getElementById("message-第十课").innerHTML= errorMessage;
		return false;
	}
}
