function validate4()
{
    var error=0;
    var errorMessage ='';

    if(document.getElementById('manzana').value!='manzana'){
		error++;
        errorMessage+="<p>La respuesta de 苹果 es errónea</p>";
        document.getElementById('manzana').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('manzana').classList.contains('errorInput'))
        {
            document.getElementById('manzana').classList.remove('errorInput');
        }
    }

    if(document.getElementById('banana').value!='banana'){
		error++;
        errorMessage+="<p>La respuesta de 香蕉 es errónea</p>";
        document.getElementById('banana').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('banana').classList.contains('errorInput'))
        {
            document.getElementById('banana').classList.remove('errorInput');
        }
    }

    if(document.getElementById('sandia').value!='sandia'){
		error++;
        errorMessage+="<p>La respuesta de 西瓜 es errónea</p>";
        document.getElementById('sandia').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('sandia').classList.contains('errorInput'))
        {
            document.getElementById('sandia').classList.remove('errorInput');
        }
    }

    if(document.getElementById('uvas').value!='uvas'){
		error++;
        errorMessage+="<p>La respuesta de 葡萄 es errónea</p>";
        document.getElementById('uvas').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('uvas').classList.contains('errorInput'))
        {
            document.getElementById('uvas').classList.remove('errorInput');
        }
    }

    if(document.getElementById('mandarina').value!='mandarina'){
		error++;
        errorMessage+="<p>La respuesta de 桔子 es errónea</p>";
        document.getElementById('mandarina').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('mandarina').classList.contains('errorInput'))
        {
            document.getElementById('mandarina').classList.remove('errorInput');
        }
    }

    if(document.getElementById('cereza').value!='cereza'){
		error++;
        errorMessage+="<p>La respuesta de 樱桃 es errónea</p>";
        document.getElementById('cereza').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('cereza').classList.contains('errorInput'))
        {
            document.getElementById('cereza').classList.remove('errorInput');
        }
    }

    if(document.getElementById('frutilla').value!='frutilla'){
		error++;
        errorMessage+="<p>La respuesta de 草莓 es errónea</p>";
        document.getElementById('frutilla').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('frutilla').classList.contains('errorInput'))
        {
            document.getElementById('frutilla').classList.remove('errorInput');
        }
    }    

    if(document.getElementById('limon').value!='limon'){
		error++;
        errorMessage+="<p>La respuesta de 柠檬 es errónea</p>";
        document.getElementById('limon').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('limon').classList.contains('errorInput'))
        {
            document.getElementById('limon').classList.remove('errorInput');
        }
    }

    if(document.getElementById('casaFamilia').value!='casa/familia'){
		error++;
        errorMessage+="<p>La respuesta de 家 es errónea</p>";
        document.getElementById('casaFamilia').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('casaFamilia').classList.contains('errorInput'))
        {
            document.getElementById('casaFamilia').classList.remove('errorInput');
        }
    }

    if(document.getElementById('aMenudo').value!='a menudo'){
		error++;
        errorMessage+="<p>La respuesta de 常常 es errónea</p>";
        document.getElementById('aMenudo').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('aMenudo').classList.contains('errorInput'))
        {
            document.getElementById('aMenudo').classList.remove('errorInput');
        }
    }

    if(document.getElementById('manuscrito').value!='manuscrito'){
		error++;
        errorMessage+="<p>La respuesta de 草稿本 es errónea</p>";
        document.getElementById('manuscrito').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('manuscrito').classList.contains('errorInput'))
        {
            document.getElementById('manuscrito').classList.remove('errorInput');
        }
    }

    if(document.getElementById('comprarFruta').value!='comprar fruta'){
		error++;
        errorMessage+="<p>La respuesta de 买水果 es errónea</p>";
        document.getElementById('comprarFruta').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('comprarFruta').classList.contains('errorInput'))
        {
            document.getElementById('comprarFruta').classList.remove('errorInput');
        }
    }

    if(document.getElementById('productoViejo').value!='producto viejo'){
		error++;
        errorMessage+="<p>La respuesta de 老产品 es errónea</p>";
        document.getElementById('productoViejo').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('productoViejo').classList.contains('errorInput'))
        {
            document.getElementById('productoViejo').classList.remove('errorInput');
        }
    }

    if(document.getElementById('comprarReloj').value!='comprar reloj'){
		error++;
        errorMessage+="<p>La respuesta de 买手表 es errónea</p>";
        document.getElementById('comprarReloj').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('comprarReloj').classList.contains('errorInput'))
        {
            document.getElementById('comprarReloj').classList.remove('errorInput');
        }
    }

    if(document.getElementById('poderComprar').value!='poder comprar'){
		error++;
        errorMessage+="<p>La respuesta de 可以买 es errónea</p>";
        document.getElementById('poderComprar').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('poderComprar').classList.contains('errorInput'))
        {
            document.getElementById('poderComprar').classList.remove('errorInput');
        }
    }

    if(document.getElementById('pequenioDuenio').value!='pequeño dueño'){
		error++;
        errorMessage+="<p>La respuesta de 小老板 es errónea</p>";
        document.getElementById('pequenioDuenio').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('pequenioDuenio').classList.contains('errorInput'))
        {
            document.getElementById('pequenioDuenio').classList.remove('errorInput');
        }
    }

    if(document.getElementById('lecturaManuscrito').value!='lectura de manuscrito'){
		error++;
        errorMessage+="<p>La respuesta de 讲演稿 es errónea</p>";
        document.getElementById('lecturaManuscrito').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('lecturaManuscrito').classList.contains('errorInput'))
        {
            document.getElementById('lecturaManuscrito').classList.remove('errorInput');
        }
    }

    if(document.getElementById('liquidacionProducto').value!='liquidacion de producto'){
		error++;
        errorMessage+="<p>La respuesta de 处理品 es errónea</p>";
        document.getElementById('liquidacionProducto').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('liquidacionProducto').classList.contains('errorInput'))
        {
            document.getElementById('liquidacionProducto').classList.remove('errorInput');
        }
    }

    if(document.getElementById('personaValiente').value!='persona valiente'){
		error++;
        errorMessage+="<p>La respuesta de 勇敢者 es errónea</p>";
        document.getElementById('personaValiente').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('personaValiente').classList.contains('errorInput'))
        {
            document.getElementById('personaValiente').classList.remove('errorInput');
        }
    }

    if(document.getElementById('escribirAutocritica').value!='escribir autocritica'){
		error++;
        errorMessage+="<p>La respuesta de 写检讨 es errónea</p>";
        document.getElementById('escribirAutocritica').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('escribirAutocritica').classList.contains('errorInput'))
        {
            document.getElementById('escribirAutocritica').classList.remove('errorInput');
        }
    }

    if(document.getElementById('museo').value!='museo'){
		error++;
        errorMessage+="<p>La respuesta de 展览馆 es errónea</p>";
        document.getElementById('museo').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('museo').classList.contains('errorInput'))
        {
            document.getElementById('museo').classList.remove('errorInput');
        }
    }

    if(document.getElementById('plaza').value!='plaza'){
		error++;
        errorMessage+="<p>La respuesta de 广场里 es errónea</p>";
        document.getElementById('plaza').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('plaza').classList.contains('errorInput'))
        {
            document.getElementById('plaza').classList.remove('errorInput');
        }
    }

    if(document.getElementById('bailarFolclore').value!='bailar folclore'){
		error++;
        errorMessage+="<p>La respuesta de 古典舞 es errónea</p>";
        document.getElementById('bailarFolclore').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('bailarFolclore').classList.contains('errorInput'))
        {
            document.getElementById('bailarFolclore').classList.remove('errorInput');
        }
    }

    if(document.getElementById('perteneceCaballo').value!='pertenece caballo'){
		error++;
        errorMessage+="<p>La respuesta de  我属马 es errónea</p>";
        document.getElementById('perteneceCaballo').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('perteneceCaballo').classList.contains('errorInput'))
        {
            document.getElementById('perteneceCaballo').classList.remove('errorInput');
        }
    }

    if(document.getElementById('escribirImpresion').value!='escribir impresion'){
		error++;
        errorMessage+="<p>La respuesta de 写感想 es errónea</p>";
        document.getElementById('escribirImpresion').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('escribirImpresion').classList.contains('errorInput'))
        {
            document.getElementById('escribirImpresion').classList.remove('errorInput');
        }
    }
    
    if(error==0){
        document.getElementById("message-第十二课").innerHTML = "";
		return true;
    }
    else{
		document.getElementById("message-第十二课").innerHTML= errorMessage;
		return false;
	}
}