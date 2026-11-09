# Victor Medeiros · Meus links

Página estática responsiva em português. HTML, CSS e JavaScript, sem dependências de execução ou etapa de build.

## Prévia local

Com Node.js instalado, execute `npm run dev` e abra http://127.0.0.1:3000.

## Personalizar

- Edite nome, biografia e links em `profile.js`.
- URLs vazias aparecem como **Em breve**, sem links falsos. Preencha os endereços completos para ativar os cartões.
- Para adicionar a foto, salve-a em `assets/` e configure `avatarUrl` em `profile.js`, por exemplo `/assets/perfil.webp`. Se a imagem falhar, as iniciais continuam visíveis.
- Ajuste cores e layout em `style.css`. As fontes do Google Fonts são opcionais; há fontes de sistema como alternativa.
- Ao mudar a identidade, revise também os metadados em `index.html`.

## Vercel

Importe este repositório, selecione **Other** como framework, mantenha a raiz do projeto e deixe os comandos de instalação e build vazios. A pasta de saída é `.` conforme `vercel.json`. Não precisa de variáveis de ambiente.

## Verificação

`npm run check` verifica a sintaxe dos arquivos JavaScript. O compartilhamento usa a opção nativa do dispositivo ou copia a URL, quando o navegador permite.
