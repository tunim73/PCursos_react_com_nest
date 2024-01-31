export const isYouTubeEmbedCodeValid = (embedCode: string) => {
  const youtubeEmbedRegex = 'https://www.youtube.com/embed/([^"]*)';
  const match = embedCode.match(youtubeEmbedRegex);
  return match ? true : false;
};
