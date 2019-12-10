function validate3()
{
    var error=0;
    var errorMessage ='';

    if(document.getElementById('cerveza').value!='cerveza'){
		error++;
        errorMessage+="<p>La respuesta de 啤酒 es errónea</p>";
        document.getElementById('cerveza').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('cerveza').classList.contains('errorInput'))
        {
            document.getElementById('cerveza').classList.remove('errorInput');
        }
    }

    if(document.getElementById('vino').value!='vino'){
		error++;
        errorMessage+="<p>La respuesta de 葡萄酒 es errónea</p>";
        document.getElementById('vino').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('vino').classList.contains('errorInput'))
        {
            document.getElementById('vino').classList.remove('errorInput');
        }
    }

    if(document.getElementById('leche').value!='leche'){
		error++;
        errorMessage+="<p>La respuesta de 牛奶 es errónea</p>";
        document.getElementById('leche').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('leche').classList.contains('errorInput'))
        {
            document.getElementById('leche').classList.remove('errorInput');
        }
    }

    if(document.getElementById('aguaMineral').value!='aguaMineral'){
		error++;
        errorMessage+="<p>La respuesta de 矿泉水 es errónea</p>";
        document.getElementById('aguaMineral').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('aguaMineral').classList.contains('errorInput'))
        {
            document.getElementById('aguaMineral').classList.remove('errorInput');
        }
    }

    if(document.getElementById('aguaFria').value!='agua fria'){
		error++;
        errorMessage+="<p>La respuesta de 冰水 es errónea</p>";
        document.getElementById('aguaFria').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('aguaFria').classList.contains('errorInput'))
        {
            document.getElementById('aguaFria').classList.remove('errorInput');
        }
    }

    if(document.getElementById('huevos').value!='huevos'){
		error++;
        errorMessage+="<p>La respuesta de 鸡蛋 es errónea</p>";
        document.getElementById('huevos').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('huevos').classList.contains('errorInput'))
        {
            document.getElementById('huevos').classList.remove('errorInput');
        }
    }

    if(document.getElementById('mermelada').value!='mermelada'){
		error++;
        errorMessage+="<p>La respuesta de 果酱 es errónea</p>";
        document.getElementById('mermelada').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('mermelada').classList.contains('errorInput'))
        {
            document.getElementById('mermelada').classList.remove('errorInput');
        }
    }

    if(document.getElementById('queso').value!='queso'){
		error++;
        errorMessage+="<p>La respuesta de 奶酪 es errónea</p>";
        document.getElementById('queso').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('queso').classList.contains('errorInput'))
        {
            document.getElementById('queso').classList.remove('errorInput');
        }
    }

    if(document.getElementById('flor').value!='flor'){
		error++;
        errorMessage+="<p>La respuesta de 花儿 es errónea</p>";
        document.getElementById('flor').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('flor').classList.contains('errorInput'))
        {
            document.getElementById('flor').classList.remove('errorInput');
        }
    }

    if(document.getElementById('heladoAgua').value!='heladoAgua'){
		error++;
        errorMessage+="<p>La respuesta de 冰棍儿 es errónea</p>";
        document.getElementById('heladoAgua').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('heladoAgua').classList.contains('errorInput'))
        {
            document.getElementById('heladoAgua').classList.remove('errorInput');
        }
    }

    if(document.getElementById('rolloFlores').value!='rollo de flores'){
		error++;
        errorMessage+="<p>La respuesta de 花卷儿 es errónea</p>";
        document.getElementById('rolloFlores').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('rolloFlores').classList.contains('errorInput'))
        {
            document.getElementById('rolloFlores').classList.remove('errorInput');
        }
    }

    if(document.getElementById('semillaSandia').value!='semilla de sandia'){
		error++;
        errorMessage+="<p>La respuesta de 瓜子 es errónea</p>";
        document.getElementById('semillaSandia').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('semillaSandia').classList.contains('errorInput'))
        {
            document.getElementById('semillaSandia').classList.remove('errorInput');
        }
    }

    if(document.getElementById('pezDorado').value!='pez dorado'){
		error++;
        errorMessage+="<p>La respuesta de 金鱼儿 es errónea</p>";
        document.getElementById('pezDorado').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('pezDorado').classList.contains('errorInput'))
        {
            document.getElementById('pezDorado').classList.remove('errorInput');
        }
    }

    if(document.getElementById('durazno').value!='durazno'){
		error++;
        errorMessage+="<p>La respuesta de 桃儿 es errónea</p>";
        document.getElementById('durazno').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('durazno').classList.contains('errorInput'))
        {
            document.getElementById('durazno').classList.remove('errorInput');
        }
    }

    if(document.getElementById('cabeza').value!='cabeza'){
		error++;
        errorMessage+="<p>La respuesta de 头儿 es errónea</p>";
        document.getElementById('cabeza').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('cabeza').classList.contains('errorInput'))
        {
            document.getElementById('cabeza').classList.remove('errorInput');
        }
    }

    if(document.getElementById('jugar').value!='jugar'){
		error++;
        errorMessage+="<p>La respuesta de 玩儿 es errónea</p>";
        document.getElementById('jugar').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('jugar').classList.contains('errorInput'))
        {
            document.getElementById('jugar').classList.remove('errorInput');
        }
    }

    if(document.getElementById('chicaJoven').value!='chica joven'){
		error++;
        errorMessage+="<p>La respuesta de 玲儿 es errónea</p>";
        document.getElementById('chicaJoven').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('chicaJoven').classList.contains('errorInput'))
        {
            document.getElementById('chicaJoven').classList.remove('errorInput');
        }
    }

    if(document.getElementById('escarbadiente').value!='escarbadiente'){
		error++;
        errorMessage+="<p>La respuesta de 牙签儿 es errónea</p>";
        document.getElementById('escarbadiente').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('escarbadiente').classList.contains('errorInput'))
        {
            document.getElementById('escarbadiente').classList.remove('errorInput');
        }
    }

    if(document.getElementById('datil').value!='datil'){
		error++;
        errorMessage+="<p>La respuesta de 枣儿 es errónea</p>";
        document.getElementById('datil').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('datil').classList.contains('errorInput'))
        {
            document.getElementById('datil').classList.remove('errorInput');
        }
    }

    if(document.getElementById('pajaro').value!='pajaro'){
		error++;
        errorMessage+="<p>La respuesta de 鸟儿 es errónea</p>";
        document.getElementById('pajaro').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('pajaro').classList.contains('errorInput'))
        {
            document.getElementById('pajaro').classList.remove('errorInput');
        }
    }

    if(document.getElementById('barcoChiquito').value!='barcoChiquito'){
		error++;
        errorMessage+="<p>La respuesta de 小船儿 es errónea</p>";
        document.getElementById('barcoChiquito').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('barcoChiquito').classList.contains('errorInput'))
        {
            document.getElementById('barcoChiquito').classList.remove('errorInput');
        }
    }

    if(document.getElementById('interesante').value!='interesante'){
		error++;
        errorMessage+="<p>La respuesta de 有趣 es errónea</p>";
        document.getElementById('interesante').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('interesante').classList.contains('errorInput'))
        {
            document.getElementById('interesante').classList.remove('errorInput');
        }
    }

    if(document.getElementById('tapaBotella').value!='tapa de botella'){
		error++;
        errorMessage+="<p>La respuesta de  瓶盖 es errónea</p>";
        document.getElementById('tapaBotella').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('tapaBotella').classList.contains('errorInput'))
        {
            document.getElementById('tapaBotella').classList.remove('errorInput');
        }
    }

    if(document.getElementById('cepillo').value!='cepillo'){
		error++;
        errorMessage+="<p>La respuesta de 牙刷 es errónea</p>";
        document.getElementById('cepillo').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('cepillo').classList.contains('errorInput'))
        {
            document.getElementById('cepillo').classList.remove('errorInput');
        }
    }

    if(document.getElementById('error').value!='error'){
		error++;
        errorMessage+="<p>La respuesta de 错 es errónea</p>";
        document.getElementById('error').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('error').classList.contains('errorInput'))
        {
            document.getElementById('error').classList.remove('errorInput');
        }
    }

    if(document.getElementById('suerte').value!='suerte'){
		error++;
        errorMessage+="<p>La respuesta de 幸儿 es errónea</p>";
        document.getElementById('suerte').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('suerte').classList.contains('errorInput'))
        {
            document.getElementById('suerte').classList.remove('errorInput');
        }
    }

    if(document.getElementById('caracter').value!='caracter'){
		error++;
        errorMessage+="<p>La respuesta de 字儿  es errónea</p>";
        document.getElementById('caracter').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('caracter').classList.contains('errorInput'))
        {
            document.getElementById('caracter').classList.remove('errorInput');
        }
    }

    if(document.getElementById('gaseosa').value!='gaseosa'){
		error++;
        errorMessage+="<p>La respuesta de 汽水儿 es errónea</p>";
        document.getElementById('gaseosa').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('gaseosa').classList.contains('errorInput'))
        {
            document.getElementById('gaseosa').classList.remove('errorInput');
        }
    }
    
    if(error==0){
        document.getElementById("message-第十一课").innerHTML = "";
		return true;
    }
    else{
		document.getElementById("message-第十一课").innerHTML= errorMessage;
		return false;
	}
}