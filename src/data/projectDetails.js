const contentModules = import.meta.glob('../assets/Projects/*/content.json', {
  eager: true,
  import: 'default',
});

const imageModules = import.meta.glob('../assets/Projects/*/*.{webp,png,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

const reelVideoModules = import.meta.glob('../assets/Projects/*/Reels/*.{mp4,webm,mov}', {
  eager: true,
  import: 'default',
});

function folderFromPath(path) {
  const match = path.match(/Projects[/\\]([^/\\]+)[/\\]/);
  return match ? match[1] : null;
}

function reelFolderFromPath(path) {
  const match = path.match(/Projects[/\\]([^/\\]+)[/\\]Reels[/\\]/i);
  return match ? match[1] : null;
}

function buildProjectCases() {
  const imagesByFolder = {};

  for (const [path, url] of Object.entries(imageModules)) {
    const folder = folderFromPath(path);
    if (!folder) continue;
    if (!imagesByFolder[folder]) imagesByFolder[folder] = [];
    imagesByFolder[folder].push({ path, url });
  }

  for (const folder of Object.keys(imagesByFolder)) {
    imagesByFolder[folder].sort((a, b) => a.path.localeCompare(b.path));
  }

  return Object.entries(contentModules)
    .map(([path, content]) => {
      const folder = folderFromPath(path);
      const carousel = (imagesByFolder[folder] || []).map((img) => img.url);

      return {
        ...content,
        folder,
        carousel,
        coverImage: carousel[0] ?? null,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export const projectCases = buildProjectCases();

function buildProjectReels(cases) {
  const casesByFolder = Object.fromEntries(cases.map((project) => [project.folder, project]));
  const reels = [];

  for (const [path, url] of Object.entries(reelVideoModules)) {
    const folder = reelFolderFromPath(path);
    const project = folder ? casesByFolder[folder] : null;
    if (!project) continue;

    const fileName = path.split(/[/\\]/).pop()?.replace(/\.[^.]+$/, '') ?? path;

    reels.push({
      id: `${project.slug}-${fileName}`,
      video: url,
      title: project.title,
      website: project.website ?? '',
      social: project.social ?? {},
      coverImage: project.coverImage,
    });
  }

  return reels.sort((a, b) => a.id.localeCompare(b.id));
}

export const projectReels = buildProjectReels(projectCases);

export function getProjectBySlug(slug) {
  return projectCases.find((p) => p.slug === slug);
}

export function getReelsBySlug(slug) {
  return projectReels.filter((reel) => reel.id.startsWith(`${slug}-`));
}

export const featuredProjects = projectCases.map((p) => ({
  slug: p.slug,
  title: p.title,
  tagline: p.tagline,
  services: p.services,
  image: p.coverImage,
}));
