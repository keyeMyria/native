import fs from 'fs'
import path from 'path'

const MOCKS_DIR = path.resolve(__dirname, '../__mocks__')

fs.readdirSync(MOCKS_DIR).map((filename) => {
  jest.mock(filename.replace(/\.[^/.]+$/, ''))
})
