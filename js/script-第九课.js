function validate1()
{
    var error=0;
    var errorMessage ='';

    if(document.getElementById('profesor-maestro').value!='profesor/maestro'){
		error++;
        errorMessage+="<p>La respuesta de 教师 es errónea</p>";
        document.getElementById('profesor-maestro').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('profesor-maestro').classList.contains('errorInput'))
        {
            document.getElementById('profesor-maestro').classList.remove('errorInput');
        }
    }

    if(document.getElementById('ingeniero').value!='ingeniero'){
		error++;
        errorMessage+="<p>La respuesta de 工程师 es errónea</p>";
        document.getElementById('ingeniero').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('ingeniero').classList.contains('errorInput'))
        {
            document.getElementById('ingeniero').classList.remove('errorInput');
        }
    }

    if(document.getElementById('gerente').value!='gerente'){
		error++;
        errorMessage+="<p>La respuesta de 经理 es errónea</p>";
        document.getElementById('gerente').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('gerente').classList.contains('errorInput'))
        {
            document.getElementById('gerente').classList.remove('errorInput');
        }
    }

    if(document.getElementById('abogado').value!='abogado'){
		error++;
        errorMessage+="<p>La respuesta de 律师 es errónea</p>";
        document.getElementById('abogado').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('abogado').classList.contains('errorInput'))
        {
            document.getElementById('abogado').classList.remove('errorInput');
        }
    }

    if(document.getElementById('periodista').value!='periodista'){
		error++;
        errorMessage+="<p>La respuesta de 记者 es errónea</p>";
        document.getElementById('periodista').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('periodista').classList.contains('errorInput'))
        {
            document.getElementById('periodista').classList.remove('errorInput');
        }
    }

    if(document.getElementById('editor').value!='editor'){
		error++;
        errorMessage+="<p>La respuesta de 编辑 es errónea</p>";
        document.getElementById('editor').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('editor').classList.contains('errorInput'))
        {
            document.getElementById('editor').classList.remove('errorInput');
        }
    }

    if(document.getElementById('actor').value!='actor'){
		error++;
        errorMessage+="<p>La respuesta de 演员 es errónea</p>";
        document.getElementById('actor').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('actor').classList.contains('errorInput'))
        {
            document.getElementById('actor').classList.remove('errorInput');
        }
    }

    if(document.getElementById('funcionario').value!='funcionario'){
		error++;
        errorMessage+="<p>La respuesta de 公务员 es errónea</p>";
        document.getElementById('funcionario').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('funcionario').classList.contains('errorInput'))
        {
            document.getElementById('funcionario').classList.remove('errorInput');
        }
    }

    if(document.getElementById('atleta').value!='atleta'){
		error++;
        errorMessage+="<p>La respuesta de 运动员 es errónea</p>";
        document.getElementById('atleta').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('atleta').classList.contains('errorInput'))
        {
            document.getElementById('atleta').classList.remove('errorInput');
        }
    }

    if(document.getElementById('empleado').value!='empleado'){
		error++;
        errorMessage+="<p>La respuesta de 职员 es errónea</p>";
        document.getElementById('empleado').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('empleado').classList.contains('errorInput'))
        {
            document.getElementById('empleado').classList.remove('errorInput');
        }
    }

    if(document.getElementById('serio').value!='serio'){
		error++;
        errorMessage+="<p>La respuesta de 认真 es errónea</p>";
        document.getElementById('serio').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('serio').classList.contains('errorInput'))
        {
            document.getElementById('serio').classList.remove('errorInput');
        }
    }

    if(document.getElementById('pan').value!='pan'){
		error++;
        errorMessage+="<p>La respuesta de 面包 es errónea</p>";
        document.getElementById('pan').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('pan').classList.contains('errorInput'))
        {
            document.getElementById('pan').classList.remove('errorInput');
        }
    }

    if(document.getElementById('lamparaElectrica').value!='lampara electrica'){
		error++;
        errorMessage+="<p>La respuesta de 电灯 es errónea</p>";
        document.getElementById('lamparaElectrica').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('lamparaElectrica').classList.contains('errorInput'))
        {
            document.getElementById('lamparaElectrica').classList.remove('errorInput');
        }
    }

    if(document.getElementById('salud').value!='salud'){
		error++;
        errorMessage+="<p>La respuesta de 健康 es errónea</p>";
        document.getElementById('salud').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('salud').classList.contains('errorInput'))
        {
            document.getElementById('salud').classList.remove('errorInput');
        }
    }

    if(document.getElementById('buzon').value!='buzon'){
		error++;
        errorMessage+="<p>La respuesta de 信箱 es errónea</p>";
        document.getElementById('buzon').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('buzon').classList.contains('errorInput'))
        {
            document.getElementById('buzon').classList.remove('errorInput');
        }
    }

    if(document.getElementById('efectuar').value!='efectuar'){
		error++;
        errorMessage+="<p>La respuesta de 进行 es errónea</p>";
        document.getElementById('efectuar').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('efectuar').classList.contains('errorInput'))
        {
            document.getElementById('efectuar').classList.remove('errorInput');
        }
    }

    if(document.getElementById('texto').value!='texto'){
		error++;
        errorMessage+="<p>La respuesta de 课文 es errónea</p>";
        document.getElementById('texto').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('texto').classList.contains('errorInput'))
        {
            document.getElementById('texto').classList.remove('errorInput');
        }
    }

    if(document.getElementById('realidad').value!='realidad'){
		error++;
        errorMessage+="<p>La respuesta de 现实 es errónea</p>";
        document.getElementById('realidad').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('realidad').classList.contains('errorInput'))
        {
            document.getElementById('realidad').classList.remove('errorInput');
        }
    }

    if(document.getElementById('caliente').value!='caliente'){
		error++;
        errorMessage+="<p>La respuesta de 热成 es errónea</p>";
        document.getElementById('caliente').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('caliente').classList.contains('errorInput'))
        {
            document.getElementById('caliente').classList.remove('errorInput');
        }
    }

    if(document.getElementById('practica').value!='practica'){
		error++;
        errorMessage+="<p>La respuesta de 练习 es errónea</p>";
        document.getElementById('practica').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('practica').classList.contains('errorInput'))
        {
            document.getElementById('practica').classList.remove('errorInput');
        }
    }

    if(document.getElementById('investigar').value!='investigar'){
		error++;
        errorMessage+="<p>La respuesta de 调查 es errónea</p>";
        document.getElementById('investigar').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('investigar').classList.contains('errorInput'))
        {
            document.getElementById('investigar').classList.remove('errorInput');
        }
    }

    if(document.getElementById('teatro').value!='teatro'){
		error++;
        errorMessage+="<p>La respuesta de 剧场 es errónea</p>";
        document.getElementById('teatro').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('teatro').classList.contains('errorInput'))
        {
            document.getElementById('teatro').classList.remove('errorInput');
        }
    }

    if(document.getElementById('decano').value!='decano'){
		error++;
        errorMessage+="<p>La respuesta de  院长 es errónea</p>";
        document.getElementById('decano').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('decano').classList.contains('errorInput'))
        {
            document.getElementById('decano').classList.remove('errorInput');
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

    if(document.getElementById('mercado').value!='mercado'){
		error++;
        errorMessage+="<p>La respuesta de 市场 es errónea</p>";
        document.getElementById('mercado').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('mercado').classList.contains('errorInput'))
        {
            document.getElementById('mercado').classList.remove('errorInput');
        }
    }

    if(document.getElementById('pelicula').value!='pelicula'){
		error++;
        errorMessage+="<p>La respuesta de 电影 es errónea</p>";
        document.getElementById('pelicula').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('pelicula').classList.contains('errorInput'))
        {
            document.getElementById('pelicula').classList.remove('errorInput');
        }
    }

    if(document.getElementById('odiarDolor').value!='odiar el dolor'){
		error++;
        errorMessage+="<p>La respuesta de 痛恨 es errónea</p>";
        document.getElementById('odiarDolor').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('odiarDolor').classList.contains('errorInput'))
        {
            document.getElementById('odiarDolor').classList.remove('errorInput');
        }
    }

    if(document.getElementById('todaCosa').value!='todas las cosas'){
		error++;
        errorMessage+="<p>La respuesta de 万物 es errónea</p>";
        document.getElementById('todaCosa').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('todaCosa').classList.contains('errorInput'))
        {
            document.getElementById('todaCosa').classList.remove('errorInput');
        }
    }

    if(document.getElementById('miedo').value!='miedo'){
		error++;
        errorMessage+="<p>La respuesta de 畏惧 es errónea</p>";
        document.getElementById('miedo').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('miedo').classList.contains('errorInput'))
        {
            document.getElementById('miedo').classList.remove('errorInput');
        }
    }

    if(document.getElementById('darServicio').value!='dar servicio a'){
		error++;
        errorMessage+="<p>La respuesta de 效力 es errónea</p>";
        document.getElementById('darServicio').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('darServicio').classList.contains('errorInput'))
        {
            document.getElementById('darServicio').classList.remove('errorInput');
        }
    }

    if(document.getElementById('voluntario').value!='voluntario'){
		error++;
        errorMessage+="<p>La respuesta de 志愿 es errónea</p>";
        document.getElementById('voluntario').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('voluntario').classList.contains('errorInput'))
        {
            document.getElementById('voluntario').classList.remove('errorInput');
        }
    }

    if(document.getElementById('ordenado2').value!='ordenado'){
		error++;
        errorMessage+="<p>La respuesta de 秩序 es errónea</p>";
        document.getElementById('ordenado2').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('ordenado2').classList.contains('errorInput'))
        {
            document.getElementById('ordenado2').classList.remove('errorInput');
        }
    }

    if(document.getElementById('llave').value!='llave'){
		error++;
        errorMessage+="<p>La respuesta de 钥匙 es errónea</p>";
        document.getElementById('llave').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('llave').classList.contains('errorInput'))
        {
            document.getElementById('llave').classList.remove('errorInput');
        }
    }

    if(document.getElementById('luna').value!='luna'){
		error++;
        errorMessage+="<p>La respuesta de 月亮 es errónea</p>";
        document.getElementById('luna').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('luna').classList.contains('errorInput'))
        {
            document.getElementById('luna').classList.remove('errorInput');
        }
    }

    if(document.getElementById('cuento').value!='cuento'){
		error++;
        errorMessage+="<p>La respuesta de 故事 es errónea</p>";
        document.getElementById('cuento').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('cuento').classList.contains('errorInput'))
        {
            document.getElementById('cuento').classList.remove('errorInput');
        }
    }

    if(document.getElementById('sol').value!='sol'){
		error++;
        errorMessage+="<p>La respuesta de 太阳 es errónea</p>";
        document.getElementById('sol').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('sol').classList.contains('errorInput'))
        {
            document.getElementById('sol').classList.remove('errorInput');
        }
    }

    if(document.getElementById('tarea').value!='tarea'){
		error++;
        errorMessage+="<p>La respuesta de 任务 es errónea</p>";
        document.getElementById('tarea').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('tarea').classList.contains('errorInput'))
        {
            document.getElementById('tarea').classList.remove('errorInput');
        }
    }

    if(document.getElementById('conejo').value!='conejo'){
		error++;
        errorMessage+="<p>La respuesta de 兔子 es errónea</p>";
        document.getElementById('conejo').classList.add('errorInput');
    }
    else
    {
        if(document.getElementById('conejo').classList.contains('errorInput'))
        {
            document.getElementById('conejo').classList.remove('errorInput');
        }
    }
    
    if(error==0){
        document.getElementById("message-第九课").innerHTML = "";
		return true;
    }
    else{
		document.getElementById("message-第九课").innerHTML= errorMessage;
		return false;
	}
}