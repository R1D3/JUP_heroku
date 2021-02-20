import { Howl } from 'howler'
import _success from '../Sounds/succes.mp3'
import _lose from '../Sounds/lose.mp3'
import _home from '../Sounds/home.ogg'
import _game from '../Sounds/game.ogg'
import _end from '../Sounds/end.ogg'
import _win from '../Sounds/isNotRunning.mp3'
import _levelUp from '../Sounds/levelup.mp3'

let lastAudio

export function playMusic (path, needToBePlayed) {
  stopLastAudio()
  if (needToBePlayed) {
    const music = musicByPatch[path]
    music.play()
    lastAudio = music
  } else if (!needToBePlayed) {
    win.play()
    lastAudio = win
  }
}

export const success = new Howl({
  src: _success,
  volume: 0.5
})

export const lose = new Howl({
  src: _lose,
  volume: 0.7
})

export const levelUp = new Howl({
  src: _levelUp,
  volume: 0.2
})

function stopLastAudio () {
  if (!lastAudio) return
  lastAudio.stop()
}

const win = new Howl({
  src: _win,
  volume: 0.1
})

const home = new Howl({
  src: _home,
  volume: 0.1,
  loop: true
})

const game = new Howl({
  src: _game,
  loop: true,
  volume: 0.1
})

const end = new Howl({
  src: _end,
  loop: true,
  volume: 0.1
})

const musicByPatch = {
  home,
  game,
  end
}
