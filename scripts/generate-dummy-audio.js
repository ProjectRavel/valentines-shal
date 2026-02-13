import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// Minimal valid MP3 file (silence) - this is a proper MPEG audio frame
// that Safari, Chrome, and all browsers can play
const dir = join(process.cwd(), 'public', 'music');
if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true });
}

// Minimal MP3: ID3v2 header + a single valid MPEG audio frame of silence
// This produces a ~0.5s silent MP3 that all browsers including Safari support
const id3Header = Buffer.from([
  0x49, 0x44, 0x33, // "ID3"
  0x03, 0x00,       // version 2.3
  0x00,             // no flags
  0x00, 0x00, 0x00, 0x00 // size = 0
]);

// Valid MPEG Audio Layer 3 frame header for silence
// Sync: FFE3 = MPEG1 Layer3, 128kbps, 44100Hz, stereo
const frameHeader = Buffer.from([0xFF, 0xFB, 0x90, 0x00]);
const frameData = Buffer.alloc(413, 0); // rest of frame is silence

// Repeat frames to make ~2 seconds of silence
const frames = [];
for (let i = 0; i < 80; i++) {
  frames.push(frameHeader, frameData);
}

const mp3 = Buffer.concat([id3Header, ...frames]);
const filePath = join(dir, 'valentine.mp3');
writeFileSync(filePath, mp3);
console.log('Created dummy MP3 at', filePath, '- size:', mp3.length, 'bytes');
