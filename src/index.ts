// src/index.ts
import * as fs from 'fs'
import * as path from 'path'
import { Config, User, LogLevel, LogFunction } from './myApp'

const isPkg = process.pkg !== undefined && process.pkg !== null
// debugger
const basePath = isPkg ? path.dirname(process.execPath) : `${__dirname}\\config`
const configPath = path.join(basePath, 'config.json')
let configData: any = {}

try {
  const rawData = fs.readFileSync(configPath, 'utf-8')
  configData = JSON.parse(rawData)
  console.log('✅ 설정파일 읽음:', configData)
} catch (error) {
  console.error('❌ 설정파일 읽기 실패:', error)
}

// process.pkg 사용 (NodeJS namespace 확장 활용)
if (process.pkg) {
  console.log('Running as packaged executable')
}

// 커스텀 MyApp namespace 사용
const config: Config = {
  appName: 'My TypeScript App',
  version: '1.0.0',
  debug: true,
  features: {
    enableLogging: true,
    enableCache: false,
  },
}

// 사용자 정의 타입 사용
const currentUser: User = {
  id: 1,
  name: '홍길동',
  email: 'hong@example.com',
  roles: ['admin', 'user'],
}

// 열거형 사용
function logMessage(message: string, level: LogLevel = LogLevel.INFO): void {
  const prefix = LogLevel[level]
  console.log(`[${prefix}] ${message}`)
}

// 함수 타입 사용
const logger: LogFunction = (message, level) => {
  logMessage(message, level)
}

// 애플리케이션 시작
console.log('애플리케이션 설정:', config)
logMessage('애플리케이션 시작됨', LogLevel.INFO)
logger('사용자 로그인: ' + currentUser.name, LogLevel.DEBUG)

// 프로세스가 바로 종료되지 않도록 하는 코드
if (process.pkg) {
  console.log('\n프로그램을 종료하려면 아무 키나 누르세요...')
  process.stdin.setRawMode(true)
  process.stdin.resume()
  process.stdin.on('data', process.exit.bind(process, 0))
}
