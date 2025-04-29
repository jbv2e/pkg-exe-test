// src/myApp.ts
// NodeJS namespace 확장
declare global {
  namespace NodeJS {
    export interface Process {
      pkg?: boolean
    }
  }
}

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

export enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR,
}

export type LogFunction = (message: string, level: LogLevel) => void

export declare namespace NodeJS {
  interface Process {
    pkg?: boolean
  }
}
