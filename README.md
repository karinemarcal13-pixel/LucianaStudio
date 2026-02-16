# Site de Agendamento - Luciana Silva

Um site moderno e responsivo para agendamento de serviços com design elegante em rosa e branco.

## 🎨 Características

✨ **Design Profissional**
- Paleta de cores rosa e branca
- Logo placeholder (ícone de spa)
- Responsivo para todos os dispositivos
- Animações suaves

🗺️ **Mapa Interativo**
- Integração com Leaflet.js
- Marcador customizado com localização
- Popup com informações de contato

📱 **WhatsApp Integrado**
- Botão flutuante no canto da página
- Links diretos para WhatsApp
- Formulário que envia agendamento via WhatsApp

📋 **Formulário de Agendamento**
- Validação em tempo real
- Formatação automática de telefone
- Campos obrigatórios
- Integração com WhatsApp

## 🚀 Como Usar

### 1. Abrir o Site
Abra o arquivo `index.html` em seu navegador.

### 2. Personalizar Informações

**Alterar número de WhatsApp:**
- No arquivo `index.html`, procure por `5511999999999` e substitua pelo seu número
- Formato: `55` (código do Brasil) + DDD + número (sem traços)

**Alterar Endereço:**
- Procure por "Rua das Flores, 123" e altere para seu endereço
- Procure por "São Paulo - SP" e altere para sua cidade

**Alterar Localização do Mapa:**
- No arquivo `script.js`, procure por:
  ```javascript
  const latitudePadrao = -23.5505;
  const longitudePadrao = -46.6333;
  ```
- Substitua pelas coordenadas de sua localização
- (Você pode encontrar coordenadas em: https://www.google.com/maps)

**Alterar Telefone:**
- Procure por `(11) 99999-9999` e substitua pelo seu telefone

**Alterar Email:**
- Procure por `contato@lucianasilva.com` e substitua pelo seu email

**Adicionar Logo Personalizado:**
- Substitua o placeholder (ícone de spa) criando um logo em SVG ou PNG
- Altere a classe `.logo-placeholder` no CSS ou crie uma `<img>` tag

### 3. Personalizar Cores

Se quiser mudar as cores, edite as variáveis no início do `styles.css`:

```css
:root {
    --primary-pink: #E91E63;      /* Rosa principal */
    --light-pink: #F48FB1;        /* Rosa claro */
    --pale-pink: #FCE4EC;         /* Rosa muito claro */
    --white: #FFFFFF;             /* Branco */
    --dark-gray: #333333;         /* Cinza escuro */
    --light-gray: #F5F5F5;        /* Cinza claro */
}
```

## 📝 Estrutura de Arquivos

```
KM/
├── index.html        # Página HTML principal
├── styles.css        # Estilos CSS
├── script.js         # Funcionalidades JavaScript
├── README.md         # Este arquivo
└── IMPORTANTE.txt    # Arquivo de notas
```

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura
- **CSS3** - Estilos e animações
- **JavaScript (Vanilla)** - Interatividade
- **Leaflet.js** - Mapa interativo
- **Font Awesome** - Ícones
- **OpenStreetMap** - Camada de mapa

## 📞 Funcionalidades Principais

### Botão WhatsApp Flutuante
- Botão sempre visível no canto inferior direito
- Anima com pulse e aumenta ao passar o mouse
- Abre conversa no WhatsApp

### Formulário de Agendamento
- Coleta dados do cliente
- Valida campos obrigatórios
- Envia mensagem automática ao WhatsApp
- Mostra confirmação após envio

### Navegação
- Menu sticky (fixo ao scrollar)
- Links de navegação suave
- Indicador ativo de seção atual
- Responsivo em dispositivos móveis

### Seções
1. **Header** - Logo e navegação
2. **Hero** - Chamada principal
3. **Serviços** - Características dos atendimentos
4. **Localização** - Mapa e informações de contato
5. **Agendamento** - Formulário de agendamento
6. **Contato** - Links rápidos (WhatsApp, Telefone, Email)
7. **Footer** - Créditos

## 📱 Responsividade

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

Todos os elementos se adaptam automaticamente aos diferentes tamanhos de tela.

## 🎯 Dicas de Otimização

1. **Adicione uma logo real:**
   - Crie uma pasta `assets/` e adicione `logo.png`
   - Altere o placeholder por uma `<img>`

2. **Customize os serviços:**
   - Edite os 4 cards de serviços conforme seus atendimentos

3. **Adicione fotos:**
   - Crie um seção "Galeria" com suas melhores fotos

4. **Implemente backlog:**
   - Conecte o formulário a um backend para salvar agendamentos

5. **SEO:**
   - Adicione meta tags (description, keywords)
   - Configure Google Analytics

## 📧 Suporte

Para dúvidas sobre personalização, consulte a documentação das bibliotecas:
- Leaflet.js: https://leafletjs.com/
- Font Awesome: https://fontawesome.com/
- MDN Web Docs: https://developer.mozilla.org/

---

**Desenvolvido com ❤️ para seu bem-estar**
