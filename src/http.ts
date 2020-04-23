export const post = (url: string, data = {}) => request('POST', url, data)

const request = (
  type: string,
  url: string,
  data: {}
): Promise<{
  data: any
}> =>
  new Promise((resolve, reject) => {
    const r = new XMLHttpRequest()

    r.open(type, url)
    r.send(JSON.stringify(data))

    r.onreadystatechange = () => {
      if (r.readyState !== XMLHttpRequest.DONE) {
        return
      }

      if (r.status !== 200) {
        reject(`${r.status} (${r.statusText})`)
        return
      }

      try {
        const parsed = JSON.parse(r.response)

        resolve({ data: parsed })
      } catch (e) {
        reject(e)
      }
    }
  })
