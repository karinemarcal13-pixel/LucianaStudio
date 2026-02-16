// Inicializar mapa quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    inicializarMapa();
    setupFormulario();
    setupNavegacao();
});

// Inicializar Leaflet Map
function inicializarMapa() {
    // Coordenadas de Londrina, PR
    const latitudePadrao = -23.3097;
    const longitudePadrao = -51.1626;
    
    const mapa = L.map('mapa').setView([latitudePadrao, longitudePadrao], 15);
    
    // Adicionar camada de mapa (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
    }).addTo(mapa);
    
    // Adicionar marcador
    const marcador = L.marker([latitudePadrao, longitudePadrao]).addTo(mapa);
    marcador.bindPopup(
        '<div style="text-align: center;"><strong>Luciana Silva</strong><br>' +
        'Rua Piauí, 106 - Sala 6<br>Londrina - PR<br>' +
        '<a href="tel:+5543996464439" style="color: #E91E63;">Ligar</a> | ' +
        '<a href="https://wa.me/5543996464439" style="color: #25D366;">WhatsApp</a></div>'
    );
    
    // Personalizar ícone do marcador com cores rosa
    const iconeRosa = L.icon({
        iconUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23E91E63" width="32" height="32"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
    
    marcador.setIcon(iconeRosa);
}

// Setup do Formulário
function setupFormulario() {
    const form = document.getElementById('formAgendamento');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const servico = document.getElementById('servico').value;
            const data = document.getElementById('data').value;
            const hora = document.getElementById('hora').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Validação
            if (!nome || !email || !telefone || !servico || !data || !hora) {
                alert('Por favor, preencha todos os campos obrigatórios!');
                return;
            }
            
            // Preparar mensagem para WhatsApp
            const mensagemWhatsApp = encodeURIComponent(
                `Olá Luciana,\n\n` +
                `Gostaria de agendar um atendimento:\n\n` +
                `Nome: ${nome}\n` +
                `Email: ${email}\n` +
                `Telefone: ${telefone}\n` +
                `Serviço: ${servico}\n` +
                `Data: ${formatarData(data)}\n` +
                `Hora: ${hora}\n` +
                `${mensagem ? `Observação: ${mensagem}` : ''}\n\n` +
                `Obrigado!`
            );
            
            // Redirecionar para WhatsApp
            window.open(`https://wa.me/5511999999999?text=${mensagemWhatsApp}`, '_blank');
            
            // Limpar formulário
            form.reset();
            
            // Mostrar mensagem de sucesso
            mostrarMensagemSucesso();
        });
    }
    
    // Validação em tempo real para o telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let valor = e.target.value.replace(/\D/g, '');
            if (valor.length > 11) {
                valor = valor.slice(0, 11);
            }
            
            // Formatar como (11) 99999-9999
            if (valor.length <= 2) {
                e.target.value = valor;
            } else if (valor.length <= 6) {
                e.target.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
            } else {
                e.target.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
            }
        });
    }
}

// Configurar navegação com scroll suave
function setupNavegacao() {
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remover classe ativa de todos os links
            links.forEach(l => l.classList.remove('active'));
            
            // Adicionar classe ativa ao link clicado
            this.classList.add('active');
        });
    });
    
    // Atualizar link ativo ao scrollar
    window.addEventListener('scroll', function() {
        let current = '';
        
        const sections = document.querySelectorAll('section, header');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        links.forEach(link => {
            link.classList.remove('active');
        });
        
        if (current) {
            const activeLink = document.querySelector(`.nav-link[href="#${current}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Função para formatar data
function formatarData(dataString) {
    const opcoes = { year: 'numeric', month: 'long', day: 'numeric', locale: 'pt-BR' };
    const data = new Date(dataString + 'T00:00:00');
    return data.toLocaleDateString('pt-BR', opcoes);
}

// Função para mostrar mensagem de sucesso
function mostrarMensagemSucesso() {
    const mensagem = document.createElement('div');
    mensagem.className = 'mensagem-sucesso';
    mensagem.innerHTML = `
        <div class="mensagem-conteudo">
            <i class="fas fa-check-circle"></i>
            <p>Agendamento enviado com sucesso!</p>
            <small>Você será redirecionado ao WhatsApp para confirmar.</small>
        </div>
    `;
    
    // Estilos CSS para a mensagem
    mensagem.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 10px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(mensagem);
    
    // Remover mensagem após 4 segundos
    setTimeout(function() {
        mensagem.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(function() {
            document.body.removeChild(mensagem);
        }, 500);
    }, 4000);
}

// Adicionar animações CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(400px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(400px);
        }
    }
    
    .mensagem-conteudo {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .mensagem-conteudo i {
        font-size: 1.5rem;
        flex-shrink: 0;
    }
    
    .mensagem-conteudo p {
        margin: 0;
        font-weight: 600;
    }
    
    .mensagem-conteudo small {
        display: block;
        opacity: 0.9;
        margin-top: 0.3rem;
    }
`;
document.head.appendChild(style);

// Função para rolar até uma seção
function rolarPara(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
    }
}

// Exportar funções para uso global
window.rolarPara = rolarPara;
