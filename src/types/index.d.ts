// src/types/index.d.ts

// 기존 NodeJS namespace 확장
// declare namespace NodeJS {
//   interface Process {
//     pkg?: boolean
//   }
// }

// 커스텀 namespace 선언

// 애플리케이션 전용 타입 정의
export interface Config {
  appName: string
  version: string
  debug: boolean
  features: {
    enableLogging: boolean
    enableCache: boolean
  }
}

export interface User {
  id: number
  name: string
  email: string
  roles: string[]
}

// 열거형 타입 예시
export enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR,
}

// 타입 별칭 예시
export type LogFunction = (message: string, level: LogLevel) => void
