title.textContent = 'Emoji Gallery'

let $emoji = document.getElementById('emoji')
let emoji = ``

for (let i = 129409; i <= 129472; i++) {
  emoji = emoji + `<p style="text-align: center;"><span style="font-size: 5rem;">&#${i}</span><br><code>${i}</code></p>`
}

$emoji.innerHTML = emoji