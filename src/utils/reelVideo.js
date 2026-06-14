export const PREVIEW_SECONDS = 2;

export function getPreviewTime(video) {
  const { duration } = video;
  if (!duration || !Number.isFinite(duration)) return PREVIEW_SECONDS;
  if (duration <= 0.5) return duration / 2;
  return Math.min(PREVIEW_SECONDS, duration - 0.05);
}

export function showPreviewFrame(video) {
  const seekToPreview = () => {
    const target = getPreviewTime(video);

    const handleSeeked = () => {
      video.pause();
      video.removeEventListener('seeked', handleSeeked);
    };

    if (Math.abs(video.currentTime - target) < 0.05) {
      video.pause();
      return;
    }

    video.addEventListener('seeked', handleSeeked);
    video.currentTime = target;
  };

  if (video.readyState >= 2) {
    seekToPreview();
    return;
  }

  video.addEventListener('canplay', seekToPreview, { once: true });
}

export function playFromStart(video) {
  const start = () => {
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  if (video.readyState >= 2) {
    start();
    return;
  }

  video.addEventListener('canplay', start, { once: true });
}

export function syncReelPlayback(video, shouldPlay) {
  const sync = () => {
    if (shouldPlay) playFromStart(video);
    else showPreviewFrame(video);
  };

  video.addEventListener('loadedmetadata', sync);
  if (video.readyState >= 1) sync();

  return () => video.removeEventListener('loadedmetadata', sync);
}
