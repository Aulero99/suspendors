/* eslint-disable prefer-rest-params */
import { vars } from './_variables.js'

function log(type, content) {
  if (vars.dev) {
    // eslint-disable-next-line no-console
    console[type](`[${type}] :: ${new Date().toLocaleTimeString()} :: `, ...content)
  } else {
    // eslint-disable-next-line default-case
    switch (type) {
      case 'log':
      case 'assert': {
        return
      }
    }

    // eslint-disable-next-line no-warning-comments
    // TODO SEND LOGS TO EXTERNAL SERVICE
    // eslint-disable-next-line no-console
    console[type](`[${type}] :: ${new Date().toLocaleTimeString()} :: `, ...content)
  }
}

export const logger = {
  log() {
    log('log', arguments)
  },
  error() {
    log('error', arguments)
  },
  warn() {
    log('warn', arguments)
  },
  assert() {
    log('assert', arguments)
  },
  trace() {
    log('trace', arguments)
  }
}
