import https from 'https'
import { API_URL } from './constants'

const fetch = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let chunk: any = ''
      res.on('data', (data: any) => {
        return chunk += data
      }).on('end', () => {
        resolve(chunk)
      })
    }).on('error', (err) => {
      reject(err)
    })
  })
}

export const fetchLogo = (teamId: string) => {
  const url = `${API_URL}/nba/${teamId}/global/L/logo.svg`
  return fetch(url)
}
