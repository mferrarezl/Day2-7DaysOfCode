    function enviar() {
        const nome = document.getElementById('nome');
        const idade = document.getElementById('idade');
        const gamer = document.getElementById('gamer');
        //const naogamer = document.getElementById('naogamer');
        //const btn = document.getElementById('button');
    
        const msg1 = `Olá, ${nome.value}! Você tem ${idade.value} anos e já faz parte da Gamer Health!`;
        const msg2 = `Olá, ${nome.value}! Você tem ${idade.value} anos e ainda não faz parte da Gamer Health!`
        const msg3 = `Por favor, preencha todos os campos antes de enviar.`;
        
            if (nome.value == "" || idade.value == "") {
                alert (msg3);
            } else {
                verificaCliente();
            }
    
        function verificaCliente() {
            if (document.getElementById('simgamer').checked) {
                alert (msg1);
            }
            if (document.getElementById('naogamer').checked) {
                alert (msg2);
            }
        }
    }

    