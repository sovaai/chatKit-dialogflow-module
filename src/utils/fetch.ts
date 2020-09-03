import { ChatInitFetch, ChatRequestFetch, ChatEventFetch } from '../@types/common'

export const postFetch = async (data: ChatInitFetch | ChatRequestFetch | ChatEventFetch, url: string) => {
  try {
    const fetchResponse = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ data }),
    })
    const fetchResult = await fetchResponse.json()
    return fetchResult.result
  } catch (error) {
    console.log(error)
  }
}
