import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  console.log('middleware');

  // Primero dejamos pasar la petición
  const response = await next();

  // Solo procesamos páginas HTML
  const contentType = response.headers.get('content-type');
  if (!contentType?.includes('text/html')) {
    return response;
  }

  // Obtener el inviteId de la URL actual
  const url = new URL(context.request.url);
  const inviteId = url.searchParams.get('invite');

  // Si hay un inviteId en la URL, lo dejamos pasar sin modificar
  if (inviteId) {
    return response;
  }

  // Si no hay inviteId en la URL pero existe en localStorage, lo agregamos
  const html = await response.text();

  // Inyectamos un script que se ejecutará al cargar la página
  const script = `
    <script>
      const inviteId = localStorage.getItem('inviteId');
      if (inviteId) {
        const url = new URL(window.location.href);
        url.searchParams.set('invite', inviteId);
        window.history.replaceState({}, '', url);
      }
    </script>
  `;

  // Insertamos el script justo antes del cierre del </body>
  const modifiedHtml = html.replace('</body>', `${script}</body>`);

  return new Response(modifiedHtml, {
    status: 200,
    headers: response.headers
  });
});
