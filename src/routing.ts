const search = 'https://api.github.com/search/repositories';
const contributors = (login: string, repo: string): string => (
  `https://api.github.com/repos/${login}/${repo}/contributors`
)
const byName = (repoName: string): string => `?q=${repoName}&in:name&`;
const sortByStars: string = 'sort=stars&';
const desc = 'order=desc';
const paginate = (limit: number, page: number): string => (
  `page=${page}&per_page=${limit}&`
);

export const routeByName = (name: string, limit: number, page: number): string => (
  search + byName(name) + sortByStars + paginate(limit, page) + desc
);

export const routeContributors = (login: string, repo: string): string => (
  contributors(login, repo)
);

export const routeDefault = (limit: number): string => (
  search + '?q=stars:>1&' + sortByStars + paginate(limit, 1) + desc
);

export const routeRepository = (name: any, title: any):string => (
  `https://api.github.com/repos/${name}/${title}`
);