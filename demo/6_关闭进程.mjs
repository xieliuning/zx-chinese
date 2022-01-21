let serve = $`npx serve`

for await (let chunk of serve.stdout) {
  if (chunk.includes('Accepting connections')) break
}

await $`curl http://localhost:5000`

serve.kill('SIGINT')
