export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #09070f; color: #f2f0f7; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2.25rem; background: #120d1e; border: 1px solid #231a38; border-radius: 1.5rem; box-shadow: 0 20px 40px -15px rgba(0,0,0,0.7); }
      h1 { font-size: 1.35rem; margin: 0 0 0.5rem; color: #f2f0f7; font-weight: 700; }
      p { color: #9b91ad; margin: 0 0 1.5rem; line-height: 1.6; }
      .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.6rem 1.25rem; border-radius: 9999px; font: inherit; font-size: 0.875rem; font-weight: 600; cursor: pointer; text-decoration: none; border: 1px solid transparent; transition: all 0.2s ease; }
      .primary { background: #a78bfa; color: #09070f; }
      .primary:hover { background: #9061f9; }
      .secondary { background: #1a132b; color: #f2f0f7; border-color: #231a38; }
      .secondary:hover { border-color: #a78bfa; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
