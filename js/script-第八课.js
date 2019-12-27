function validate0()
{
    var error=0;
    var errorMessage ='';

    if(document.getElementById('abueloP').value!='abuelo paterno'){
		error++;
        errorMessage+="<p>La respuesta de 爷爷 es errónea</p>";
        document.getElementById('abueloP').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('abueloP').classList.contains('errorInput'))
        {
            document.getElementById('abueloP').classList.remove('errorInput');
        }
    }

    if(document.getElementById('abuelaP').value!='abuela paterna'){
		error++;
        errorMessage+="<p>La respuesta de 奶奶 es errónea</p>";
        document.getElementById('abuelaP').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('abuelaP').classList.contains('errorInput'))
        {
            document.getElementById('abuelaP').classList.remove('errorInput');
        }
    }

    if(document.getElementById('hermanoMa').value!='hermano mayor'){
		error++;
        errorMessage+="<p>La respuesta de 哥哥 es errónea</p>";
        document.getElementById('hermanoMa').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('hermanoMa').classList.contains('errorInput'))
        {
            document.getElementById('hermanoMa').classList.remove('errorInput');
        }
    }

    if(document.getElementById('hermanoMe').value!='hermano menor'){
		error++;
        errorMessage+="<p>La respuesta de 弟弟 es errónea</p>";
        document.getElementById('hermanoMe').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('hermanoMe').classList.contains('errorInput'))
        {
            document.getElementById('hermanoMe').classList.remove('errorInput');
        }
    }

    if(document.getElementById('hermanaMe').value!='hermana menor'){
		error++;
        errorMessage+="<p>La respuesta de 妹妹 es errónea</p>";
        document.getElementById('hermanaMe').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('hermanaMe').classList.contains('errorInput'))
        {
            document.getElementById('hermanaMe').classList.remove('errorInput');
        }
    }

    if(document.getElementById('tiaHermanaMadre').value!='tia hermana de la madre'){
		error++;
        errorMessage+="<p>La respuesta de 阿姨 es errónea</p>";
        document.getElementById('tiaHermanaMadre').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('tiaHermanaMadre').classList.contains('errorInput'))
        {
            document.getElementById('tiaHermanaMadre').classList.remove('errorInput');
        }
    }

    if(document.getElementById('tioHermanoMenorPadre').value!='tio hermano menor del padre'){
		error++;
        errorMessage+="<p>La respuesta de 叔叔 es errónea</p>";
        document.getElementById('tioHermanoMenorPadre').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('tioHermanoMenorPadre').classList.contains('errorInput'))
        {
            document.getElementById('tioHermanoMenorPadre').classList.remove('errorInput');
        }
    }

    if(document.getElementById('profesorCatedratico').value!='profesor catedratico'){
		error++;
        errorMessage+="<p>La respuesta de 教授 es errónea</p>";
        document.getElementById('profesorCatedratico').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('profesorCatedratico').classList.contains('errorInput'))
        {
            document.getElementById('profesorCatedratico').classList.remove('errorInput');
        }
    }

    if(document.getElementById('departamento').value!='departamento'){
		error++;
        errorMessage+="<p>La respuesta de 系 es errónea</p>";
        document.getElementById('departamento').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('departamento').classList.contains('errorInput'))
        {
            document.getElementById('departamento').classList.remove('errorInput');
        }
    }

    if(document.getElementById('nervioso').value!='nervioso'){
		error++;
        errorMessage+="<p>La respuesta de 紧张 es errónea</p>";
        document.getElementById('nervioso').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('nervioso').classList.contains('errorInput'))
        {
            document.getElementById('nervioso').classList.remove('errorInput');
        }
    }

    if(document.getElementById('alumna').value!='alumna'){
		error++;
        errorMessage+="<p>La respuesta de 女生 es errónea</p>";
        document.getElementById('alumna').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('alumna').classList.contains('errorInput'))
        {
            document.getElementById('alumna').classList.remove('errorInput');
        }
    }

    if(document.getElementById('tren').value!='tren'){
		error++;
        errorMessage+="<p>La respuesta de 火车 es errónea</p>";
        document.getElementById('tren').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('tren').classList.contains('errorInput'))
        {
            document.getElementById('tren').classList.remove('errorInput');
        }
    }

    if(document.getElementById('restaurantChico').value!='restaurante chiquito'){
		error++;
        errorMessage+="<p>La respuesta de 小吃 es errónea</p>";
        document.getElementById('restaurantChico').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('restaurantChico').classList.contains('errorInput'))
        {
            document.getElementById('restaurantChico').classList.remove('errorInput');
        }
    }

    if(document.getElementById('muyNegro').value!='muy negro'){
		error++;
        errorMessage+="<p>La respuesta de 很黑 es errónea</p>";
        document.getElementById('muyNegro').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('muyNegro').classList.contains('errorInput'))
        {
            document.getElementById('muyNegro').classList.remove('errorInput');
        }
    }

    if(document.getElementById('zonaNorte').value!='zona norte'){
		error++;
        errorMessage+="<p>La respuesta de 北方 es errónea</p>";
        document.getElementById('zonaNorte').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('zonaNorte').classList.contains('errorInput'))
        {
            document.getElementById('zonaNorte').classList.remove('errorInput');
        }
    }

    if(document.getElementById('costa').value!='costa'){
		error++;
        errorMessage+="<p>La respuesta de 海边 es errónea</p>";
        document.getElementById('costa').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('costa').classList.contains('errorInput'))
        {
            document.getElementById('costa').classList.remove('errorInput');
        }
    }

    if(document.getElementById('policia').value!='policia'){
		error++;
        errorMessage+="<p>La respuesta de 警察 es errónea</p>";
        document.getElementById('policia').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('policia').classList.contains('errorInput'))
        {
            document.getElementById('policia').classList.remove('errorInput');
        }
    }

    if(document.getElementById('anciano').value!='anciano'){
		error++;
        errorMessage+="<p>La respuesta de 老人 es errónea</p>";
        document.getElementById('anciano').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('anciano').classList.contains('errorInput'))
        {
            document.getElementById('anciano').classList.remove('errorInput');
        }
    }

    if(document.getElementById('tenis').value!='tenis'){
		error++;
        errorMessage+="<p>La respuesta de 网球 es errónea</p>";
        document.getElementById('tenis').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('tenis').classList.contains('errorInput'))
        {
            document.getElementById('tenis').classList.remove('errorInput');
        }
    }

    if(document.getElementById('resumen').value!='resumen'){
		error++;
        errorMessage+="<p>La respuesta de 总结 es errónea</p>";
        document.getElementById('resumen').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('resumen').classList.contains('errorInput'))
        {
            document.getElementById('resumen').classList.remove('errorInput');
        }
    }

    if(document.getElementById('ordenado1').value!='ordenado'){
		error++;
        errorMessage+="<p>La respuesta de 整齐 es errónea</p>";
        document.getElementById('ordenado1').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('ordenado1').classList.contains('errorInput'))
        {
            document.getElementById('ordenado1').classList.remove('errorInput');
        }
    }

    if(document.getElementById('alavanza').value!='alavanza'){
		error++;
        errorMessage+="<p>La respuesta de 表扬 es errónea</p>";
        document.getElementById('alavanza').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('alavanza').classList.contains('errorInput'))
        {
            document.getElementById('alavanza').classList.remove('errorInput');
        }
    }

    if(document.getElementById('sentimiento').value!='sentimiento'){
		error++;
        errorMessage+="<p>La respuesta de 感觉 es errónea</p>";
        document.getElementById('sentimiento').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('sentimiento').classList.contains('errorInput'))
        {
            document.getElementById('sentimiento').classList.remove('errorInput');
        }
    }

    if(document.getElementById('nivel').value!='nivel'){
		error++;
        errorMessage+="<p>La respuesta de 水平 es errónea</p>";
        document.getElementById('nivel').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('nivel').classList.contains('errorInput'))
        {
            document.getElementById('nivel').classList.remove('errorInput');
        }
    }

    if(document.getElementById('lindo').value!='lindo'){
		error++;
        errorMessage+="<p>La respuesta de 美好 es errónea</p>";
        document.getElementById('lindo').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('lindo').classList.contains('errorInput'))
        {
            document.getElementById('lindo').classList.remove('errorInput');
        }
    }

    if(document.getElementById('idioma').value!='idioma'){
		error++;
        errorMessage+="<p>La respuesta de 口语 es errónea</p>";
        document.getElementById('idioma').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('idioma').classList.contains('errorInput'))
        {
            document.getElementById('idioma').classList.remove('errorInput');
        }
    }

    if(document.getElementById('reloj').value!='reloj'){
		error++;
        errorMessage+="<p>La respuesta de 手表 es errónea</p>";
        document.getElementById('reloj').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('reloj').classList.contains('errorInput'))
        {
            document.getElementById('reloj').classList.remove('errorInput');
        }
    }

    if(document.getElementById('siempre').value!='siempre'){
		error++;
        errorMessage+="<p>La respuesta de 永远 es errónea</p>";
        document.getElementById('siempre').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('siempre').classList.contains('errorInput'))
        {
            document.getElementById('siempre').classList.remove('errorInput');
        }
    }

    if(document.getElementById('seguro').value!='seguro'){
		error++;
        errorMessage+="<p>La respuesta de 保险 es errónea</p>";
        document.getElementById('seguro').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('seguro').classList.contains('errorInput'))
        {
            document.getElementById('seguro').classList.remove('errorInput');
        }
    }

    if(document.getElementById('señorita').value!='señorita'){
		error++;
        errorMessage+="<p>La respuesta de 小姐 es errónea</p>";
        document.getElementById('señorita').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('señorita').classList.contains('errorInput'))
        {
            document.getElementById('señorita').classList.remove('errorInput');
        }
    }

    if(document.getElementById('conferencia').value!='conferencia'){
		error++;
        errorMessage+="<p>La respuesta de 讲座 es errónea</p>";
        document.getElementById('conferencia').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('conferencia').classList.contains('errorInput'))
        {
            document.getElementById('conferencia').classList.remove('errorInput');
        }
    }

    if(document.getElementById('parecido').value!='parecido'){
		error++;
        errorMessage+="<p>La respuesta de 好像 es errónea</p>";
        document.getElementById('parecido').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('parecido').classList.contains('errorInput'))
        {
            document.getElementById('parecido').classList.remove('errorInput');
        }
    }

    if(document.getElementById('regalo').value!='regalo'){
		error++;
        errorMessage+="<p>La respuesta de 礼物 es errónea</p>";
        document.getElementById('regalo').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('regalo').classList.contains('errorInput'))
        {
            document.getElementById('regalo').classList.remove('errorInput');
        }
    }

    if(document.getElementById('pensar').value!='pensar'){
		error++;
        errorMessage+="<p>La respuesta de 考虑 es errónea</p>";
        document.getElementById('pensar').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('pensar').classList.contains('errorInput'))
        {
            document.getElementById('pensar').classList.remove('errorInput');
        }
    }

    if(document.getElementById('pero').value!='pero'){
		error++;
        errorMessage+="<p>La respuesta de 可是 es errónea</p>";
        document.getElementById('pero').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('pero').classList.contains('errorInput'))
        {
            document.getElementById('pero').classList.remove('errorInput');
        }
    }

    if(document.getElementById('preparar').value!='preparar'){
		error++;
        errorMessage+="<p>La respuesta de 准备 es errónea</p>";
        document.getElementById('preparar').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('preparar').classList.contains('errorInput'))
        {
            document.getElementById('preparar').classList.remove('errorInput');
        }
    }

    if(document.getElementById('competencia').value!='competencia'){
		error++;
        errorMessage+="<p>La respuesta de 比赛 es errónea</p>";
        document.getElementById('competencia').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('competencia').classList.contains('errorInput'))
        {
            document.getElementById('competencia').classList.remove('errorInput');
        }
    }

    if(document.getElementById('esperar').value!='esperar'){
		error++;
        errorMessage+="<p>La respuesta de 等待 es errónea</p>";
        document.getElementById('esperar').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('esperar').classList.contains('errorInput'))
        {
            document.getElementById('esperar').classList.remove('errorInput');
        }
    }

    if(document.getElementById('gustar').value!='gustar'){
		error++;
        errorMessage+="<p>La respuesta de 喜欢 es errónea</p>";
        document.getElementById('gustar').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('gustar').classList.contains('errorInput'))
        {
            document.getElementById('gustar').classList.remove('errorInput');
        }
    }

    if(document.getElementById('bolsillo').value!='bolsillo'){
		error++;
        errorMessage+="<p>La respuesta de 口袋 es errónea</p>";
        document.getElementById('bolsillo').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('bolsillo').classList.contains('errorInput'))
        {
            document.getElementById('bolsillo').classList.remove('errorInput');
        }
    }

    if(document.getElementById('noche').value!='noche'){
		error++;
        errorMessage+="<p>La respuesta de 晚上 es errónea</p>";
        document.getElementById('noche').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('noche').classList.contains('errorInput'))
        {
            document.getElementById('noche').classList.remove('errorInput');
        }
    }

    if(document.getElementById('garganta').value!='garganta'){
		error++;
        errorMessage+="<p>La respuesta de 嗓子 es errónea</p>";
        document.getElementById('garganta').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('garganta').classList.contains('errorInput'))
        {
            document.getElementById('garganta').classList.remove('errorInput');
        }
    }

    if(document.getElementById('algo').value!='algo'){
		error++;
        errorMessage+="<p>La respuesta de 有的 es errónea</p>";
        document.getElementById('algo').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('algo').classList.contains('errorInput'))
        {
            document.getElementById('algo').classList.remove('errorInput');
        }
    }

    if(document.getElementById('ojo').value!='ojo'){
		error++;
        errorMessage+="<p>La respuesta de 眼睛 es errónea</p>";
        document.getElementById('ojo').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('ojo').classList.contains('errorInput'))
        {
            document.getElementById('ojo').classList.remove('errorInput');
        }
    }
    
    if(error==0){
        document.getElementById("message-第八课").innerHTML = "";
		return true;
    }
    else{
		document.getElementById("message-第八课").innerHTML= errorMessage;
		return false;
	}
}