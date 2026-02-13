// Generate a minimal valid MP3 file as a placeholder
// This creates a very short silent MP3 that browsers can play
import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

// Minimal valid MP3 frame (silent, 128kbps, 44100Hz, stereo)
// MPEG1 Layer 3, 128kbps, 44100Hz, Joint Stereo
const header = Buffer.from([
  0xFF, 0xFB, 0x90, 0x00, // MPEG1, Layer 3, 128kbps, 44100Hz
])

// Create a ~2 second silent MP3 by repeating frames
const frameSize = 417 // bytes per frame at 128kbps/44100Hz
const framesNeeded = 76 // ~2 seconds worth
const frame = Buffer.alloc(frameSize, 0)
frame[0] = 0xFF
frame[1] = 0xFB
frame[2] = 0x90
frame[3] = 0x00

const frames = []
for (let i = 0; i < framesNeeded; i++) {
  frames.push(Buffer.from(frame))
}

const mp3 = Buffer.concat(frames)

const dir = join(process.cwd(), 'public', 'music')
mkdirSync(dir, { recursive: true })
writeFileSync(join(dir, 'valentine.mp3'), mp3)

console.log(`Created dummy MP3 at public/music/valentine.mp3 (${mp3.length} bytes)`)
console.log('Replace this file with your actual music file later!')
