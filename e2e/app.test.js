const videoTitle = 'Oasis - Wonderwall (Official Video)'
const videoDescription = 'Music video by Oasis performing Wonderwall. (C) 1995 Big Brother Recordings Limited SUBSCRIBE HERE: Youtube: ...'

describe('app', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000')
  })

  it('should search for videos and show selected one', async () => {
    // search
    await expect(page).toFill('input', 'oasis wonderwall')
    await expect(page).toClick('button')

    // wait for search results
    const firstSearchResult = await page.waitForSelector('.SearchResult')
    await expect(firstSearchResult).toMatch(videoTitle)

    // select video
    await firstSearchResult.click()

    // check title and description
    await expect(page).toMatchElement('h1', { text: videoTitle })
    await expect(page).toMatchElement('p', { text: videoDescription })

    // check iframe content
    const frame = page.frames()[1]
    const titleInsideIframe = await frame.waitForSelector('.ytp-title-text')
    expect(await frame.evaluate(el => el.innerText, titleInsideIframe)).toBe(videoTitle)

    // take a screenshot for debugging
    // await page.screenshot({ path: './e2e-screenshot.png' })
  })

})
